var Ticket = require('../models/ticket');
var Flight = require('../models/flight')

module.exports = {
    new: newTicket,
    create
};

console.log('ticket control');

function newTicket(req,res) {
    res.render('tickets/new', {flightId: req.params.id, title: `Add a Ticket to Flight # ${req.params.id}`});
}

function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function(err, ticket) {
        res.redirect(`/flights/${ticket.flight}`)
    });
};

// function newTicket(req, res) {
//     Flight.findById(req.params.id, function(err, flight) {
//         flight.destinations.push(req.body.destinations.id);
//     Ticket.find({}, function(err, tickets) {
//         res.render('tickets/new', {
//             title: 'Add Ticket', 
//             tickets,
//         });
//     });
// });
// }

// function addToDestination(req, res) {
//     Flight.findById(req.params.id, function(err, flight) {
//         flight.destinations.push(req.body.destinations.id);
//         flight.save(function(err) {
//             res.redirect(`/flights/${flight._id}`);
//         })
//     })
// }