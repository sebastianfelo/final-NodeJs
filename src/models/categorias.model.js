// model
import {db} from '../config/db.js'
import { collection, addDoc, getDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

const productCollection = collection(db, "productos");//accedo a la Coleccion Productos en Firestore para obtener las categorias de los productos


//Traer todos los productos y extraer las categorias
export const getAllCategorias = async () => {
    try {
        const productList = await getDocs(productCollection);
        const products = [];
        productList.forEach((doc => products.push({id: doc.id, ...doc.data()})));
       
        const cateTodas = products.map(product => product.categoria);
        const categoriasUnicas = [...new Set(cateTodas)];

        console.log("categorias", cateTodas);
        return categoriasUnicas;
    } catch (error) {
        console.error("Error getting products: ", error);
        throw new Error("Error getting products", error.message);
    }
};
