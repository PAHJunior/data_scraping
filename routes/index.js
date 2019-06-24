var express = require('express');
var cheerio = require('cheerio');
var router = express.Router();
var request = require('request')


/* GET home page. */
router.get('/', function(req, res, next) {
  url = 'https://www.al.sp.gov.br/deputado/lista/'
  request(url, function(error, response, html) {
    res.send(html)
  })
});

module.exports = router;
