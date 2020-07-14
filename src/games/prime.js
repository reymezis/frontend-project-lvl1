import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (value) => {
  if (value < 2) {
    return false;
  }
  for (let i = 2; i <= value / 2; i += 1) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
};

const getAnswer = (question) => (isPrime(question) ? 'yes' : 'no');

const getGameData = () => {
  const question = getRandomNumber(0, 100);
  const answer = getAnswer(question);
  return [question, answer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runGamePrime = () => {
  runEngine(description, getGameData);
};

export default runGamePrime;
