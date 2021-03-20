const photoModel = require('./photos.model');

const getAll = async (req, res) => {
    const photos = await photoModel.getAll();
    return res.status(200).json(photos);
  };

  const getPhotosByProduct = async (req, res) => {

    const product_id = req.params.id;
    const filteredPhotos = await photoModel.getByProduct(product_id);
    return res.status(200).json(filteredPhotos);
  
  };
  
  const getOne = async (req, res) => {
    const photo = await photoModel.getOne(req.params.id);
    if (photo) {
      return res.status(200).json(photo);
    }
    return res.status(404).end();
  };
  

 const create = (req, res) => {
    const newphoto = req.body;
    const photosUpdated = photoModel.create(newphoto);
    return res.status(201).json(photosUpdated);
  }; 
  
  const update = (req, res) => {
    const creationDate = new Date();
    const updatedphoto = {...req.body,updated_at:creationDate};
    const photosUpdated = photoModel.update(req.params.id, updatedphoto);
    return res.status(200).json(photosUpdated);
  };
  
  const remove = (req, res) => {
    const photosWithoutTheDeleted = photoModel.remove(req.params.id);
    return res.status(200).json(photosWithoutTheDeleted);
  };

  const uploadPhoto = async (req, res) => {
         await photoModel.createPhoto({
        photo: req.file.buffer,
        photo_product_id: req.params.productId,
        name: req.file.name,
        size: req.file.size,
        mimetype: req.file.mimetype,
    });
    const photos = await photoModel.getProductPhotos(req.params.productId);
    // Iterate over each image to convert the buffer array into a base64 string
    all = photos.map((photo) => {
        return {
            image: photo.photo.toString('base64'),
            id: photo._id
        };
    });
    console.log(all.length);
    return res.status(200).json(all);
};
const getByProduct = async (req, res) => {
    const photos = await photoModel.getPhoto(req.params.id);
    if (photos) {
        console.log(photos);
        return res.status(200).json(photos);
    }
    return res.status(404).end();
};
const eliminatePhoto = async (req, res) => {
    await photoModel.removePhoto(req.params.photoId);
    const photoWithoutTheDeleted = await photoModel.getUserPhotos(req.params.prductId)
    all = photoWithoutTheDeleted.map((photo) => {
        return {
            image: photo.photo.toString('base64'),
            id: photo._id
        };
    });
    console.log(all.length);
    return res.status(200).json(all);
};
  
  module.exports = {
    create,
    update,
    getAll,
    getPhotosByProduct,
    getOne,
    remove,
    uploadPhoto,
    getByProduct,
    eliminatePhoto
  };