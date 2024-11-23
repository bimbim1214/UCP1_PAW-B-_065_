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
