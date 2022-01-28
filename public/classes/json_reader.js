import quiz_data from "./quiz_data.js";
export class JsonReader {
    constructor() {
    }
    getTitle() {
        return quiz_data.title.toString();
    }
    getQuestion(index) {
        return quiz_data.questions[index].question;
    }
    getAnswer(index) {
        return quiz_data.questions[index].answer;
    }
    getDesctyption() {
        return quiz_data.descryption.toString();
    }
}
