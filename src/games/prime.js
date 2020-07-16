import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let divisor = 2; divisor <= num / 2; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
};

const getAnswer = (question) => (isPrime(question) ? 'yes' : 'no');

const getGameData = () => {
  const question = getRandomNumber(0, 100);
  const answer = getAnswer(question);
  return [question.toString(), answer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runGamePrime = () => {
  runEngine(description, getGameData);
};

export default runGamePrime;
