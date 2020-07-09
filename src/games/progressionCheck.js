import getEngine from '../index.js';

const getRandomNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getData = () => {
  let a = getRandomNumber(0, 5);
  const d = getRandomNumber(1, 10);
  const k = getRandomNumber(0, 9);
  const result = [];
  for (let n = 0; n < 10; n += 1) {
    a += d;
    result.push(a);
  }
  const answer = result[k].toString();
  result.splice(k, 1, '..');
  const question = result.join(' ');
  const data = [];
  data.push(question, answer);
  return data;
};

const progressionGame = () => {
  const condition = 'What number is missing in the progression?';

  getEngine(condition, getData);
};

export default progressionGame;
