const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    return res.json('Hello World...');
});

app.listen(port, () => {
    console.log(`Run Server ${port}`);
});

