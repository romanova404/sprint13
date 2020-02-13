const card = require('../models/card.js');

module.exports.getCards = (req, res, next) => {
  card.find({})
    .then(cards => res.send({ data: cards }))
    .catch(err => res.status(404).send({  message: 'Запрашиваемый ресурс не найден' }));
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;

  card.create({ name, link, owner: req.user._id })
    .then(card => res.send({ data: card }))
    .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
}

module.exports.deleteCard = (req, res, next) => {

  card.findByIdAndRemove(req.params.cardId)
    .then(card => res.send({ data: card }))
    .catch(err => res.status(404).send({ message: 'Нет карточки с таким id' }));
}