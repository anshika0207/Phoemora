const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orgSchema = new Schema({
  orgname: {
    type: String,
  },
  description:{
    type: String,
  },
  // start:{
  //   type: Date,
  // }
}, {
  timestamps: true,
});





const Org = mongoose.model('Org', orgSchema);

module.exports = Org;