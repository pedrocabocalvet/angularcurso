var express = require('express');
var router = express.Router();
var data = require('../controllers/Data');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {});
});

router.get('/list', function(req, res, next) {
    res.json(data.getElementos());
});

router.post('/add', function(req, res, next) {
	console.log('req.body' + req.body);
	console.log('req.body' + req.body.id);
	console.log('req.body' + req.body.name);
	data.addElement(req.body);

	res.json(data.getElementos());
});

module.exports = router;
