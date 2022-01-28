import { JsonReader } from "./classes/json_reader.js";
import { LocalstorageControler } from "./classes/loclastorage_controler.js";
import { Result } from "./classes/result.js";
import { StringHelper } from "./classes/string_helper.js";
import { Timer } from "./classes/timer.js";
import { DataAccess } from "./interfaces/data_access.js";
import { ReadFile } from "./interfaces/read_file.js";

const titleNode: HTMLHeadingElement = document.querySelector("#title") as HTMLHeadingElement;
const descryptionNode: HTMLHeadingElement = document.querySelector("#descryption") as HTMLHeadingElement;
const questonNumberNode: HTMLHeadingElement = document.querySelector("#numberOfQuestion") as HTMLHeadingElement;
const finishButton: HTMLButtonElement = document.querySelector("#finishBtn") as HTMLButtonElement;
const startButton: HTMLButtonElement = document.querySelector("#startBtn") as HTMLButtonElement;
const questionTextNode: HTMLHeadingElement = document.querySelector("#questionText") as HTMLHeadingElement;
const nextButton: HTMLButtonElement = document.querySelector("#nextBtn") as HTMLButtonElement;
const inputNode: HTMLInputElement = document.querySelector("#input") as HTMLInputElement;
const backButton: HTMLButtonElement = document.querySelector("#backBtn") as HTMLButtonElement;
const timeTextNode: HTMLHeadingElement = document.querySelector("#time") as HTMLHeadingElement;
const resultTextNode: HTMLHeadingElement = document.querySelector("#resultQuizText") as HTMLHeadingElement;
const tableNode: HTMLTableElement = document.querySelector("#table") as HTMLTableElement;

let read_file: ReadFile = new JsonReader();
let data_access: DataAccess = new LocalstorageControler();
let timer: Timer;
let result: Result = new Result(tableNode);
const string_helper: StringHelper = new StringHelper();

function setTitle(): void {
  titleNode.innerText = read_file.getTitle();
}

function setDescryption(): void {
  descryptionNode.innerText = read_file.getDesctyption();
}

function setNumberOfQuestion(numer_pytania: number): void {
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

function setQuestionText(question: string): void {
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

function setAnswer(index: number): void {
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

function finishQuiz(): void {
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

function displayQestion(number_of_question: number): void {
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