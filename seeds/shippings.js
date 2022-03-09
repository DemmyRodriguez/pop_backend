const db = require(`../db`);
const Shipping = require(`../models/shipping`);

db.on(`error`, console.error.bind(console, `MongoDB connection error`));

const main = async () => {

  const shippings = [
    {
        shipping_company: `Hot Topic`,
        shipping_time: `6-Months`,
        release_year: `2020`,
        shipping_price: `Free`,
    },
    {
        shipping_company: `Hot Topic`,
        shipping_time: `9-Months`,
        release_year: `2017`,
        shipping_price: `FREE`,
    },
    {
        shipping_company: `Hot Topic`,
        shipping_time: `2-Days`,
        release_year: `2021`,
        shipping_price: `4.99`,
    },
  ];
  await Shipping.insertMany(shippings);
  console.log(`Here is who wil ship them!`);
};


const run = async () => {
  await main();
  db.close();
};
run();