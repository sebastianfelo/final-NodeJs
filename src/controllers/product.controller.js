// controller
import productService from '../services/product.service.js'

const getProducts = async (req, res) => {
    try {
        const products = await productService.getAll();
        res.status(200).json({message:"Lista de Productos", payload: products});
    } catch (error) {
        console.error("Error al traer todos los productos: ", error);
        res.status(500).json({ message: "Error al traer todos los productos", error: error.message });
    }
};

const getProdById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productService.getProdById(id);
        if (!product) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.status(200).json({ message: "Producto encontrado", payload: product });
    } catch (error) {
        console.error("Error al obtener el producto por ID: ", error);
        res.status(500).json({ message: "Error al obtener el producto por ID", error: error.message });
    }
};



const createProduct = async (req, res) => {
    try {
        const {nombre, categoria, precio, descripcion, disponible} = req.body;
        const newProduct = {
            nombre,
            categoria,
            precio:+precio, //el + convierte a precio (string)en número
            descripcion,
            disponible:disponible || false 
        }; 
        await productService.createProduct(newProduct);
        res.status(200).json({message:"Lista de Productos", payload: newProduct});
    } catch (error) {
        console.error("Error al traer todos los productos: ", error);
        res.status(500).json({ message: "Error al traer todos los productos", error: error.message });
    }
};

const updateProd = async (req, res) => {
    console.log("Entró a updateProd", req.params, req.body);
    try {
        const { id } = req.params;
        console.log("ID del producto a actualizar:", id);
        const { nombre, categoria, precio, descripcion, disponible } = req.body;
        const updatedProduct = {
            nombre,
            categoria,
            precio:+precio,
            descripcion,
            disponible:disponible || false
        };
        await productService.updateProd(id, updatedProduct);
        res.status(200).json({message:"Producto actualizado exitosamente", payload: updatedProduct});
    } catch (error) {
        console.error("Error al actualizar el producto: ", error);
        res.status(500).json({ message: "Error al actualizar el producto", error: error.message });
    }
}

const deleteProd = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("ID del producto a eliminar:", id);
        await productService.deleteProd(id);
        res.status(200).json({ message: "Producto eliminado exitosamente" });
    } catch (error) {
        console.error("Error al eliminar el producto: ", error);
        if (error.message.includes("Producto no encontrado")) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.status(500).json({ message: "Error al eliminar el producto", error: error.message });
    }
};


export default { getProducts, getProdById, createProduct, updateProd, deleteProd };
