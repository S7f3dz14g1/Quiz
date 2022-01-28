export interface DataAccess {
    setDefaultValues(): void;
    finishQuiz(): void;
    isStarted(): string;
    getCurentQuestion(): number;
    setCurentQuestion(id: number): void;
    setAnswer(id: number, answer: string): void;
    getAnswer(id: number): string;
    isEmptyAnswers(): boolean;
    setTime(id: number, time: number): void;
    getTime(time: number): number;
    isAllAnswers(): boolean;
    nextQuestion(): void;
    backQuestion(): void;
    cleanAnswes(): void;
    cleanTimes(): void;
    incrementApproach(): void;
    getApproach(): number;
    getSumTime(): string;
}