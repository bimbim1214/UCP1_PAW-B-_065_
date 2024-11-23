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

