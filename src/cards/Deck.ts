import Card from "./Card";

export default class Deck {
    private readonly cardNumbers: Array<number>

    constructor(cardNumbers: Array<number>) {
        this.cardNumbers = cardNumbers
    }

    draw(white = false):Card {
        let cardToPick = Math.floor(Math.random() * this.cardNumbers.length)
        let card = this.cardNumbers[cardToPick]
        this.cardNumbers.splice(cardToPick, 1)
        return Card.createByNumber(card, white)
    }

    get remainingCards() {
        return this.cardNumbers.length
    }

    getArrayOfCards():Array<number> {
        return this.cardNumbers
    }
}