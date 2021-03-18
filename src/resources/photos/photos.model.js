const mongoose = require('mongoose');

// Define model schema
const photoModelSchema = mongoose.Schema({
    photoArray: mongoose.Schema.Types.Array,
    photo_product_id: 
      {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProductModel',
      },
      
    photo: mongoose.Schema.Types.Buffer,
    name: mongoose.Schema.Types.String,
    size: mongoose.Schema.Types.Number,
    mimetype: mongoose.Schema.Types.String,
    updated: mongoose.Schema.Types.Date,
    created: mongoose.Schema.Types.Date,
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


const createPhoto = async (photo) => {
    const picture = await Photo.create(photo);
    return picture;
};
const getProductPhotos = async (product) => {
    let query = {photo_product_id:product };
    const pictures =  await Photo.find(query);
    return pictures;
};
const removePhoto = async (photoId) => {
    let query = { _id: photoId };
     await Photo.deleteOne(query);
};



module.exports = {
  create,
  getAll,
  getOne,
  update,
  remove,
  getByProduct,
  createPhoto,
  getProductPhotos,
  removePhoto,
  Photo,
};