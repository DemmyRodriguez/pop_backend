const db = require(`../db`);
const Origin = require(`../models/origin`);

db.on(`error`, console.error.bind(console, `MongoDB connection error`));

const main = async () => {

  const origins = [
    {
        media: 'WandaVision',
        media_aired: 'January 15, 2021',
        ratings: '8.0 / 10',
        character_info: 'Wanda Maximoff is the main character of WandaVision, a show about her grieving process and the untapped potential of her powers. She is a bright but tormented woman, who has spent her whole life losing people she loves.',
    },
    {
        media: 'Attack on Titan',
        media_aired: 'April 7, 2013',
        ratings: '9.1 / 10',
        character_info: `Levi Ackerman Is a Master of Cleanliness Levi Ackerman is one of the main characters in Attack on Titan, and despite the serious and apocalyptic nature of the show, he's notorious for being a total neat freak. This comes from his disgust at the unhygienic and filthy conditions of the camps that Levi and the other humans live in.`,
    },
    {
        media: 'Spongebob Squarepants',
        media_aired: 'May 1, 1999',
        ratings: '8.2 / 10',
        character_info: `SpongeBob SquarePants is the fictional main character of the Nickelodeon animated television series SpongeBob SquarePants. He is a naïve and goofy sea sponge who works as a fry cook in the fictional underwater town of Bikini Bottom.`,
    },
  ];
  await Origin.insertMany(origins);
  console.log(`Here's some information on where they came from!`);
};


const run = async () => {
  await main();
  db.close();
};

run();