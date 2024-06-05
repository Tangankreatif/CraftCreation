import Penjual from "../models/PenjualModel.js";
import argon2 from "argon2";

export const Login = async(req, res) => {
    const penjual = await Penjual.findOne({
        where: {
            email: req.body.email
        }
    });
    if (!penjual) return res.status(404).json({ msg: "Penjual tidak ditemukan" });
    const match = await argon2.verify(penjual.password, req.body.password);
    if (!match) return res.status(400).jason({ msg: "Wrong Password" });
    req.session.penjualId = penjual.uuid;
    const uuid = penjual.uuid;
    const name1 = penjual.name1;
    const name2 = penjual.name2;
    const email = penjual.email;
    res.status(200).json('uuid', 'name1', 'name2', 'email');
}

export const Me = async(req, res) => {
    if (!req.session.penjualId) {
        return res.status(401).json({ msg: "Mohon login ke akun anda!" });
    }
    const penjual = await Penjual.findOne({
        attributes: ['uuid', 'name1', 'name2', 'email'],
        where: {
            uuid: req.session.penjualId
        }
    });
    if (!penjual) return res.status(404).json({ msg: "Penjual tidak ditemukan" });
    res.status(200).json(penjual);
}

export const logOut = (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.status(400).json({ msg: "Tidak dapat logout" });
        res.status(200).json({ msg: "Anda telah logout" })
    });
}