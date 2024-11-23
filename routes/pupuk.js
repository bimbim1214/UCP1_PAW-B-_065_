import express, {json, Router} from "express";
const router = express.Router();

const pupuk = [
    {
        namapupuk  : "MPK",
        jenispupuk: "pupuk sawit",
        jumlahstok: "100",
        umurpupuk: "10thn"
    },
    {
        namapupuk  : "Dolomit",
        jenispupuk: "tahan asam",
        jumlahstok: "100",
        umurpupuk: "5thn"
    },
];
router.get("/", (req, res) => {
    res.send(hewan);
});


export default router;