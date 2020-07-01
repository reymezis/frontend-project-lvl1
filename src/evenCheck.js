import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const evenGame = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const receivedNumber = getRandomNumber(1, 50);
    let rightAnswer = '';
    console.log(`Question: ${receivedNumber}`);
    if (receivedNumber % 2 === 0) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }
    const getAnswer = readlineSync.question('Your answer:');
    if (getAnswer === rightAnswer) {
      if (i === 2) {
        console.log('Correct!');
        console.log(`Congratulations, ${userName}!`);
        return;
      }
      console.log('Correct!');
    } else {
      console.log(`"${getAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
};

export default evenGame;
