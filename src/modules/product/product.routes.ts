import express from "express";
import { ProductController } from "./product.controller";
// import { upload } from "../../utils/sendImageToCloudinary";
import { imageUpload } from "../../utils/imageUploder";
const router = express.Router();

// Router for User 
router.post("/create", imageUpload(), ProductController.addNewProduct);

export const ProductRoutes = router;