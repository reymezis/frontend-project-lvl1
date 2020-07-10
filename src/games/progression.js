import getEngine from '../index.js';

const getRandomNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getData = () => {
  let num = getRandomNumber(0, 5);
  const dif = getRandomNumber(1, 10);
  const space = getRandomNumber(0, 9);
  const numbers = [];

  for (let i = 0; i < 10; i += 1) {
    num += dif;
    numbers.push(num);
  }

  const answer = numbers[space].toString();
  numbers.splice(space, 1, '..');
  const question = numbers.join(' ');

  const data = [];
  data.push(question, answer);
  return data;
};

const runGameProgression = () => {
  const condition = 'What number is missing in the progression?';

  getEngine(condition, getData);
};

export default runGameProgression;
