export default class Contexts {
    constructor(options, onClick) {
        this._app = document.querySelector(options.appSelector);
        this._form = options.fromSelector;
        this._formTitle = options.formTitle;
        this._formSubTitle = options.formSubTitle;
        this._buttonList = options.buttonList;
        this._formButton = options.formButton;
        this._paragraph = options.paragraph;
        this._onClick = onClick;
        this._onAnswer = (eve) => {
            this._onClick(eve.target.textContent);
        }  
    }
    _getTemplate(name) {
        const formElement = document
            .querySelector(`#${name}`)
            .content
            .querySelector(`.${name}`)
            .cloneNode(true);
        return formElement;
    }
    _createButton(name) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = this._formButton;
        button.textContent = name;
        return button;
    }
    _createParagraph(text) {
        const paragraph = document.createElement('p');
        paragraph.className = this._paragraph;
        paragraph.textContent = `${text.question} - ${text.answer}`;
        return paragraph;
    }      
    _add(contend) {
        this._app.append(contend);
    }
    createListAnswers(data) {
        this._clear();
        data.forEach(text => {
            const paragraph = this._createParagraph(text);
            this._add(paragraph);
        });
    }
    questForm(data) {
        this._clear();
        this._element = this._getTemplate(this._form);
        this._element.querySelector(this._formTitle).textContent = `Вопрос ${data.number}`;
        this._element.querySelector(this._formSubTitle).textContent = data.question;
        data.answers.forEach(element => {
            const button = this._createButton(element);
            button.addEventListener('click', this._onAnswer);
            this._element.querySelector(this._buttonList).append(button);
        }); 
        this._add(this._element);
    }
    _clear() {
        this._app.innerHTML = '';
        this._element = null;
        this._data = null;
    }
}