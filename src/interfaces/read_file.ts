export interface ReadFile {
    getTitle(): string;
    getQuestion(index: number);
    getAnswer(index: number);
    getDesctyption(): string;
}