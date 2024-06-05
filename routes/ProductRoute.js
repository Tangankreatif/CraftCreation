import express from "express";
import {
    getProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from "../controllers/Product.js"
import { verifyPenjual } from "../middleware/diyuser.js";

const router = express.Router();

router.get('/product', verifyPenjual, getProduct);
router.get('/product/:id', verifyPenjual, getProductById);
router.post('/product', verifyPenjual, createProduct);
router.patch('/product/:id', verifyPenjual, updateProduct);
router.delete('/product/:id', verifyPenjual, deleteProduct);

export default router;