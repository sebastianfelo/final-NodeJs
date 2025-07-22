// services
import {getAllCategorias} from '../models/categorias.model.js';

const getAll = async () => {
  return await getAllCategorias();
};


export default { getAll }