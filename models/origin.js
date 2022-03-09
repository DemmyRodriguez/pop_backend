const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const Origin = new Schema(
  {
    media: { type: String, required: true },
    media_aired: { type: String, required: true },
    ratings: { type: String, required: true },
    character_info: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model(`origins`, Origin);