// 3**. На базе игры (приняв за пример), созданной на уроке, реализовать игру «Кто хочет стать миллионером?».
// Т.е. у вас должен быть главный объект содержащий всю логику игры, который будет иметь методы, например
// метод run, возможно метод init и т.д.
// В игре должны быть заранее подготовлены список вопросов и ответов (как минимум 5 вопросов).
// Игра должна приветствовать пользователя, после чего задавать вопросы пользователю и предлагать варианты
// ответов в виде теста, например:
// Сколько букв в слове "привет":
// a. Пять.
// b. Шесть.
// c. Семь.
// d. Куда я попал?
// Проверять правильный вариант выбрал пользователь или нет, необходимо вести счет.
// По окончании игры, когда было задано 5 вопросов, вы должны сообщить пользователю его счет и предложить
// сыграть снова.
// Также должна быть возможность выхода из игры заранее, если пользователю надоело играть.

// не доделал
'use strict';

const settings = {
  questionsNum: Object.keys(this.questions).length,
  totalCount: 0,

  // список вопросов и ответов на них
  questions: {
    qu1: {
      qu: 'Сколько букв в слове "привет"?',
      ans: 'Шесть',
      availableAns: ['Пять', 'Шесть', 'Семь', 'Куда я попал?'],
    },
    qu2: {
      qu: 'Сколько букв в слове "пока"?',
      ans: 'Четыре',
      availableAns: ['Четыре', 'Шесть', 'Семь', 'Десять'],
    },
    qu3: {
      qu: 'Сколько букв в слове "три"?',
      ans: 'Три',
      availableAns: ['Пять', 'Шесть', 'Три', 'Десять'],
    },
    qu4: {
      qu: 'Просто выбери ответ 1',
      ans: 'Пять',
      availableAns: ['Пять', 'Шесть', 'Семь', 'Куда я попал?'],
    },
    qu5: {
      qu: 'Попробуй угадать правильный ответ',
      ans: 'Два',
      availableAns: ['Один', 'Два', 'Три', 'Четыре'],
    },
  },


  // Управление.
  quitFromGame: 0,
  answer1: 1,
  answer2: 2,
  answer3: 3,
  answer4: 4,
};

const player = {
  toAnswer() {
    // отвечает на вопрос
  },

  takeAHint() {
    // берет подсказку
  },
};

const game = {
  settings,
  player,

  run() {
    this.getAnswer();
  },

  getQuestion() {
    let numberOfQuestion = 1;
    let question = this.settings.questions[`qu${numberOfQuestion}`];
    numberOfQuestion++;
    return question
  },

  getAnswer(question) {
    let availableAnswersArr = question.availableAns;
    let availableAnswers = '';

    for (let i = 0; i === availableAnswersArr.length; i++) {
      availableAnswers += `${i + 1}.${availableAnswersArr[i]}\n`
    }

    const answer = parseInt(prompt(`${question}\n${availableAnswers}`));

    return answer;
  },

  isAnswerCorrect(answer) {

  },

  canPlayerMakeStep(direction) {
    const stepToLeft = [this.settings.downAndLeft, this.settings.left, this.settings.upAndLeft];
    const stepToRight = [this.settings.downAndRight, this.settings.right, this.settings.upAndRight];
    const stepToUp = [this.settings.upAndLeft, this.settings.up, this.settings.upAndRight];
    const stepToDown = [this.settings.downAndLeft, this.settings.down, this.settings.downAndRight];

    switch (true) {
      case stepToLeft.includes(direction) && this.player.x === this.settings.startPositionX:
      case stepToRight.includes(direction) && this.player.x === this.settings.rowsCount - 1:
      case stepToUp.includes(direction) && this.player.y === this.settings.startPositionY:
      case stepToDown.includes(direction) && this.player.y === this.settings.colsCount - 1:
        return false;
      default:
        return true
    }
  }
};

