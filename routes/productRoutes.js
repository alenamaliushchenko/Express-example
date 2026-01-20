import express from "express";
import { getAllProducts, getProductById, createProduct, deleteProduct, updateProduct } from "../controllers/productController.js";

const router = express.Router();

router.route("/").get(getAllProducts).post(createProduct);
router
    .route("/:id")
    .get(getProductById)
    .delete(deleteProduct)
    .put(updateProduct);   

export default router;