//router
import { Router } from "express";
import productCollection from '../controllers/product.controller.js'

const router = Router()

//GET all products
router.get('/', productCollection.getProducts);
//GET by ID
router.get('/:id', productCollection.getProdById);


//POST
router.post('/', productCollection.createProduct);

//PUT - Actualizar un producto por Id
router.put('/:id', productCollection.updateProd);
/*router.put('/:id', (req, res) => {
    console.log("Entró a updateProd", req.params, req.body);
    res.status(200).json({message:"Producto actualizado exitosamente", payload: req.body});
}); */

//DELETE
router.delete('/:id', productCollection.deleteProd);



export default router
