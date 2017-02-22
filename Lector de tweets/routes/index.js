var express = require('express');
var router = express.Router();
var lectorJson = require('../lectorJson.js');


router.get('/', function(req, res, next) {
  console.log("llega a antes de imprimir");
  lectorJson.imprimir(res);
  console.log("sale de  imprimir");
  res.end();

});

module.exports = router;
