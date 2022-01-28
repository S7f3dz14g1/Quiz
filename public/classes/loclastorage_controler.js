export class LocalstorageControler {
    constructor() {
        localStorage.setItem("isStarted", "false");
        localStorage.setItem("approach", "0");
    }
    setDefaultValues() {
        localStorage.setItem("epmtyAnswers", "true");
        localStorage.setItem("curentQuestion", "0");
        localStorage.setItem("isStarted", "true");
        this.incrementApproach();
        this.cleanAnswes();
        this.cleanTimes();
    }
    incrementApproach() {
        localStorage.setItem("approach", (this.getApproach() + 1).toString());
    }
    getApproach() {
        return parseInt(localStorage.getItem("approach"));
    }
    finishQuiz() {
        localStorage.setItem("isStarted", "false");
    }
    isStarted() {
        return localStorage.getItem("isStarted");
    }
    getCurentQuestion() {
        return parseInt(localStorage.getItem("curentQuestion"));
    }
    setCurentQuestion(id) {
        localStorage.setItem(`curentQuestion`, `${id}`);
    }
    setAnswer(id, answer) {
        localStorage.setItem(`answer${id}`, `${answer}`);
    }
    getAnswer(id) {
        return localStorage.getItem(`answer${id}`);
    }
    isEmptyAnswers() {
        for (let index = 0; index < 8; index++) {
            if (this.getAnswer(index) == "") {
                return false;
            }
        }
        return true;
    }
    setTime(id, time) {
        localStorage.setItem(`time${id}`, `${time}`);
    }
    getTime(time) {
        return parseInt(localStorage.getItem(`time${time}`));
    }
    isAllAnswers() {
        if (parseInt(localStorage.getItem("epmtyAnswers")) == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    nextQuestion() {
        this.setCurentQuestion(this.getCurentQuestion() + 1);
    }
    backQuestion() {
        this.setCurentQuestion(this.getCurentQuestion() - 1);
    }
    cleanAnswes() {
        for (let index = 0; index < 8; index++) {
            localStorage.setItem("answer" + index, "");
        }
    }
    cleanTimes() {
        for (let index = 0; index < 8; index++) {
            localStorage.setItem("time" + index, "0");
        }
    }
    getSumTime() {
        let sumTime = 0;
        for (let index = 0; index < 8; index++) {
            sumTime = parseInt(localStorage.getItem(`time${index}`)) + sumTime;
        }
        return sumTime.toString();
    }
}
