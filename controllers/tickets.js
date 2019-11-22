var Ticket = require('../models/ticket');
var Flight = require('../models/flight')

module.exports = {
    new: newTicket,
    create,
    addToDestination
};

function addToDestination(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.push(req.body.performer.Id);
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        })
    })
}

function create(req, res) {
    // var s = req.body.flight;
    Ticket.create(req.body, function(err, ticket){
        res.redirect('/performers/new')
    })

}

function newTicket(req, res) {
    Ticket.find({}, function(err, tickets) {
        res.render('tickets/new', {
            title: 'Add Ticket', 
            tickets
        });
    })
}
