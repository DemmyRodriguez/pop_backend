const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const Seller = new Schema(
  {
    vendor: { type: String, required: true },
    price: { type: String, required: true },
    availability: { type: String, required: true },
    shipping_company: {type: Schema.Types.ObjectId, ref: 'shippings'},
  },
  { timestamps: true }
);

module.exports = mongoose.model(`sellers`, Seller);