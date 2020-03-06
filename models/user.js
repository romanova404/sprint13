const mongoose = require('mongoose');
require('mongoose-type-url');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  avatar: {
    required: true,
    type: mongoose.SchemaTypes.Url,
  },
});

userSchema.path('avatar').validate(validator.isURL, 'Неверный формат ссылки');
module.exports = mongoose.model('user', userSchema);
