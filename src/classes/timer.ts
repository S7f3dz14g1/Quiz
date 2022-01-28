import { TimeListener } from "../interfaces/timeListner";
import { StringHelper } from "./string_helper.js";

export class Timer {
    time: number = 0;
    lisner: TimeListener;
    constructor(lisner: TimeListener) {
        this.lisner = lisner;
    }

    startTimer(component: HTMLSpanElement): void {
        setInterval(() => (component.innerText = `Czas: ${++this.time}`), 1000);
    }

    restartTimer(): void {
        this.time = 0;
    }

    stopTimer(component: HTMLSpanElement, currentId: number, nextId: number): void {
        this.lisner.setTime(currentId, this.time);
        clearInterval(this.time);
        this.time = this.lisner.getTime(nextId);
        const string_helper: StringHelper = new StringHelper();
        component.innerText = string_helper.getTmieText(this.time);
    }

    endQuizTimer(currentId: number): void {
        this.lisner.setTime(currentId, this.time);
        clearInterval(this.time);
        this.time = 0;
    }
}