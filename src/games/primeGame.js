import getEngine from '../index.js';

const getRandomNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getAnswer = (answer) => {
  if (answer) {
    return 'yes';
  }
  return 'no';
};

const playPrime = () => {
  const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getData = () => {
    const question = getRandomNumber(0, 100);
    const primeOrNot = isPrime(question);
    const answer = getAnswer(primeOrNot);
    const data = [];
    data.push(question, answer);
    return data;
  };
  getEngine(condition, getData);
};

export default playPrime;
