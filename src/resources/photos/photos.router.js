const { Router } = require('express');
const photosController = require('./photos.controller');
const router = Router();
const multer = require('multer');
const upload = multer();

router.route('/').get(photosController.getAll).post(photosController.create);

router
  .route('/:id')
  .get(photosController.getOne)
  .put(photosController.update)
  .delete(photosController.remove);
  
  router
  .route('/:productId/photos')
  .post(upload.single('photo'),photosController.uploadPhoto)
  .get(photosController.getByProduct)

  router
  .route('/:productId/photos/photoId')
  .delete(photosController.eliminatePhoto)

module.exports = router;