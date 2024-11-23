import express from 'express';
import todoRoutes from './routes/todo.js'

const app = express();
const port = 3000;

app.use(express.json());

app.use('/todos', todoRoutes);
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () =>
    console.log(`server sedang berjalan di port : http://localhost:${port}`)
);