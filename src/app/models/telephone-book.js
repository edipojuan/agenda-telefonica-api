const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    lowercase: true
  },
  phone: {
    type: String,
    unique: true,
    required: true
  },
  company: {
    type: String
  },
  office: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const TelephoneBook = mongoose.model('TelephoneBook', schema);

module.exports = TelephoneBook;
