// controller
import categoriasService from '../services/categorias.service.js'

const getCategorias = async (req, res) => {
    try {
        const categorias = await categoriasService.getAll();
        res.status(200).json({message:"Lista de Categorias", payload: categorias});
    } catch (error) {
        console.error("Error al traer todas las categorias: ", error);
        res.status(500).json({ message: "Error al traer todas las categorias", error: error.message });
    }
};


export default { getCategorias };
