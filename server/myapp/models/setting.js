const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema({
  font: { type: String, required: true, default: "roboto" },
  size: { type: Number, required: true, default: 12 },
  color: {type: String, required: true, default: "black"},
  theme: {type: String, required: true, default: "white"},
  userid: { type: String, required: true }
});

const Setting = mongoose.model('Setting', settingSchema);

module.exports = Setting;