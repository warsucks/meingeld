var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res, next){
  var indexPath = path.join(__dirname, '/index.html');
  res.sendFile(indexPath);
});

module.exports = router;
