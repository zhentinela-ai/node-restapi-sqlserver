import { Router } from "express";

import {
  createNewProduct,
  deleteProductById,
  getProducts,
  getProductsById,
  getTotalProducts,
  updateProductById,
} from "../controllers/products.controlles";

const router = Router();

router.get("/products", getProducts);

router.post("/products", createNewProduct);

router.get("/products/count", getTotalProducts);

router.get("/products/:id", getProductsById);

router.delete("/products/:id", deleteProductById);

router.put("/products/:id", updateProductById);

export default router;
