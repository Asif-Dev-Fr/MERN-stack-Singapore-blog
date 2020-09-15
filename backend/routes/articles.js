const router = require('express').Router();
const Article = require('../model/Articles');

router.post('/add', async (req, res) =>  {
    // res.send('Added');

    // Add new article : 
    const article = new Article({
        title: req.body.title,
        categorie: req.body.categorie
    });

    // Save in the DB : 
    try {
        const saveArticle = await article.save();
        res.send(saveArticle);
    } catch {
        res.status(400).send(err);
    }
});

router.post('/update', async (req, res) =>  {
    res.send('Updated');
});

module.exports = router;