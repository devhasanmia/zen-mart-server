import express from "express";
import { ProductController } from "./product.controller";
import { imageUpload } from "../../utils/imageUploder";
const router = express.Router();

router.post("/create", imageUpload(), ProductController.addNewProduct);
router.get("/all", ProductController.getAllProducts);

export const ProductRoutes = router;