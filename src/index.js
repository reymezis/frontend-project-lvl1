import readlineSync from 'readline-sync';

const roundsCount = 3;

const runEngine = (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const data = getGameData();
    const [question, answer] = data;
    console.log(`Question: ${question}`);
    const getAnswer = readlineSync.question('Your answer:');

    if (getAnswer !== answer) {
      console.log(`"${getAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runEngine;
