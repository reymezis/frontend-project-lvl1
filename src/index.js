import readlineSync from 'readline-sync';

const getEngine = (condition, getData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${condition}`);

  for (let i = 0; i < 3; i += 1) {
    const data = getData();
    const [question, answer] = data;
    console.log(`Question: ${question}`);
    const getAnswer = readlineSync.question('Your answer:');
    if (getAnswer === answer) {
      if (i === 2) {
        console.log('Correct!');
        console.log(`Congratulations, ${userName}!`);
        return;
      }
      console.log('Correct!');
    } else {
      console.log(`"${getAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
};

export default getEngine;
