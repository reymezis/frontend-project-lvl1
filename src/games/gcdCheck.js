import getEngine from '../index.js';

const getRandomNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getGcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return getGcd(b, a % b);
};

const gcdGame = () => {
  const condition = 'Find the greatest common divisor of given numbers.';

  const getData = () => {
    const firstNumber = getRandomNumber(10, 100);
    const secondNumber = getRandomNumber(10, 100);
    const question = `${firstNumber} ${secondNumber}`;
    const correctAnswer = getGcd(firstNumber, secondNumber);
    const data = [];
    data.push(question, correctAnswer.toString());
    return data;
  };

  getEngine(condition, getData);
};

export default gcdGame;
