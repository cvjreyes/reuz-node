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
  
  module.exports = {
    create,
    update,
    getAll,
    getPhotosByProduct,
    getOne,
    remove,
  };