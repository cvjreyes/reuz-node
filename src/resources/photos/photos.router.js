const { Router } = require('express');
const photosController = require('./photos.controller');
const router = Router();

router.route('/').get(photosController.getAll).post(photosController.create);

router
  .route('/:id')
  .get(photosController.getOne)
  .put(photosController.update)
  .delete(photosController.remove);


module.exports = router;