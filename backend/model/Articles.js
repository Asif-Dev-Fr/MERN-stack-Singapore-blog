const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
        min: 2,
        max: 255
    }, 
    categorie: {
        type: String,
        required: true,
        min: 2,
        max: 25
    }
})

module.exports = mongoose.model('Article', articleSchema); 