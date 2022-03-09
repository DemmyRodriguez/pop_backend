const db = require(`../db`);
const Pop = require(`../models/pop`);
const Origin = require(`../models/origin`);
const Seller = require(`../models/seller`);
const Shipping = require(`../models/shipping`);

db.on(`error`, console.error.bind(console, `MongoDB connection error`));

const main = async () => {
  const origin1 = await Origin.find({media:"WandaVision"})
  const seller1 = await Seller.find({price:"$34"})

  const origin2 = await Origin.find({media:"Attack on Titan"})
  const seller2 = await Seller.find({price:"$40"})

  const origin3 = await Origin.find({media:"Spongebob Squarepants"})
  const seller3 = await Seller.find({price:"$22"})

  const pops = [
    {
        name: 'Scarlet Witch',
        pop_number: '828',
        image: 'https://images.hobbydatabase.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/925400/Scarlet_Witch_Vinyl_Art_Toys_cacfc1d6-7cc4-4f09-9710-7cd496c44790.jpg',
        media: origin1[0]._id,
        vendor: seller1[0]._id,
    },
    {
        name: 'Cleaning Levi',
        pop_number: '239',
        image: 'https://images.hobbydatabase.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/1008256/Cleaning_Levi_Vinyl_Art_Toys_57526086-b12c-4c98-9e86-acf2b9898627.jpg',
        media: origin2[0]._id,
        vendor: seller2[0]._id,
    },
    {
        name: 'Spongebob Weightlifter',
        pop_number: '917',
        image: 'https://images.hobbydatabase.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/926525/Spongebob_Weightlifter_Vinyl_Art_Toys_01b4f1de-d720-42d4-8b1a-6bd4ad0fbf56.JPG',
        media: origin3[0]._id,
        vendor: seller3[0]._id,
    },
  ];
  await Pop.insertMany(pops);
  console.log(`Created a database with pops!`);
};


const run = async () => {
  await main();
  db.close();
};

run();
