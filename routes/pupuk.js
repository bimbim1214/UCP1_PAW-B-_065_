import express, {json, Router} from "express";
const router = express.Router();

const pupuk = [
    {
        id: 1,
        namapupuk  : "MPK",
        jenispupuk: "pupuk sawit",
        jumlahstok: "100",
        tahun: 2018
    },
    {
        id: 2,
        namapupuk  : "Dolomit",
        jenispupuk: "tahan asam",
        jumlahstok: "100",
        tahun: 2017
    },
];
router.get("/", (req, res) => {
    res.send(pupuk);
});

router.post('/', (req, res) => { 
    const newpupuk = { 
        id: pupuk.length + 1, 
        namapupuk: req.body.namapupuk,
        jenispupuk: req.body.jenispupuk,
        jumlahstok: req.body.jumlahstok, // Menambahkan jumlahstok jika perlu
        tahun: req.body.tahun

        //completed: false 
    }; 
    pupuk.push(newpupuk); 
    res.status(201).json(newpupuk); 
}); 
 
