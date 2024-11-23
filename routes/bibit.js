import express, {Router} from "express";
const router = express.Router();

const bibit = [
    {
        id: 1,
        namaBibit: "tumbuhan",
        jenisBibit: "kuat",
        JumlahStok: "100",
        tahun: 2024
    },
    {
        id : 2,
        namaBibit: "batang",
        jenisBibit: "perkasa",
        JumlahStok: "100",
        tahun: 2027
    },
];
router.get("/", (req, res) => {
    res.send(bibit);

});

router.post('/', (req, res) => { 
    const newBibit = { 
        id: bibit.length + 1, 
        namabibit: req.body.namabibit, 
        jenisBibit: req.body.jenisBibit, 
        JumlahStok: req.body.JumlahStok,
        tahun: req.body.tahun
        //completed: false 
    }; 
    bibit.push(newbibit); 
    res.status(201).json(newbibit); 
}); 
 
router.put('/:id', (req, res) => { 
    const bibitIndex = bibit.find(t => t.id === parseInt(req.params.id)); 
    if (!bibitIndex === -1) 
        return res.status(404).json({ message: 'Bibit tidak ditemukan' }); 
 
    bibit[bibitIndex] = { 
        ...bibit[bibitIndex], 
        namabibit: req.body.namabibit || bibit[bibitIndex].namabibit, 
        jenisBibit: req.body.jenisBibit || bibit[bibitIndex].jenisBibit,
        JumlahStok: req.body.JumlahStok || bibit[bibitIndex].JumlahStok, 
        tahun: req.body.tahun || bibit[bibitIndex].tahun, 
    }; 
 
    res.status(200).json({ 
        message: `Tugas dengan ID '${req.params.id}' telah diperbarui`, 
        updatedBibit: bibit[bibitIndex], 
    }); 
}); 
 
