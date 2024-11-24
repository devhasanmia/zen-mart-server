import { RequestHandler } from "express";
import { ProductService } from "./product.service";
import { ProductValidation } from "./product.validation";

const addNewProduct: RequestHandler = async (req, res, next) => {
    try {
        const image = req.files;
        const formatedData = {
            ...req.body,
            stockQuantity: parseInt(req.body.stockQuantity),
            price: parseInt(req.body.price),
        }
        const parsedBody = await ProductValidation.create.parseAsync(formatedData);
        const product = await ProductService.createProduct(parsedBody, image);
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


export const ProductController = {
    addNewProduct,
    getAllProducts
}