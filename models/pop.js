const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const Pop = new Schema(
  {
    name: { type: String, required: true },
    category: {type: String, required: false},
    pop_number: { type: String, required: true },
    image: { type: String, required: true },
    media: {type: Schema.Types.ObjectId, ref: 'origins'},
    vendor: {type: Schema.Types.ObjectId, ref: 'sellers'},
  },
  { timestamps: true }
);

module.exports = mongoose.model(`pops`, Pop);