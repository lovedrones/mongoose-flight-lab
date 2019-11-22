var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controllers/tickets');

router.get('/tickets/new', ticketsCtrl.new);
router.post('/flights/:id/tickets', ticketsCtrl.addToDestination)
module.exports = router;