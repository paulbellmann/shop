var express = require('express');
var router = express.Router();
var Product = require('../models/product')

var sortBy = { price: -1 }

function maxArray(docs) {
    // array with arrays, for bootstrap, because we need only 3 items per row
    // so each array in the array has max 3 items
    var productChunk = [];
    for (var i = 0; i < docs.length; i += 3) {
        productChunk.push(docs.slice(i, i + 3))
    };
    return productChunk;
}

// SEARCH
router.get('/', function(req, res, next) {
  var searchPhrase = {};  

  if (req.query['query']) {
    searchPhrase.title = {$regex: ".*" + req.query['query'] + ".*", $options: 'i'}
  }

  if (req.query['ss']) {
    searchPhrase._id = req.query['ss']
  }

  Product.find(searchPhrase, function(err, docs) {
    res.render('shop/index', { active: 'search', products: maxArray(docs) });
  }).sort(sortBy);
});

// GAMES
router.get('/games', function(req, res, next) {
  var searchPhrase = {  type: 'game' }

  Product.find(searchPhrase, function(err, docs) {
    res.render('shop/index', { active: 'games', products: maxArray(docs) });
  }).sort(sortBy);
});

// KEYBOARDS
router.get('/keyboards', function(req, res, next) {
  var searchPhrase = {  type: 'keyboard' }

  Product.find(searchPhrase, function(err, docs) {
    res.render('shop/index', { active: 'keyboards', products: maxArray(docs)});
  }).sort(sortBy);
});

// INFO
router.get('/info', function(req, res, next) {
  var searchPhrase = {}

  if (req.query['id']) {
    searchPhrase._id = req.query['id'];
  }

  Product.find(searchPhrase, function(err, docs) {
    // docs[0] so it will only give me the first array from the find()
    // this way i can use {{products.title}} and dont need a {{#each prdocuts}}
    res.render('shop/info', { active: 'keyboards', products: docs[0] });
  }).sort(sortBy);
});

// LIST
router.get('/list', function(req, res, next) {
  var searchPhrase = {};  

  Product.find(searchPhrase, function(err, docs) {
    res.render('shop/list', { active: 'search', products: docs });
  }).sort(sortBy);
});

// API
router.get('/quicksearch', function(req, res, next) {
  var searchPhrase = {}

  if (req.query['query']) {
    searchPhrase.title = {$regex: ".*" + req.query['query'] + ".*", $options: 'i'}
  }

  Product.find(searchPhrase, function(err, docs) {
    res.setHeader('Content-Type', 'application/json');
    test = []
    for (i=0; i < docs.length; i++) {
      test.push({ id: docs[i]._id, text: docs[i].title})
    }
    res.send(test);
  }).sort(sortBy);
});


module.exports = router;