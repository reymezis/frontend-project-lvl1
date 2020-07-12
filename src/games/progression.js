import getEngine from '../index.js';

const getRandomNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const generateProgression = () => {
  const firstElement = getRandomNumber(0, 5);
  const step = getRandomNumber(1, 10);
  const progressionLength = 10;
  const progression = [];
  for (let n = 0; n < progressionLength; n += 1) {
    const nElement = firstElement + n * step;
    progression.push(nElement);
  }
  return progression;
};

const getGameData = () => {
  const progression = generateProgression();
  const hiddenElementIndex = getRandomNumber(0, 9);
  const answer = progression[hiddenElementIndex].toString();
  progression.splice(hiddenElementIndex, 1, '..');
  const question = progression.join(' ');

  const gameData = [];
  gameData.push(question, answer);
  return gameData;
};

const runGameProgression = () => {
  const description = 'What number is missing in the progression?';

  getEngine(description, getGameData);
};

export default runGameProgression;
