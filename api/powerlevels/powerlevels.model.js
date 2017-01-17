const mongoose = require('mongoose');

const PowerLevelsSchema = new mongoose.Schema({
  Name: String,
  Profile_Link: String,
  Image_Link: String,
  Intelligence: String,
  Strength: String,
  Speed: String,
  Durability: String,
  Energy_Projection: String,
  Fighting_Ability: String
});

const PowerLevels = mongoose.model('PowerLevels', PowerLevelsSchema);

module.exports = PowerLevels;
