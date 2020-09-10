import data from './data';

const express = require('express');
const app = express();

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});



app.get("/api/nos-articles", (req, res) => {
    const allArticles = data.articles;
    // console.log(allArticles);
    res.send(allArticles);
});

app.get("/nos-articles/:cat", (req, res) => {
    const articleCat = req.params.category;
    const article = data.articles.find(value => value.category === articleCat);
    if(article) {
        res.send(article);
    } else {
        res.statut(400).send({
            msg : 'Article not found'
        })
    }
});