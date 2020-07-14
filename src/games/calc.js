import getEngine from '../index.js';
import getRandomNumber from '../utils.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * 3);
  return operators[randomIndex];
};

const getQuestion = (firstNumber, secondNumber, operator) => {
  const strFirstNumber = firstNumber.toString();
  const strSecondNumber = secondNumber.toString();
  const question = `${strFirstNumber} ${operator} ${strSecondNumber}`;
  return question;
};

const getAnswer = (firstNumber, secondNumber, operator) => {
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

const getGameData = () => {
  const firstNumber = getRandomNumber(0, 10);
  const secondNumber = getRandomNumber(0, 10);
  const operator = getRandomOperator();

  const gameData = [];
  const question = getQuestion(firstNumber, secondNumber, operator);
  const answer = getAnswer(firstNumber, secondNumber, operator);
  gameData.push(question, answer);
  return gameData;
};

const runGameCalc = () => {
  const description = 'What is the result of the expression?';

  getEngine(description, getGameData);
};

export default runGameCalc;
