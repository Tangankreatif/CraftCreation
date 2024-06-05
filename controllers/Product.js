import Product from "../models/ProductModel.js";
import Penjual from "../models/PenjualModel.js";
import { Op } from "sequelize";

export const getProduct = async(req, res) => {
    try {
        let response;
        if (req.role === "admin") {
            response = await Product.findAll({
                attributes: ['uuid', 'namaproduk', 'harga'],
                include: [{
                    model: Penjual,
                    attributes: ['name1', 'name2', 'email'],
                }]
            })
        } else {
            response = await Product.findAll({
                attributes: ['uuid', 'namaproduk', 'harga'],
                where: {
                    penjualId: req.penjualId
                },
                include: [{
                    model: Penjual,
                    attributes: ['name1', 'name2', 'email'],
                }]
            })
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const getProductById = async(req, res) => {
    try {
        const product = await Product.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!product) return res.status(404).json({ msg: "Data tidak ditemukan" })
        let response;
        if (req.role === "admin") {
            response = await Product.findOne({
                attributes: ['uuid', 'namaproduk', 'harga'],
                where: {
                    id: product.id
                },
                include: [{
                    model: Penjual,
                    attributes: ['name1', 'name2', 'email'],
                }]
            })
        } else {
            response = await Product.findOne({
                attributes: ['uuid', 'namaproduk', 'harga'],
                where: {
                    [Op.and]: [{ id: product.id }, { penjualId: req.penjualId }]
                },
                include: [{
                    model: Penjual,
                    attributes: ['name1', 'name2', 'email'],
                }]
            })
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const createProduct = async(req, res) => {
    const { namaproduk, deskripsi, harga } = req.body;
    try {
        await Product.create({
            namaproduk: namaproduk,
            deskripsi: deskripsi,
            harga: harga,
            penjualId: req.penjualId
        });
        res.status(201).json({ msg: "Product Created Successfuly" })
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const updateProduct = async(req, res) => {
    try {
        const product = await Product.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!product) return res.status(404).json({ msg: "Data tidak ditemukan" })
        let response;
        if (req.role === "admin") {
            response = await Product.findOne({
                attributes: ['uuid', 'namaproduk', 'harga'],
                where: {
                    id: product.id
                },
                include: [{
                    model: Penjual,
                    attributes: ['name1', 'name2', 'email'],
                }]
            })
        } else {
            response = await Product.findOne({
                attributes: ['uuid', 'namaproduk', 'harga'],
                where: {
                    [Op.and]: [{ id: product.id }, { penjualId: req.penjualId }]
                },
                include: [{
                    model: Penjual,
                    attributes: ['name1', 'name2', 'email'],
                }]
            })
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const deleteProduct = (req, res) => {

}