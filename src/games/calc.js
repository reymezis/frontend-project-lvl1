import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const operators = ['+', '-', '*'];

const getRandomOperator = () => {
  const randomIndex = getRandomNumber(0, operators.length - 1);
  return operators[randomIndex];
};

const getQuestion = (firstNumber, secondNumber, operator) => {
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  return question;
};

const getResultCalculation = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;

    case '-':
      return firstNumber - secondNumber;

    case '*':
      return firstNumber * secondNumber;

    default:
      return null;
  }
};

const getAnswer = (firstNumber, secondNumber, operator) => {
  const answer = getResultCalculation(firstNumber, secondNumber, operator);
  return answer.toString();
};

const getGameData = () => {
  const firstNumber = getRandomNumber(0, 10);
  const secondNumber = getRandomNumber(0, 10);
  const operator = getRandomOperator();

  const question = getQuestion(firstNumber, secondNumber, operator);
  const answer = getAnswer(firstNumber, secondNumber, operator);
  return [question, answer];
};

const description = 'What is the result of the expression?';

const runGameCalc = () => {
  runEngine(description, getGameData);
};

export default runGameCalc;
