// model
import {db} from '../config/db.js'
import { collection, addDoc, getDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

const productCollection = collection(db, "productos");//accedo a la Coleccion Productos en Firestore


//Traer todos los productos
export const getAllProducts = async () => {
    try {
        const productList = await getDocs(productCollection);
        const products = [];
        productList.forEach((doc => products.push({id: doc.id, ...doc.data()})));
        
        return products;
    } catch (error) {
        console.error("Error getting products: ", error);
        throw new Error("Error getting products", error.message);
    }
};

//Traer un producto por ID
export const getProductById = async (id) => {
    console.log("ID del producto a buscar:", id);
    try {
        const productDoc = doc(db, "productos", id);
        const product = await getDoc(productDoc);
        if (product.exists()) {
            return {id: product.id, ...product.data()};
        } else {
            throw new Error("Producto no encontrado");
        }
    } catch (error) {
        console.error("Error al obtener el producto por ID: ", error);
        throw new Error("Error al obtener el producto por ID", error.message);
    }
};



//Guardar un producto nuevo
export const seveProduct = async (product) => {
    try {
        const newProduct = await addDoc(productCollection, product);
        
        return newProduct;
    } catch (error) {
        console.error("Error al obtener los productos: ", error);
        throw new Error("Error al obtener los productos", error.message);
    }
}

//Actualizar un producto
export const updateProduct = async (id, product) => {
    try {
        const productDoc = doc(db, "productos", id);
        await updateDoc(productDoc, product);
    } catch (error) {
        console.error("Error al actualizar el producto: ", error);
        throw new Error("Error al actualizar el producto", error.message);
    }
}

//Eliminar un producto
export const deleteProduct = async (id) => {
    try {
        const productDoc = doc(db, "productos", id);
        const productSnapshot = await getDoc(productDoc);
        
        if (!productSnapshot.exists()) {
            throw new Error("Producto no encontrado");
        }
        
        await deleteDoc(productDoc);
        return { message: "Producto eliminado exitosamente" };
    } catch (error) {
        console.error("Error al eliminar el producto: ", error);
        throw new Error("Error al eliminar el producto: " + error.message);
    }
}