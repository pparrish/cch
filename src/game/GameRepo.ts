import Game from "./Game";
import Deck from "../cards/Deck";
import Player from "../players/Player";
import Card from "../cards/Card";
import GameMap from "./GameMap";
import {doc, getDoc, onSnapshot, setDoc, runTransaction} from "firebase/firestore";
import {db} from "../firebase/firebase";

let ref;
let rawRef;

export function init(partyName:string) {
    // @ts-ignore
    rawRef = doc(db, "parties", partyName)
    ref = rawRef.withConverter(GameMap)
}

export async function exist(name?:string ) {
    let r

    if(name) {
         r = doc(db, "parties", name)
    } else {
        if(ref === undefined) {
            throw new Error("Repo is not initialized")
        }
        r = ref
    }
    const snap = await getDoc(r)
    return snap.exists()
}

export async function getGame():Promise<Game> {
    if(ref === undefined) {
        throw new Error("Repo is not initialized")
    }
    const snap = await getDoc(ref)
    if( !snap.exists() ) return null
    return snap.data() as Game;
}

export function createGame(name:string, owner:string, playersNames:Array<string>):Game {

    const players = playersNames.map(playerName => new Player(
        playerName,
        [],
        true,
        new Card([]),
        0,
        false,
        false
    ))
    const game = new Game(name, owner, new Deck([]), new Card([]), players, false)

    setDoc(ref, game).catch( x => console.log("Can't save the game"));

    return game
}

export function saveGame(game) {
    setDoc(ref, game).catch( x => console.log("Can't save the game"));
}

 export async function savePlayer( player) {
    await runTransaction(db, async (transaction) => {
        const snap = await transaction.get(rawRef);
        const gameData = snap.data()
        // @ts-ignore
        gameData.players[player.name] = {
            name: player.name,
            cards: player.cards.map(card => card.number),
            selecting: player.selecting,
            questionCard: player.questionCard.data,
            points: player.points,
            voting: player.voting,
            waitingToNextTurn: player.waitingToNextTurn
        }
        // @ts-ignore
        transaction.update(rawRef,{ "players": gameData.players })
    })

}

export function subscribe(x) {
    return onSnapshot(ref, snap => {
        x(snap.data())
    })
}

/*
export async function toPersistence(game:Game) {
    if(ref == undefined) {
        console.log("Mapper not initialized")
        return
    }
    await setDoc(ref, game);
}

export async function actualGame():Promise<Game> {
    if(ref == undefined) {
        console.log("Mapper not initialized")
        return
    }
    let snapshot = await getDoc(ref)
    return snapshot.data() as Game
}
 */