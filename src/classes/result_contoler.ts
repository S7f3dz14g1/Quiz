import { DataAccess } from "../interfaces/data_access";
import { JsonReader } from "./json_reader";

export class ResultControler {
    constructor() {

    }
    validResult(userAnswer: number, correctAnswer: number): string {
        if (userAnswer == correctAnswer) {
            return "1";
        } else {
            return "0";
        }
    }

    sumPoints(data: DataAccess, question: JsonReader): string {
        let sumPoins: number = 0;
        for (let index = 0; index < 8; index++) {
            if (parseInt(data.getAnswer(index)) == question.getAnswer(index)) {
                sumPoins = sumPoins + 1;
            }
        }
        return sumPoins.toString();
    }
}