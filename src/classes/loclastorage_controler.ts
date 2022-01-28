import { DataAccess } from "../interfaces/data_access";
import { TimeListener } from "../interfaces/timeListner";

export class LocalstorageControler implements TimeListener, DataAccess {
    constructor() {
        localStorage.setItem("isStarted", "false");
        localStorage.setItem("approach", "0");
    }

    setDefaultValues(): void {
        localStorage.setItem("epmtyAnswers", "true");
        localStorage.setItem("curentQuestion", "0");
        localStorage.setItem("isStarted", "true");
        this.incrementApproach();
        this.cleanAnswes();
        this.cleanTimes();
    }

    incrementApproach(): void {
        localStorage.setItem("approach", (this.getApproach() + 1).toString());
    }

    getApproach(): number {
        return parseInt(localStorage.getItem("approach"));
    }

    finishQuiz(): void {
        localStorage.setItem("isStarted", "false");
    }

    isStarted(): string {
        return localStorage.getItem("isStarted");
    }

    getCurentQuestion(): number {
        return parseInt(localStorage.getItem("curentQuestion"));
    }

    setCurentQuestion(id: number): void {
        localStorage.setItem(`curentQuestion`, `${id}`);
    }

    setAnswer(id: number, answer: string): void {
        localStorage.setItem(`answer${id}`, `${answer}`);
    }

    getAnswer(id: number): string {
        return localStorage.getItem(`answer${id}`);
    }

    isEmptyAnswers(): boolean {
        for (let index = 0; index < 8; index++) {
            if (this.getAnswer(index) == "") {
                return false;
            }
        }
        return true;
    }

    setTime(id: number, time: number): void {
        localStorage.setItem(`time${id}`, `${time}`);
    }

    getTime(time: number): number {
        return parseInt(localStorage.getItem(`time${time}`));
    }

    isAllAnswers(): boolean {
        if (parseInt(localStorage.getItem("epmtyAnswers")) == 0) {
            return true;
        } else {
            return false;
        }
    }

    nextQuestion(): void {
        this.setCurentQuestion(this.getCurentQuestion() + 1);
    }

    backQuestion(): void {
        this.setCurentQuestion(this.getCurentQuestion() - 1);
    }

    cleanAnswes(): void {
        for (let index = 0; index < 8; index++) {
            localStorage.setItem("answer" + index, "");
        }
    }

    cleanTimes(): void {
        for (let index = 0; index < 8; index++) {
            localStorage.setItem("time" + index, "0");
        }
    }

    getSumTime(): string {
        let sumTime: number = 0;
        for (let index = 0; index < 8; index++) {
            sumTime = parseInt(localStorage.getItem(`time${index}`)) + sumTime;
        }
        return sumTime.toString();
    }
}