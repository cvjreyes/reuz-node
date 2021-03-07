const { Router } = require('express');
const productsController = require('./products.controller');
const router = Router();

router.route('/')
  .get(productsController.getAll)
  .post(productsController.create);

router.route('/:id')
  .get(productsController.getOne)
  .put(productsController.update)
  .delete(productsController.remove);

router.route('/search')
  .get(productsController.getProductsByName)


module.exports = router;