import express, {Router} from "express";
const router = express.Router();

const bibit = [
    {
        namaBibit: "tumbuhan",
        jenisBibit: "kuat",
        JumlahStok: "100",
        tahun: 2024
    },
    {
        namaBibit: "batang",
        jenisBibit: "perkasa",
        JumlahStok: "100",
        tahun: 2027
    },
];
router.get("/", (req, res) => {
    res.send(mobil);

});
export default router;