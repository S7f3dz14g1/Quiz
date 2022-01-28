export class QuizDetails {
    constructor() {
        this.currentQuestion = 0;
        this.IsStarted = false;
    }
    setCurentQuestion(id) {
        this.currentQuestion = id;
    }
    getCurentQuestion() {
        return this.currentQuestion;
    }
    finishQuiz() {
        this.IsStarted = false;
    }
    nextQuestion() {
        this.currentQuestion = this.currentQuestion + 1;
    }
    backQuestion() {
        this.currentQuestion = this.currentQuestion - 1;
    }
    isStarted() {
        return this.IsStarted.toString();
    }
}
