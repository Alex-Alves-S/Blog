const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const slugify = require('slugify');

router.get('/admin/categories/new', (req,res) =>{
    res.render('admin/categories/new');
});






module.exports = router;