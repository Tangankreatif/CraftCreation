import express from "express";
import {
    getPembeli,
    getPembeliById,
    createPembeli,
    updatePembeli,
    deletePembeli,
} from "../controllers/Pembeli.js"

const router = express.Router();

router.get('/pembeli', getPembeli);
router.get('/pembeli/:id', getPembeliById);
router.post('/pembeli', createPembeli);
router.patch('/pembeli/:id', updatePembeli);
router.delete('/pembeli/:id', deletePembeli);

export default router;