import express from 'express';
import bodyParser from 'body-parser';
import bibitroute from "./routes/bibit.js";
import pupukRoutes from "./routes/pupuk.js";
import todoRoutes from "./routes/todo.js";

const app = express();
const PORT = 9000;
//const express = require('express');
//const hewanRoutes = require('./routes/hewan.js');

app.use(bodyParser.json());
app.use(express.json());

// app.use("/hewan", hewanRoutes);
// app.use("/todo", todoRoutes);
// app.use('view engine', 'ejs');
// app.use('/', (req, res) => {
//     res.render('index');
// });

app.use("/pupuk", pupukRoutes);
app.use("/bibit", bibitroute);
app.get("/", (req, res) => {
    console.log(["GET ROUTE"]);
    res.send("Selamat Pagi")
});

app.use(bodyParser.json());
app.listen(PORT, () => console.log(`Server berjalan di port : http://localhost:${PORT}`));