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

const getGameData = () => {
  const firstNumber = getRandomNumber(10, 100);
  const secondNumber = getRandomNumber(10, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGcd(firstNumber, secondNumber);

  const gameData = [];
  gameData.push(question, answer.toString());
  return gameData;
};

const runGameGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';

  getEngine(description, getGameData);
};

export default runGameGcd;
