var express = require('express');
var router = express.Router();
const rateLimit = require('express-rate-limit')
const rateLimits = require('./rate-limits')
function maxRequestsPerMinute(max = 3){
  return rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max, // Limit each IP to 100 requests per `window` (here, per 1 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  })
}

/* GET users listing. */
router.get('/', maxRequestsPerMinute(rateLimits[0]),function(req, res) {
  return res.send('ok')
});

router.get('/:id', maxRequestsPerMinute(rateLimits[1]), function(req, res, next) {
  return res.send('ok')
});

router.post('/', maxRequestsPerMinute(rateLimits[2]), function(req, res, next) {
  return res.send('ok')
});

router.put('/:id', maxRequestsPerMinute(rateLimits[3]), function(req, res, next) {
  return res.send('ok')
});

router.delete('/:id', maxRequestsPerMinute(rateLimits[4]), function(req, res, next) {
  return res.send('ok')
});

module.exports = router;
