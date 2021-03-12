const categoryModel = require('./categories.model');

//Categories
  const createCategory = (req, res) => {
    const newcategory = req.body;
    const categoriesUpdated = categoryModel.createCategory(newcategory);
    return res.status(201).json(categoriesUpdated);
  };

  const getAllCategories = async (req, res) => {
    const categories = await categoryModel.getAllCategories();
    return res.status(200).json(categories);
  };
  
  const getOneCategory = async (req, res) => {
    const category = await categoryModel.getOneCategory(req.params.id);
    if (category) {
      return res.status(200).json(category);
    }
    return res.status(404).end();
  };

  const updateCategory = (req, res) => {
    const updatedcategory = req.body;
    const categoriesUpdated = categoryModel.updateCategory(req.params.id, updatedcategory);
    return res.status(200).json(categoriesUpdated);
  };
  
  const removeCategory = (req, res) => {
    const categoriesWithoutTheDeleted = categoryModel.removeCategory(req.params.id);
    return res.status(200).json(categoriesWithoutTheDeleted);
  };

  const subcategoryModel = require('./categories.model');

//Subcategories
  const createSubcategory = (req, res) => {
    const newsubcategory = req.body;
    const subcategoriesUpdated = subcategoryModel.createSubcategory(newsubcategory);
    return res.status(201).json(subcategoriesUpdated);
  };

  const getAllSubcategories = async (req, res) => {
    const subcategories = await subcategoryModel.getAllSubcategories();
    return res.status(200).json(subcategories);
  };

  const getAllSubcategoriesByCategory = async (req, res) => {
    console.log(req.params.id)
    const subcategories = await subcategoryModel.getAllSubcategoriesByCategory(req.params.id);
    return res.status(200).json(subcategories);
  };


  const getOneSubcategory = async (req, res) => {
    const subcategory = await subcategoryModel.getOneSubcategory(req.params.subcategory_id);
    if (subcategory) {
      return res.status(200).json(subcategory);
    }
    return res.status(404).end();
  };
  
  const updateSubcategory = (req, res) => {
    const updatedsubcategory = req.body;
    const subcategoriesUpdated = subcategoryModel.updateSubcategory(req.params.id, updatedsubcategory);
    return res.status(200).json(subcategoriesUpdated);
  };
  
  const removeSubcategory = (req, res) => {
    const subcategoriesWithoutTheDeleted = subcategoryModel.removeSubcategory(req.params.id);
    return res.status(200).json(subcategoriesWithoutTheDeleted);
  };  
  
  module.exports = {
    createCategory,
    getAllCategories,
    getOneCategory,
    updateCategory,
    removeCategory,
    createSubcategory,
    getAllSubcategories,
    getAllSubcategoriesByCategory,
    getOneSubcategory,
    updateSubcategory,
    removeSubcategory,
  };