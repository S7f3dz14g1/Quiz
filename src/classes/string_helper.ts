export class StringHelper {
    constructor() {

    }
    getTmieText(time: number): string {
        return `Czas: ${time}`;
    }

    getApproachText(approach: number): string {
        return `Podejście numer: ${approach}`
    }

    getHeadingTableLists(): string[] {
        return ["Nr. pytania", "  Pytanie  ", " Oczekiwana odpowiedź ", "  Twoja odpowiedź  ", " Czas  ", " Punkty "];
    }

    getSumPointsText(points: string): string {
        return `Suma punktów: ${points}/8`
    }

    getSumTimes(time: string): string {
        return `Czas spędzony przy quize: ${time}`
    }

    getNumberOfQuestionText(number: number): string {
        return "Pytanie numer " + (number + 1);
    }

    getthanks(): string {
        return "Dziękujemy za udział w quize :D"
    }
}