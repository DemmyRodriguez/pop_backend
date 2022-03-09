const db = require(`../db`);
const Seller = require(`../models/seller`);
const Shipping = require(`../models/shipping`);

db.on(`error`, console.error.bind(console, `MongoDB connection error`));

const main = async () => {

  const shipping1 = await Shipping.find({release_year:"2020"})
  const shipping2 = await Shipping.find({release_year:"2017"})
  const shipping3 = await Shipping.find({release_year:"2021"})

  const sellers = [
    {
        vendor: `Pop Price Guide`,
        price: `$34`,
        availability: `Online ONLY`,
        shipping_company: shipping1[0]._id
    },
    {
        vendor: `Pop Price Guide`,
        price: `$40`,
        availability: `Online ONLY`,
        shipping_company: shipping2[0]._id
    },
    {
        vendor: `Pop Price Guide`,
        price: `$22`,
        availability: `Online ONLY`,
        shipping_company: shipping3[0]._id
    },
  ];
  await Seller.insertMany(sellers);
  console.log(`Here is where you can buy them!`);
};


const run = async () => {
  await main();
  db.close();
};
run();