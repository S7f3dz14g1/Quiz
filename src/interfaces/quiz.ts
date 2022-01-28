export interface Quiz {
    descryption: string;
    title: string;
    questions: Question[];
}

interface Question {
    question: string;
    answer: number;
}
