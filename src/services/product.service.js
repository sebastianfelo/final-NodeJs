// services
import {getAllProducts, getProductById, seveProduct, deleteProduct} from '../models/product.model.js'

const getAll = async () => {
  return await getAllProducts();
};

const getProdById = async (id) => {
  return await getProductById(id);
};

const createProduct = async (product) => {
  return await seveProduct(product);
};

const deleteProd = async (id) => {
  return await deleteProduct(id);
};

export default { getAll , getProdById, createProduct, deleteProd};
