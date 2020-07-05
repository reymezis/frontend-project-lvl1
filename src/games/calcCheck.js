import getEngine from '../index.js';

const getRandomNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * 3);
  return operations[randomIndex];
};

const getQuestion = (firstNumber, secondNumber, operator) => {
  const strFirstNumber = firstNumber.toString();
  const strSecondNumber = secondNumber.toString();
  const question = `${strFirstNumber} ${operator} ${strSecondNumber}`;
  return question;
};

const getCorrectAnswer = (firstNumber, secondNumber, operator) => {
  let result;
  if (operator === '+') {
    result = firstNumber + secondNumber;
  } else if (operator === '-') {
    result = firstNumber - secondNumber;
  } else if (operator === '*') {
    result = firstNumber * secondNumber;
  }
  return result.toString();
};

const calcGame = () => {
  const condition = 'What is the result of the expression?';

  const getData = () => {
    const firstNumber = getRandomNumber(0, 10);
    const secondNumber = getRandomNumber(0, 10);
    const operator = getRandomOperation();
    const data = [];
    const question = getQuestion(firstNumber, secondNumber, operator);
    const rightAnswer = getCorrectAnswer(firstNumber, secondNumber, operator);
    data.push(question, rightAnswer);
    return data;
  };

  getEngine(condition, getData);
};

export default calcGame;
