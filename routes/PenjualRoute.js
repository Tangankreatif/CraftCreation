import express from "express";
import {
    getPenjual,
    getPenjualById,
    createPenjual,
    updatePenjual,
    deletePenjual,
} from "../controllers/Penjual.js"
import { verifyPenjual, adminOnly } from "../middleware/diyuser.js";

const router = express.Router();

router.get('/penjual', verifyPenjual, adminOnly, getPenjual);
router.get('/penjual/:id', verifyPenjual, adminOnly, getPenjualById);
router.post('/penjual', verifyPenjual, adminOnly, createPenjual);
router.patch('/penjual/:id', verifyPenjual, adminOnly, updatePenjual);
router.delete('/penjual/:id', verifyPenjual, adminOnly, deletePenjual);

export default router;