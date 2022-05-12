const express = require('express');
const res = require('express/lib/response');

const app = express();

app.use(express.json());

const port = 3000;

app.get('/cursos', (req, res) => {
    const query = req.query;
    console.log(query);
    return res.json(["JavaScript", "ReactJs", "AngularJs"]);
});

app.post('/cursos', (req, res) => {
    const body = req.body;
    console.log(body);
    return res.json(["JavaScript", "ReactJs", "AngularJs", "C", "C++", "C#"]);
});

app.put('/cursos/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);
    return res.json(["JavaScript", "ReactJs", "AngularJs", "C", "Java", "C#"]);
});

app.patch('/cursos/:id', (req, res) => {
    return res.json(["JavaScript", "ReactJs", "VueJs", "C", "Java", "C#"]);
});

app.delete('/cursos/:id', (req, res) => {
    return res.json(["JavaScript", "ReactJs", "VueJs", "Java", "C#"]);
});

app.listen(port, () => {
    console.log(`Run Server ${port}`);
});

