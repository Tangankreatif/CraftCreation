import Penjual from "../models/PenjualModel.js";
import argon2 from "argon2";

export const getPenjual = async(req, res) => {
    try {
        const response = await Penjual.findAll({
            attributes: ['uuid', 'name1', 'name2', 'email', 'password', 'role']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const getPenjualById = async(req, res) => {
    try {
        const response = await Penjual.findOne({
            attributes: ['uuid', 'name1', 'name2', 'email', 'password', 'role'],
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const createPenjual = async(req, res) => {
    const { name1, name2, email, password, confPassword, role } = req.body;
    if (password !== confPassword) return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
    const hashPassword = await argon2.hash(password);
    try {
        await Penjual.create({
            name1: name1,
            name2: name2,
            email: email,
            password: hashPassword,
            role: role,
        });
        res.status(201).json({ msg: "Pendaftaran Berhasil" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}
export const updatePenjual = async(req, res) => {
    const penjual = await Penjual.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if (!penjual) return res.status(404).json({ msg: "Penjual tidak ditemukan" });
    const { name1, name2, email, password, confPassword, role } = req.body;
    let hashPassword;
    if (password === "" || password === null) {
        hashPassword = penjual.password
    } else {
        hashPassword = await argon2.hash(password);
    }
    if (password !== confPassword) return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
    try {
        await Penjual.update({
            name1: name1,
            name2: name2,
            email: email,
            password: hashPassword,
            role: role,
        }, {
            where: {
                id: penjual.id
            }
        });
        res.status(200).json({ msg: "Penjual Updated" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const deletePenjual = async(req, res) => {
    const penjual = await Penjual.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if (!penjual) return res.status(404).json({ msg: "Penjual tidak ditemukan" });
    try {
        await Penjual.destroy({
            where: {
                id: penjual.id
            }
        });
        res.status(200).json({ msg: "Penjual Deleted" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}