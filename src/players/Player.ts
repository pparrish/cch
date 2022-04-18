// @ts-ignore
import Card from "../cards/Card";

export default class Player {
    name: string
    cards: Array<Card>
    selecting: boolean
    questionCard: Card
    points: number
    voting: boolean
    waitingToNextTurn: boolean

    constructor(
        name: string,
        cards: Array<Card>,
        selecting: boolean,
        questionCard: Card,
        points: number,
        voting: boolean,
        waitingToNextTurn: boolean
    ) {
        this.name = name
        this.cards = cards
        this.selecting = selecting
        this.questionCard = questionCard
        this.points = points
        this.voting = voting
        this.waitingToNextTurn = waitingToNextTurn
    }
}