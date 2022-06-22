const { Router } = require('express');
const usersControllers = require('../controllers/usersController');

const usersRouter = Router();

usersRouter.get('/', usersControllers.index);
usersRouter.get('/:id', usersControllers.show);

module.exports = usersRouter;