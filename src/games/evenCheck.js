import getEngine from '../index.js';

const getRandomNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getCorrectAnswer = (question) => {
  if (question % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const evenGame = () => {
  const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getData = () => {
    const data = [];
    const question = getRandomNumber(1, 50);
    const rightAnswer = getCorrectAnswer(question);
    data.push(question, rightAnswer);
    return data;
  };
  getEngine(condition, getData);
};

export default evenGame;
