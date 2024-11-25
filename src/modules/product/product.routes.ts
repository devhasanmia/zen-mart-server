import express from "express";
import { ProductController } from "./product.controller";
import { imageUpload } from "../../utils/imageUploder";

const router = express.Router();

router.post("/create", imageUpload(), ProductController.addNewProduct);
router.get("/all", ProductController.getAllProducts);
router.get("/:id", ProductController.getProductById);
router.put("/:id", ProductController.updateProductById);
router.delete("/:id", ProductController.deleteProductById);

export const ProductRoutes = router;