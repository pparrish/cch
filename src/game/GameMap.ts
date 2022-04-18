import Game from "./Game";
import type {FirestoreDataConverter, DocumentData, QueryDocumentSnapshot, SnapshotOptions} from "firebase/firestore";
import Deck from "../cards/Deck";
import Card from "../cards/Card";
import Player from "../players/Player";

const gameConverter:FirestoreDataConverter<Game> = {
    toFirestore:  (game:Game):DocumentData => {
        return {
            name: game.name,
            owner: game.owner,
            black: game.black.getArrayOfCards(),
            actualBlack: game.actualBlack.number,
            players: game.players.reduce(
                (prev, player) => {
                    {
                        let data = {
                            name: player.name,
                            cards: player.cards.map(card => card.number),
                            selecting: player.selecting,
                            questionCard: player.questionCard.data,
                            points: player.points,
                            voting: player.voting,
                            waitingToNextTurn: player.waitingToNextTurn
                        }
                        return {...prev, [player.name]: data}
                    }
                }, {}
            ),
            started: game.started
        }
    },
    fromFirestore: (snapshot:QueryDocumentSnapshot<DocumentData>, options?:SnapshotOptions): Game => {
        const data = snapshot.data(options)
        return new Game(
            data.name,
            data.owner,
            new Deck(data.black),
            Card.createByNumber(data.actualBlack),
            Object.keys(data.players)
                .map(playerName => data.players[playerName] )
                .map( playerData => {
                return new Player(
                     playerData.name,
                     playerData.cards.map ( x => Card.createByNumber(x, true)),
                     playerData.selecting,
                    new Card(playerData.questionCard),
                    playerData.points,
                    playerData.voting,
                    playerData.waitingToNextTurn
                )
            }),
            data.started
        )
    },
}
export default gameConverter

