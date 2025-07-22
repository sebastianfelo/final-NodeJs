//router
import { Router } from "express";
import categoriasCollection from '../controllers/categorias.controller.js'

const router = Router()

//GET all products
router.get('/', categoriasCollection.getCategorias);



export default router
