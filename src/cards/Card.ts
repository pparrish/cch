import WhiteCardsData from "./WhiteCardsData";
import CardsData from "./CardsData";

export default class Card {
    number: number;
    data: Array<string>;

    static createByNumber(number:number, white:boolean = false):Card {
        if(white) return new Card(WhiteCardsData[number], number)
        return new Card(CardsData[number], number)
    }

    constructor(data: Array<string>, number:number = -1 ) {
        this.data = data
        this.number = number
    }

    combine( whiteCard:Card) {
        let newBlackCard = Card.createByNumber(this.number)
        newBlackCard.data = newBlackCard.data.map(x =>
            x === null ?
                whiteCard.data[0] :
                x
        )
        return newBlackCard
    }
}