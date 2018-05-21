var router = require('express').Router();
var requests = require('./requests.js');

router.get('/movies', requests.queries.get);

router.post('/movies', requests.queries.post);

module.exports = router;