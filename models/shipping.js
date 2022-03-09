const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const Shipping = new Schema(
  {
    shipping_company: { type: String, required: true },
    shipping_time: { type: String, required: true },
    release_year: { type: String, required: true },
    shipping_price: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model(`shippings`, Shipping);