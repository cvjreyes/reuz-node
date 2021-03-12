const { Router } = require('express');
const usersController = require('./users.controller');
const productsController = require('../products/products.controller');
const messagesController = require('../messages/messages.controller');
const { body } = require('express-validator');
const router = Router();

router.route('/').get(usersController.getAll)
.post(
  // username must be an email
  body('email').isEmail(),
  // password must be at least 5 chars long
  body('password').isLength({ min: 5 }),
  usersController.create);

router
  .route('/:id')
  .get(usersController.getOne)
  .put(usersController.update)
  .delete(usersController.remove);

  router.route('/:userId/products').get(productsController.getProductsByUser);
  router.route('/:userId/inbox').get(messagesController.getMessagesByReceiver);
  router.route('/:userId/sent').get(messagesController.getMessagesBySender);

module.exports = router;