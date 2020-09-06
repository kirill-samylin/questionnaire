export default class Question {
    constructor(quest, renderer, theEnd) {
        this._numberQuest = 0;
        this._answers = [];
        this._quest = quest;
        this._renderer = renderer;
        this._theEnd = theEnd;
        this._start();
    }
    _question() {
        if (this._quest[this._numberQuest]) {
            this._quest[this._numberQuest].number = this._numberQuest + 1; 
            this._renderer(this._quest[this._numberQuest]);
        } else {
            this._theEnd(this._answers);
        }
    }
    answer(str) {
        if (this._quest[this._numberQuest].answers.some((item) => item===str)) {
            this._answers.push({
                'question': this._quest[this._numberQuest].question,
                'answer': str,
            });
            this._next();
        }
    }
    _start() {
        if (!Array.isArray(this._quest) || this._quest.length===0) {
            return
        }
        this._question();
    }
    _next() {
        this._numberQuest++;
        this._question();
    }
}