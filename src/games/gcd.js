import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const getGcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return getGcd(b, a % b);
};

const getGameData = () => {
  const firstNumber = getRandomNumber(10, 100);
  const secondNumber = getRandomNumber(10, 100);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGcd(firstNumber, secondNumber).toString();
  return [question, answer];
};

const description = 'Find the greatest common divisor of given numbers.';

const runGameGcd = () => {
  runEngine(description, getGameData);
};

export default runGameGcd;
