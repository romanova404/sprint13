const userRouter = require('express').Router();

const { getUsers, findUser, createUser } = require('../controllers/users.js');
const { createUserCheck } = require('../modules/validation.js');

userRouter.get('/users', getUsers);

userRouter.get('/users/:id', findUser);

userRouter.post('/users', createUser, createUserCheck);


module.exports = userRouter;
