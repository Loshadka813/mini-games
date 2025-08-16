function guessNumber() {
    const targetNumb = Math.floor(Math.random() * 100) + 1;
    let i = 0;

    while (true) {
        const userGuess = prompt('Угадайте число от 1 до 100');
        i++;

        if (userGuess === null) {
            alert('Игра завершена');
            break;
        }

        const guess = parseInt(userGuess, 10);

        if (isNaN(guess)) {
            alert('Введите число.');
            continue;
        }

        if (guess === targetNumb) {
            alert(`Вы угадали число ${targetNumb}`);
            break;
        } else {
            if (guess < targetNumb) {
                alert("Загаданное число больше");
            } else {
                alert("Загаданное число меньше");
            }
        }
    }
}



function arithmetic() {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let result;

    if (operator === '/' && num2 === 0) {
        return arithmetic();
    }

    if (operator === '/' && num1 % num2 !== 0) {
        return arithmetic();
    }

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }

    const userAnswer = prompt(`Сколько будет ${num1} ${operator} ${num2} = ?`);

    if (userAnswer === null) {
        alert('Игра завершена');
        return;
    }

    const answer = parseFloat(userAnswer);

    if (isNaN(answer)) {
        alert('Введите число.');
    } else if (answer === result) {
        alert('Правильно!');
    } else {
        alert(`Неправильно. Правильный ответ ${result}`);
    }
}


function turnTheTextOver() {
    let line = prompt('Введите текст');
    let reverseLine = line.split('').reverse().join('');
    alert(`${reverseLine}`);
}

const quiz = [
    {
        question: "Какого цвета небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function quizGame() {
    let correctCount = 0;
    for (let i = 0; i < quiz.length; i++) {
        const userAnswer = prompt(`${quiz[i].question}\n\n${quiz[i].options.join("\n")}`);

        if (userAnswer === null) {
            alert('Игра завершена.');
            return;
        }

        const answerNumber = parseInt(userAnswer);
        if (isNaN(answerNumber)) {
            alert('Введите число.');
            continue;
        }
        if (answerNumber === quiz[i].correctAnswer) {
            correctCount++;
            alert('Правильно!')
        } else {
            alert(`Не правильно! Правильный ответ: ${quiz[i].correctAnswer}`)
        }
    }
    alert(`Вы ответили верно на ${correctCount} вопросов`);
}

function rockPaperScissors() {
    const userAnswer = prompt(`Выберите:\n\nКамень, ножницы или бумага?`);
    if (userAnswer === null) {
        alert('Игра завершена');
        return;
    }

    const options = ["камень", "ножницы", "бумага"];
    const option = options[Math.floor(Math.random() * options.length)];

    alert(`Ваш выбор - ${userAnswer}\n\nВыбор компьтера - ${option}`)

    if (
        (option === "камень" && userAnswer.toLocaleLowerCase() === "камень") ||
        (option === "ножницы" && userAnswer.toLocaleLowerCase() === "ножницы") ||
        (option === "бумага" && userAnswer.toLocaleLowerCase() === "бумага")) {
        alert('Ничья')
    } else if (
        (option === "камень" && userAnswer.toLocaleLowerCase() === "бумага") ||
        (option === "бумага" && userAnswer.toLocaleLowerCase() === "ножницы") ||
        (option === "ножницы" && userAnswer.toLocaleLowerCase() === "камень")) {
        alert('Вы выграли!')
    } else if (
        (option === 'камень' && userAnswer.toLocaleLowerCase() === 'ножницы') ||
        (option === 'бумага' && userAnswer.toLocaleLowerCase() === 'камень') ||
        (option === 'ножницы' && userAnswer.toLocaleLowerCase() === 'бумага')
    ) {
        alert('Вы проиграли!');
    } else {
        alert('Ошибка: Вы ввели неправильное слово.');
    }
}


function randomColorGenerator() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const backgroundEl = document.querySelectorAll('.about-games, .mini-games');

    backgroundEl.forEach(el => {
        el.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    })
}



