var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let feature1 = false;
  let feature2 = true;

  res.render('index', { title: 'Express', feature1: feature1, feature2: feature2 });
});

module.exports = router;
