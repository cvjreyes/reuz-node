const mongoose = require('mongoose');

// Define model schema 1/2
const categoryModelSchema = mongoose.Schema({
    name:String,
  });

// Compile model from schema 1/2
const Category = mongoose.model('CategoryModel', categoryModelSchema);

// Define model schema 2/2
const subcategoryModelSchema = mongoose.Schema({
    name:String,
    categories_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CategoryModel',
    },
  });  

// Compile model from schema 2/2
const Subcategory = mongoose.model('SubcategoryModel', subcategoryModelSchema);

// CategoryModel's methods
const createCategory = (category) => {
  Category.create(category, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Created Docs : ', docs);
    }
  });
};

const getAllCategories = async () => {
  return await Category.find();
};

const getOneCategory = async (id) => {
  let query = { _id: id };
  return await Category.findOne(query);
};


const updateCategory = (id, updatedcategory) => {
  let query = { _id: id };
  Category.updateOne(query, updatedcategory, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Updated Docs : ', docs);
    }
  });
};

const removeCategory = (id) => {
  let query = { _id: id };
  Category.deleteOne(query, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Deleted Doc : ', docs);
    }
  });
};

// SubcategoryModel's methods
const createSubcategory = (subcategory) => {
  Subcategory.create(subcategory, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Created Docs : ', docs);
    }
  });
};

const getAllSubcategories = async () => {
  return await Subcategory.find();
};

const getAllSubcategoriesByCategory = async (id) => {
  const subcats = await Subcategory.find({categories_id: id});
  console.log(subcats, {categories_id: id})
  return await Subcategory.find({categories_id: id})
}

const getOneSubcategory = async (subcategory_id) => {
  let query = { _id: subcategory_id };
  return await Subcategory.findOne(query);
};

const updateSubcategory = (id, updatedsubcategory) => {
  let query = { _id: id };
  Subcategory.updateOne(query, updatedsubcategory, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Updated Docs : ', docs);
    }
  });
};

const removeSubcategory = (id) => {
  let query = { _id: id };
  Subcategory.deleteOne(query, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Deleted Doc : ', docs);
    }
  });
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