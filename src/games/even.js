import getEngine from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (value) => {
  if (value % 2 === 0) {
    return true;
  }
  return false;
};

const getAnswer = (question) => {
  if (isEven(question)) {
    return 'yes';
  }
  return 'no';
};

const getGameData = () => {
  const gameData = [];
  const question = getRandomNumber(1, 50);
  const answer = getAnswer(question);
  gameData.push(question, answer);
  return gameData;
};

const runGameEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  getEngine(description, getGameData);
};

export default runGameEven;
