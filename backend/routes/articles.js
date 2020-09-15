const router = require('express').Router;
const Article = require('../model/Articles');

router.post('/admin/articles/add', async (req, res) =>  {
    res.send('Added');
});

module.exports = router;