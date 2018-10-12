'use strict';

const mongoose = require('mongoose');
const Model = mongoose.model('TelephoneBook');

exports.get = async () => {
  return await Model.find({});
};

exports.create = async (doc) => {
  return await await Model.create(doc);
};
