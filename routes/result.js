var express = require('express');
var router = express.Router();

router.get('/success', function(req, res, next){
    res.render('success', { style: 'style.css'});
});

router.get('/cancel', function(req, res, next){
    res.render('success', { style: 'style.css'});
});

module.exports = router;