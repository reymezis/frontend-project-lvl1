import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (value) => value % 2 === 0;

const getAnswer = (question) => (isEven(question) ? 'yes' : 'no');

const getGameData = () => {
  const question = getRandomNumber(1, 50);
  const answer = getAnswer(question);
  return [question.toString(), answer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const runGameEven = () => {
  runEngine(description, getGameData);
};

export default runGameEven;
