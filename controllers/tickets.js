var Ticket = require('../models/ticket');
var Flight = require('../models/flight')

module.exports = {
    new: newTicket,
    create
};


function newTicket(req,res) {
    res.render('tickets/new', {flightId: req.params.id, title: ` Book Ticket for Flight # ${req.params.id}`});
}

function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function(err, ticks) {
        res.redirect(`/flights/${ticks.flight}`)
    });
};

