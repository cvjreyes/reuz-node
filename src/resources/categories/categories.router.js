const { Router } = require('express');
const categoriesController = require('./categories.controller');
const productsController = require('../products/products.controller');
const router = Router();

router.route('/').get(categoriesController.getAllCategories).post(categoriesController.createCategory);


router
  .route('/:id')
  .get(categoriesController.getOneCategory)
  .put(categoriesController.updateCategory)
  .delete(categoriesController.removeCategory)

router.route('/all/subcategories').get(categoriesController.getAllSubcategories).post(categoriesController.createSubcategory);
router.route('/:id/subcategories').get(categoriesController.getAllSubcategoriesByCategory);
router.route('/:id/products').get(productsController.getProductsByCategory);

router
  .route('/all/subcategories/:subcategory_id')
  .get(categoriesController.getOneSubcategory)
  .put(categoriesController.updateSubcategory)
  .delete(categoriesController.removeSubcategory);

router.route('/:id/subcategories/:subcategory_id/products').get(productsController.getProductsBySubcategory);


module.exports = router;