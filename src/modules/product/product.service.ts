import mongoose from "mongoose";
import { generateSKU } from "../../utils/generateSKU";
import { sendImagesToCloudinary } from "../../utils/sendImageToCloudinary";
import Product from "./product.model";
import AppError from '../../errors/AppError';
import { TProduct } from "./product.type";
import { isValidId } from "../../utils/isValidId";
type Image = {
    path: string;
}

const createProduct = async (payload: TProduct, image: any) => {
    try {
        payload.SKU = generateSKU();
        const signle = image.image[0].path;
        const multipleI = image.images?.map((image: Image) => image.path) || [];
        const sendImage = [signle, ...multipleI];
        const uploadResult = await sendImagesToCloudinary(sendImage);
        const images = uploadResult.slice(1).map((img: any) => img.secure_url);
        payload.image = uploadResult[0].secure_url;
        payload.images = images;
        const product = await Product.create(payload);
        return product;
    } catch (error) {
        throw error;
    }
}

const getAllProducts = async () => {
    try {
        const products = await Product.find({}).sort({ createdAt: -1 });
        if (products.length === 0) {
            throw new AppError(404, "No products found");
        }
        return products;
    } catch (error) {
        throw error;
    }
}

const getProductById = async (id: string) => {
    isValidId(id, "Invalid product ID");
    try {
        const product = await Product.findById(id);
        if (!product) {
            throw new AppError(404, "Product not found");
        }
        return product;
    } catch (error) {
        throw error;
    }
}


const updateProduct = async (id: string, payload: TProduct) => {
    isValidId(id, "Invalid product ID");
    try {
        const product = await Product.findByIdAndUpdate(id, payload, { new: true });
        if (!product) {
            throw new AppError(404, "Product not found");
        }
        return product;
    } catch (error) {
        throw error;
    }
}


const deleteProduct = async (id: string) => {
    isValidId(id, "Invalid product ID");
    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            throw new AppError(404, "Product not found");
        }
        return product;
    } catch (error) {
        throw error;
    }
}


export const ProductService = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
}



