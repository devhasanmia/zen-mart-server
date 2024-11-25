import { RequestHandler } from "express";
import { ProductService } from "./product.service";
import { ProductValidation } from "./product.validation";
import { TProduct } from './product.type';

const addNewProduct: RequestHandler = async (req, res, next) => {
    try {
        const image = req.files;
        const formatedData = {
            ...req.body,
            stockQuantity: parseInt(req.body.stockQuantity),
            price: parseInt(req.body.price),
        }
        const parsedBody = await ProductValidation.create.parseAsync(formatedData);
        const product = await ProductService.createProduct(parsedBody as unknown as TProduct, image);
        res.status(201).json({
            success: true,
            message: "Product added successfully",
            data: product,
        });
    } catch (error: any) {
        next(error);
    }
}

const getAllProducts: RequestHandler = async (req, res, next) => {
    try {
        const products = await ProductService.getAllProducts();
        res.json({
            success: true,
            message: "All products retrieved successfully",
            data: products,
        });
    } catch (error) {
        next(error);
    }
}

const getProductById: RequestHandler = async (req, res, next) => {
    try {
        const productId = req.params.id

        const product = await ProductService.getProductById(productId);
        res.json({
            success: true,
            message: "Product retrieved successfully",
            data: product,
        });
    } catch (error) {
        next(error);
    }
}

const updateProductById: RequestHandler = async (req, res, next) => {
    try {
         const formatedData = {
            ...req.body,
        }
        console.log("formdata", formatedData.description)
        const productId = req.params.id;
        const updatedProduct = await ProductService.updateProduct(productId, req.body);
        res.json({
            success: true,
            message: "Product updated successfully",
            data: updatedProduct,
        });
    } catch (error) {
        next(error);
    }
};

const deleteProductById: RequestHandler = async (req, res, next) => {
    try {
        const productId = req.params.id;
        const deletedProduct = await ProductService.deleteProduct(productId);
        res.json({
            success: true,
            message: "Product deleted successfully",
            data: deletedProduct,
        });
    } catch (error) {
        next(error);
    }
}


export const ProductController = {
    addNewProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById
}