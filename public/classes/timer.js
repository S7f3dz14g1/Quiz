import { StringHelper } from "./string_helper.js";
export class Timer {
    constructor(lisner) {
        this.time = 0;
        this.lisner = lisner;
    }
    startTimer(component) {
        setInterval(() => (component.innerText = `Czas: ${++this.time}`), 1000);
    }
    restartTimer() {
        this.time = 0;
    }
    stopTimer(component, currentId, nextId) {
        this.lisner.setTime(currentId, this.time);
        clearInterval(this.time);
        this.time = this.lisner.getTime(nextId);
        const string_helper = new StringHelper();
        component.innerText = string_helper.getTmieText(this.time);
    }
    endQuizTimer(currentId) {
        this.lisner.setTime(currentId, this.time);
        clearInterval(this.time);
        this.time = 0;
    }
}
