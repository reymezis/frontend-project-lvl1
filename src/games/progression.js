import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const generateProgression = (firstElement, step, progressionLength) => {
  const progression = [];

  for (let n = 0; n < progressionLength; n += 1) {
    const nElement = firstElement + n * step;
    progression.push(nElement);
  }
  return progression;
};

const getGameData = () => {
  const progressionLength = 10;
  const firstElement = getRandomNumber(0, 5);
  const step = getRandomNumber(1, 10);
  const progression = generateProgression(firstElement, step, progressionLength);
  const hiddenElementIndex = getRandomNumber(0, progressionLength - 1);

  const answer = progression[hiddenElementIndex].toString();
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const description = 'What number is missing in the progression?';

const runGameProgression = () => {
  runEngine(description, getGameData);
};

export default runGameProgression;
