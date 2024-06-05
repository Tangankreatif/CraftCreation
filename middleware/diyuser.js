import Penjual from "../models/PenjualModel.js";

export const verifyPenjual = async(req, res, next) => {
    if (!req.session.penjualId) {
        return res.status(401).json({ msg: "Mohon login ke akun anda!" });
    }
    const penjual = await Penjual.findOne({
        where: {
            uuid: req.session.penjualId
        }
    });
    if (!penjual) return res.status(404).json({ msg: "Penjual tidak ditemukan" });
    req.penjualId = penjual.id;
    req.role = penjual.role;
    next();
}

export const adminOnly = async(req, res, next) => {
    const penjual = await Penjual.findOne({
        where: {
            uuid: req.session.penjualId
        }
    });
    if (!penjual) return res.status(404).json({ msg: "Penjual tidak ditemukan" });
    if (penjual.role !== "admin") return res.status(403).json({ msg: "Akses Terlarang" });
    next();
}