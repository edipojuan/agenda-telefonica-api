const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: [
    {
      type: String,
      lowercase: true
    }
  ],
  phones: [
    {
      number: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true,
        enum: ['Móvel', 'Fixo', 'Outros'],
        default: 'Outros'
      }
    }
  ],
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
