const express = require('express'),
    mongoose = require('mongoose'),
    multer = require('multer'),
    app = express(),
    upload = multer(),
    port = 5001,
    Schema = mongoose.Schema,
    cors = require('cors');

app.use(cors());


// Define model schema
const photoModelSchema = mongoose.Schema({
    photoArray: mongoose.Schema.Types.Array,
    photo_product_id: [
      {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProductModel',
      }
    ],
  });

// Compile model from schema
const Photo = mongoose.model('PhotoModel', photoModelSchema);

const create = (photo) => {
  Photo.create(photo, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Created Docs : ', docs);
    }
  });
};

const getAll = async () => {
  return await Photo.find();
};

const getOne = async (id) => {
  let query = { _id: id };
  return await Photo.findOne(query);
};

const getProductPhotos = async (product) => {
  let query = { phophoto_product_id: product };
  const photos =  await Photo.find(query);
  return photos;
};

const update = (id, updatedphoto) => {
  let query = { _id: id };
  Photo.updateOne(query, updatedphoto, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Updated Docs : ', docs);
    }
  });
};

const remove = (id) => {
  let query = { _id: id };
  Photo.deleteOne(query, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Deleted Doc : ', docs);
    }
  });
};

const getByProduct = async (photo_products_id) => {
  let query = { photo_product_id: photo_product_id };
  return await Photo.find(query);
}


module.exports = {
  create,
  getAll,
  getOne,
  update,
  remove,
  getByProduct,
  getProductPhotos,
};