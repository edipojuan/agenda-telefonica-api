'use strict';

const mongoose = require('mongoose');
const Model = mongoose.model('TelephoneBook');

exports.create = async (doc) => await await Model.create(doc);
exports.update = async (id, data) => await await Model.findByIdAndUpdate(id, data, { new: true });
exports.delete = async (id) => await Model.findByIdAndRemove(id);
exports.get = async () => await Model.find({});
