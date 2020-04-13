var express = require('express');
var router = express.Router();
const cheerio = require('cheerio');

/* GET home page. */
router.post('/api/v1/cheerio', function(req, res, next) {
  if(!req.body) {
    res.json("body is empty")
  }
  if(!req.body.html) {
    res.json("html is empty");
  }
  if(!req.body.query_selector) {
    res.json("invalid selector");
  }
  var html = req.body.html;
  var query_selector = req.body.query_selector;
  const $ = cheerio.load(html);
  const data = [];

  $(query_selector).each(function(i, elem) {
      data[i] = $(this).text();
  });

  res.json({data: data});
});

module.exports = router;
