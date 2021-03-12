const { Router } = require('express');
const messagesController = require('./messages.controller');
const router = Router();

router.route('/').get(messagesController.getAllMessages).post(messagesController.createMessage);


router
  .route('/:id')
  .get(messagesController.getOneMessage)
  .put(messagesController.updateMessage)
  .delete(messagesController.removeMessage)

router.route('/all/threadmessages').get(messagesController.getAllThreadmessages).post(messagesController.createThreadmessage);
router.route('/:id/threadmessages').get(messagesController.getAllThreadmessagesByMessage);

router
  .route('/:id/threadmessages/:threadmessage_id')
  .get(messagesController.getOneThreadmessage)
  .put(messagesController.updateThreadmessage)
  .delete(messagesController.removeThreadmessage);


module.exports = router;