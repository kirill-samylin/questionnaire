import { questions } from './utils/questions.js';
import Question from './components/Question.js';
import Contexts from './components/Contexts.js';
import { contextsOptions } from './utils/constants.js';

const app = new Contexts(contextsOptions, (answer) => {
    test.answer(answer);
});

const test = new Question(questions,
    (data) => {
        app.questForm(data);
    },
    (data) => {
        app.createListAnswers(data);
    });