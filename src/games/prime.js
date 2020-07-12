import getEngine from '../index.js';

const getRandomNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

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

  getEngine(description, getGameData);
};

export default runGamePrime;
