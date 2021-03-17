const productModel = require('./products.model');
const getAll = async (req, res) => {
  const products = await productModel.getAll();
  return res.status(200).json(products);
};
const getProductsByCategory = async (req, res) => {
  const category_id = req.params.id;
  const filteredProducts = await productModel.getByCategory(category_id);
  return res.status(200).json(filteredProducts);
};
const getProductsBySubcategory = async (req, res) => {
  const subcategories_id = req.params.subcategory_id;
  const filteredProducts = await productModel.getBySubcategory(subcategories_id);
  return res.status(200).json(filteredProducts);
};
const getProductsByUser = async (req, res) => {
  const userId = req.params.userId;
  const filteredProducts = await productModel.getByUser(userId);
  return res.status(200).json(filteredProducts);
};
const getOne = async (req, res) => {
  const product = await productModel.getOne(req.params.id);
  if (product) {
    return res.status(200).json(product);
  }
  return res.status(404).end();
};
const create = async (req, res) => {
  const payload = req.body;
  const creationDate = new Date();
  if (Array.isArray(req.body)) {
    const newproducts = payload.map(function (product) {
      return { ...product, created_at: creationDate, updated_at: creationDate };
    });
    const productsUpdated = productModel.create(newproducts);
    return res.status(201).json(productsUpdated);
  } else {
    const newproduct = { ...payload, created_at: creationDate, updated_at: creationDate };
    const productsUpdated = await productModel.create(newproduct);
    return res.status(201).json(productsUpdated);
  }
};
/*   const create = (req, res) => {
    const newproduct = req.body;
    const productsUpdated = productModel.create(newproduct);
    return res.status(201).json(productsUpdated);
  }; */
const update = (req, res) => {
  const creationDate = new Date();
  const updatedproduct = { ...req.body, updated_at: creationDate };
  const productsUpdated = productModel.update(req.params.id, updatedproduct);
  return res.status(200).json(productsUpdated);
};
const remove = (req, res) => {
  const productsWithoutTheDeleted = productModel.remove(req.params.id);
  return res.status(200).json(productsWithoutTheDeleted);
};
module.exports = {
  create,
  update,
  getAll,
  getProductsByCategory,
  getProductsBySubcategory,
  getProductsByUser,
  getOne,
  remove,
};