export class QuizDetails {
    currentQuestion: number;
    IsStarted: boolean;
    constructor() {
        this.currentQuestion = 0;
        this.IsStarted = false;
    }
    setCurentQuestion(id: number): void {
        this.currentQuestion = id;
    }
    getCurentQuestion(): number {
        return this.currentQuestion;
    }
    finishQuiz(): void {
        this.IsStarted = false;
    }
    nextQuestion(): void {
        this.currentQuestion = this.currentQuestion + 1;
    }
    backQuestion(): void {
        this.currentQuestion = this.currentQuestion - 1;
    }
    isStarted(): string {
        return this.IsStarted.toString();
    }
}