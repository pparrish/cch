// @ts-ignore
import Deck from "../cards/Deck";
// @ts-ignore
import Card from "../cards/Card";
// @ts-ignore
import Player from "../players/Player";

export default class Game {
    public name: string;
    public owner: string;
    public black: Deck;
    public actualBlack: Card;
    public players: Player[];
    public started: boolean;

    constructor(
        name: string,
        owner: string,
        black: Deck,
        actualBlack: Card,
        players: Array<Player>,
        started: boolean
    ) {
        this.name = name
        this.owner = owner
        this.black = black
        this.actualBlack = actualBlack
        this.players = players
        this.started = started
    }

    isPlayerOnGame(playerName: String): boolean {
        return this.players.some(player => player.name === playerName);
    }

    get playersObject() {
        return this.players.reduce((obj, player) => {
            return {[player.name]: player, ...obj}
        }, {})
    }

    isOwner(playerName: string) {
        return playerName === this.owner
    }

    getPlayer(playerName) {
        return this.players.find(player => player.name === playerName)
    }

    giveCardsToPlayers(whiteCards:Deck) {
        this.players = this.players.map(
            player => {
                for(let i = 0; i < 10; i++) {
                    player.cards.push( whiteCards.draw(true) )
                }
                return player
            })
    }

    resetBlackCards( deck:Deck) {
        this.black = deck;
    }

    nextBlack():Card {
        this.actualBlack = this.black.draw()
        return this.actualBlack
    }

    starGame( whiteDeck,  blackDeck) {
        this.giveCardsToPlayers( whiteDeck )
        this.resetBlackCards( blackDeck )
        this.nextBlack()
        this.started = true
    }

    selectCard(playerName, selectedCard) {
        const combinedCard = this.actualBlack.combine(selectedCard)
        let player = this.players.find(p => playerName === p.name)
        player.questionCard = combinedCard
        player.cards.splice(
            player.cards.findIndex(x => x === selectedCard),
            1)
        player.selecting = false
        player.voting = true
        return player
    }

    restarGame() {
    }
}