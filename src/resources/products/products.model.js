const mongoose = require('mongoose');

// Define model schema
const productModelSchema = mongoose.Schema({
    name: String,
    description: String,
    urlImage:String,
    address:String,
    created_at: mongoose.Schema.Types.Date,
    updated_at: mongoose.Schema.Types.Date,
    price: Number,
    discount: Number,
    status:String,
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
    product_subcategory_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CategoryModel',
    },
  });

// Compile model from schema
const Product = mongoose.model('ProductModel', productModelSchema);

const create = (product) => {
  Product.create(product, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Created Docs : ', docs);
    }
  });
};

const getAll = async () => {
  return await Product.find();
};

const getOne = async (id) => {
  let query = { _id: id };
  return await Product.findOne(query);
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
  getBySubcategory,
  getByUser
};