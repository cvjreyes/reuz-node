const mongoose = require('mongoose');
// Define model schema
const productModelSchema = mongoose.Schema({
  name: String,
  description: String,
  urlImage: String,
  photos: mongoose.Schema.Types.Array,
  created_at: mongoose.Schema.Types.Date,
  updated_at: mongoose.Schema.Types.Date,
  price: Number,
  discount: Number,
  address: String,
  postalcode: String,
  status: String,
  tags_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'TagModel',
    }
  ],
  users_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel',
  },
  product_category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CategoryModel',
  },
  product_subcategory_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubcategoryModel',
  },
});
// Compile model from schema
const Product = mongoose.model('ProductModel', productModelSchema);
const create = async (product) => {
  return await Product.create(product);
};
const getAll = async () => {
  return await Product.find();
};
const getOne = async (id) => {
  let query = { _id: id };
  return await Product.findOne(query)
    .populate('users_id')
    .populate('product_category_id')
    .populate('product_subcategory_id');
};
const update = (id, updatedproduct) => {
  let query = { _id: id };
  Product.updateOne(query, updatedproduct, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Updated Docs : ', docs);
    }
  });
};
const remove = (id) => {
  let query = { _id: id };
  Product.deleteOne(query, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Deleted Doc : ', docs);
    }
  });
};
const getByCategory = async (product_category_id) => {
  let query = { product_category_id: product_category_id };
  return await Product.find(query);
}
const getBySubcategory = async (product_subcategory_id) => {
  let query = { product_subcategory_id: product_subcategory_id };
  return await Product.find(query);
}
const getByUser = async (users_id) => {
  let query = { users_id: users_id };
  return await Product.find(query);
}
module.exports = {
  create,
  getAll,
  getOne,
  update,
  remove,
  getByCategory,
  getBySubcategory,
  getByUser
};