var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let feature1 = false;
  let feature2 = false;

  res.render('index', { title: 'Feature Toggles', feature1: feature1, feature2: feature2 });
});

module.exports = router;
