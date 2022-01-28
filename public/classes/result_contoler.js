export class ResultControler {
    constructor() {
    }
    validResult(userAnswer, correctAnswer) {
        if (userAnswer == correctAnswer) {
            return "1";
        }
        else {
            return "0";
        }
    }
    sumPoints(data, question) {
        let sumPoins = 0;
        for (let index = 0; index < 8; index++) {
            if (parseInt(data.getAnswer(index)) == question.getAnswer(index)) {
                sumPoins = sumPoins + 1;
            }
        }
        return sumPoins.toString();
    }
}
