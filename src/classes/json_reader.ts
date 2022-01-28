import { ReadFile } from "../interfaces/read_file.js";
import quiz_data from "./quiz_data.js";

export class JsonReader implements ReadFile {

    constructor() {
    }

    getTitle(): string {
        return quiz_data.title.toString();
    }

    getQuestion(index: number) {
        return quiz_data.questions[index].question;
    }

    getAnswer(index: number) {
        return quiz_data.questions[index].answer;
    }

    getDesctyption(): string {
        return quiz_data.descryption.toString();
    }
}