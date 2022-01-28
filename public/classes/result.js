import { ResultControler } from "./result_contoler.js";
import { StringHelper } from "./string_helper.js";
export class Result {
    constructor(table) {
        this.table = table;
        this.string_helper = new StringHelper();
    }
    getHead(data) {
        const approachTr = document.createElement("tr");
        const approachText = document.createElement("h3");
        approachTr.append(approachText);
        this.table.append(approachTr);
        approachText.append(this.string_helper.getApproachText(data.getApproach()));
        const headTr = document.createElement("tr");
        const listTitleHead = this.string_helper.getHeadingTableLists();
        for (let index = 0; index < listTitleHead.length; index++) {
            const headTh = document.createElement("th");
            headTh.append(listTitleHead[index]);
            headTr.append(headTh);
        }
        this.table.append(headTr);
    }
    getResult(data, question) {
        const result_controller = new ResultControler();
        for (let index = 0; index < 8; index++) {
            const tr = document.createElement("tr");
            const tdNumer = document.createElement("td");
            tdNumer.append(index.toString());
            tr.append(tdNumer);
            const tdQuestion = document.createElement("td");
            tdQuestion.append(question.getQuestion(index));
            tr.append(tdQuestion);
            const tdAkceptedAnswer = document.createElement("td");
            tdAkceptedAnswer.append(question.getAnswer(index).toString());
            tr.append(tdAkceptedAnswer);
            const tdUserAnswer = document.createElement("td");
            tdUserAnswer.append(data.getAnswer(index));
            tr.append(tdUserAnswer);
            const tdTime = document.createElement("td");
            tdTime.append(data.getTime(index).toString());
            tr.append(tdTime);
            const tdPoint = document.createElement("td");
            tdPoint.append(result_controller.validResult(parseInt(data.getAnswer(index)), question.getAnswer(index)));
            tr.append(tdPoint);
            this.table.append(tr);
        }
        const sumPointsTr = document.createElement("tr");
        const sumPointsh3 = document.createElement("h3");
        sumPointsh3.append(this.string_helper.getSumPointsText(result_controller.sumPoints(data, question)));
        sumPointsTr.append(sumPointsh3);
        this.table.append(sumPointsTr);
        const sumTimeTr = document.createElement("tr");
        const sumtTimeH3 = document.createElement("h3");
        sumtTimeH3.append(this.string_helper.getSumTimes(data.getSumTime()));
        sumTimeTr.append(sumtTimeH3);
        this.table.append(sumTimeTr);
    }
}
