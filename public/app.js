import { JsonReader } from "./classes/json_reader.js";
import { LocalstorageControler } from "./classes/loclastorage_controler.js";
import { Result } from "./classes/result.js";
import { StringHelper } from "./classes/string_helper.js";
import { Timer } from "./classes/timer.js";
const titleNode = document.querySelector("#title");
const descryptionNode = document.querySelector("#descryption");
const questonNumberNode = document.querySelector("#numberOfQuestion");
const finishButton = document.querySelector("#finishBtn");
const startButton = document.querySelector("#startBtn");
const questionTextNode = document.querySelector("#questionText");
const nextButton = document.querySelector("#nextBtn");
const inputNode = document.querySelector("#input");
const backButton = document.querySelector("#backBtn");
const timeTextNode = document.querySelector("#time");
const resultTextNode = document.querySelector("#resultQuizText");
const tableNode = document.querySelector("#table");
let read_file = new JsonReader();
let data_access = new LocalstorageControler();
let timer;
let result = new Result(tableNode);
const string_helper = new StringHelper();
function setTitle() {
    titleNode.innerText = read_file.getTitle();
}
function setDescryption() {
    descryptionNode.innerText = read_file.getDesctyption();
}
function setNumberOfQuestion(numer_pytania) {
    questonNumberNode.innerText = string_helper.getNumberOfQuestionText(numer_pytania);
}
startButton.addEventListener("click", (e) => {
    if (data_access.isStarted() == "false") {
        data_access.setDefaultValues();
        startQuiz();
    }
});
function startQuiz() {
    displayQestion(0);
    unhideComonents();
    if (timer == null) {
        timer = new Timer(data_access);
        timer.startTimer(timeTextNode);
    }
    timer.restartTimer();
}
function setQuestionText(question) {
    questionTextNode.innerText = question;
}
nextButton.addEventListener("click", (e) => {
    if (data_access.isStarted() == "true") {
        nextQuestion();
    }
});
function nextQuestion() {
    if (data_access.getCurentQuestion() < 7) {
        timer.stopTimer(timeTextNode, data_access.getCurentQuestion(), data_access.getCurentQuestion() + 1);
        data_access.setAnswer(data_access.getCurentQuestion(), inputNode.value);
        data_access.nextQuestion();
        displayQestion(data_access.getCurentQuestion());
        setAnswer(data_access.getCurentQuestion());
    }
}
function setAnswer(index) {
    inputNode.value = data_access.getAnswer(index);
}
backButton.addEventListener("click", (e) => {
    if (data_access.isStarted() == "true") {
        backQuestion();
    }
});
function backQuestion() {
    if (data_access.getCurentQuestion() > 0) {
        timer.stopTimer(timeTextNode, data_access.getCurentQuestion(), data_access.getCurentQuestion() - 1);
        data_access.setAnswer(data_access.getCurentQuestion(), inputNode.value);
        data_access.backQuestion();
        displayQestion(data_access.getCurentQuestion());
        setAnswer(data_access.getCurentQuestion());
    }
}
finishButton.addEventListener("click", (e) => {
    if (data_access.isStarted() == "true") {
        finishQuiz();
    }
});
function finishQuiz() {
    data_access.setAnswer(data_access.getCurentQuestion(), inputNode.value);
    if (data_access.isEmptyAnswers()) {
        timer.endQuizTimer(data_access.getCurentQuestion());
        data_access.finishQuiz();
        hideComonents();
        result.getHead(data_access);
        result.getResult(data_access, read_file);
        inputNode.value = "";
        resultTextNode.hidden = false;
        questonNumberNode.innerText = string_helper.getthanks();
    }
}
function displayQestion(number_of_question) {
    setNumberOfQuestion(number_of_question);
    setQuestionText(read_file.getQuestion(number_of_question));
}
function hideComonents() {
    backButton.hidden = true;
    nextButton.hidden = true;
    inputNode.hidden = true;
    finishButton.hidden = true;
    questionTextNode.hidden = true;
    timeTextNode.hidden = true;
    resultTextNode.hidden = true;
}
function unhideComonents() {
    backButton.hidden = false;
    nextButton.hidden = false;
    inputNode.hidden = false;
    finishButton.hidden = false;
    questionTextNode.hidden = false;
    timeTextNode.hidden = false;
}
setTitle();
setDescryption();
hideComonents();
