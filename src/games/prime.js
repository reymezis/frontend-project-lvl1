import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (value) => {
  if (value < 2) {
    return false;
  }
  for (let i = 2; i < value; i += 1) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
};

const getAnswer = (question) => {
  if (isPrime(question)) {
    return 'yes';
  }
  return 'no';
};

const getGameData = () => {
  const question = getRandomNumber(0, 100);
  const answer = getAnswer(question);

  const gameData = [];
  gameData.push(question, answer);
  return gameData;
};

const runGamePrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  runEngine(description, getGameData);
};

export default runGamePrime;
