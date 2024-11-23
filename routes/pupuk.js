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
 
router.put('/:id', (req, res) => { 
    const pupukIndex = pupuk.findIndex(t => t.id === parseInt(req.params.id)); 
    if (!pupukIndex === -1) 
        return res.status(404).json({ message: 'pupuk tidak ditemukan' }); 
 
    pupuk[pupukIndex] = { 
        ...pupuk[pupukIndex], 
        namapupuk: req.body.namapupuk || pupuk[pupukIndex].namapupuk, 
        jenispupuk: req.body.jenispupuk || pupuk[pupukIndex].jenispupuk,
        jumlahstok: req.body.jumlahstok || pupuk[pupukIndex].jumlahstok,
        tahun: req.body.tahun || pupuk[pupukIndex].tahun, 
    }; 
 
    res.status(200).json({ 
        message: `Tugas dengan ID '${req.params.id}' telah diperbarui`, 
        updatedpupuk: pupuk[pupukIndex], 
    }); 
}); 
 
router.delete('/:id', (req, res) => { 
    const pupukIndex = pupuk.findIndex(t => t.id === parseInt(req.params.id)); 
    if (pupukIndex === -1) return res.status(404).json({ message: 'pupuk tidak ditemukan' }); 
 
    const deletepupuk = pupuk.splice(pupukIndex, 1)[0]; // Menghapus dan menyimpan todo yang dihapus 
    res.status(200).json({ message: `Tugas '${deletepupuk.namapupuk}' telah dihapus` }); 
 
}); 
export default router;
