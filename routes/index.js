var express = require('express');
var router = express.Router();
const rateLimits = require('./rate-limits')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/rate-limits', function(req, res, next) {
  res.status(200)
  return res.json({
    '/users (GET)': `${rateLimits[0]} per minute`,
    '/users/:id (GET)': `${rateLimits[1]} per minute`,
    '/users (POST)': `${rateLimits[2]} per minute`,
    '/users/:id (PUT)': `${rateLimits[3]} per minute`,
    '/users/:id (DELETE)': `${rateLimits[4]} per minute`,
  });
});

module.exports = router;
