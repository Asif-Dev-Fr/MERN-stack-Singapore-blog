const express = require('express');
const app = express();

import data from './data';

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});


app.get("/nos-articles/:cat", (req, res) => {
    const articleCat = req.params.category;
    const article = data.articles.find(value => value.cat === articleCat);
    if(article) {
        res.send(article);
    } else {
        res.statut(400).send({
            msg : 'Article not found'
        })
    }
});