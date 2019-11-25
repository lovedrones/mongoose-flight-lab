var Flight = require('../models/flight');
var Ticket = require('../models/ticket');


module.exports = {
    index, 
    show,
    new: newFlight,
    create,
    update,
    delete: deleteFlight
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'Flight Index', flights });
    });
};

function show(req, res) {
    console.log(req.params.id);
Flight.findById(req.params.id, function(err, flight) {
    console.log(flight)
    Ticket.find({flight: flight._id}, function(err, tickets) {
            console.log(tickets);
            res.render('flights/show', { title: `Flight # ${flight._id}`, flight, tickets })
        })  
})
}

function update(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.push(req.body);
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        });
    })
};
function deleteFlight(req, res) {
    Flight.findByIdAndRemove({ '_id' : req.params.id }, function(err, flight) {
        flight.remove(function(err) {
    res.redirect(`/flights/index`);
})     
    })
}

function newFlight(req, res) {
    res.render('flights/new'), { title: 'Enter Flight' };
}

function create(req, res){
    var s = req.body.departs;
    req.body.departs = 
      `${s.substr(5,2)}-${s.substr(8,2)}-${s.substr(0,4)}`;
    console.log(req.body.departs);
  var flight = new Flight(req.body);
  flight.save(function(err, flights) {
      if(err) return res.render('/flights');
      console.log(flight);
      res.redirect('/flights'), { title: 'Flight Index', flights };
  });
}
