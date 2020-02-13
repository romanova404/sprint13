const user = require('../models/user.js');

module.exports.getUsers = (req, res) => {
  user.find({})
    .then(users => res.send({ data: users }))
    .catch(err => res.status(404).send({ message: 'Запрашиваемый ресурс не найден' }));
}

module.exports.findUser = (req, res) => {
  const { id } = req.params;
  user.find({_id: id})
    .then(user => res.send({ data: user }))
    .catch(err => res.status(404).send({ message: 'Нет пользователя с таким id' }));
}


module.exports.createUser = (req, res) => {

  const { name, about, avatar } = req.body;

  user.create({ name, about, avatar })
    .then(user => res.send({ data: user }))
    .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
}
