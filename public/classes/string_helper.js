export class StringHelper {
    constructor() {
    }
    getTmieText(time) {
        return `Czas: ${time}`;
    }
    getApproachText(approach) {
        return `Podejście numer: ${approach}`;
    }
    getHeadingTableLists() {
        return ["Nr. pytania", "  Pytanie  ", " Oczekiwana odpowiedź ", "  Twoja odpowiedź  ", " Czas  ", " Punkty "];
    }
    getSumPointsText(points) {
        return `Suma punktów: ${points}/8`;
    }
    getSumTimes(time) {
        return `Czas spędzony przy quize: ${time}`;
    }
    getNumberOfQuestionText(number) {
        return "Pytanie numer " + (number + 1);
    }
    getthanks() {
        return "Dziękujemy za udział w quize :D";
    }
}
