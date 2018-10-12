'use strict';

const repository = require('../repositories/telephone-book.repository');

exports.get = async (req, res, next) => {
  try {
    const itens = await repository.get();
    res.send(itens);
  } catch (err) {
    return printError(res, err, 'obter a agenda telefônica.');
  }
};

exports.post = async (req, res, next) => {
  try {
    const item = await repository.create(req.body);
    return res.status(201).send(item);
  } catch (err) {
    console.log(err);
    return printError(res, err, 'adicionar um contato');
  }
};

const printError = (res, data, message) => res.status(400).send({ messae: `Falha ao ${message}`, data });
