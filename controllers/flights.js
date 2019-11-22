var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
    index, 
    show,
    new: newFlight,
    create
}
console.log('controller')

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'Flight Index', flights });
    });
};

function show(req, res) {
Flight.findById(req.params.id) 
.populate('flight').exec(function(err, flight) {
    Ticket.find( {_id: {$nin: flight.flight}})
    .exec(function(err, tickets) {
            console.log(tickets);
            res.render('flights/show', { title: 'Flight Summary', flight, tickets })
        })  
})
}

function newFlight(req, res) {
    res.render('flights/new'), { title: 'Enter Flight' };
}

function create(req, res){

  var flight = new Flight(req.body);
  flight.save(function(err, flights) {
      if(err) return res.render('/flights');
      console.log(flight);
      res.redirect('/flights'), { title: 'Flight Index', flights };
  });
}

// function create(req, res) {
//     console.log(req.body);
//     var flight = new Flight(req.body);
//     flight.create(function(err, flights) {
//         if(err) return res.render('flights/new');
//         console.log(flight)
//     }); 
//     res.render('flights/index', {flights});
// }

// var dt = newFlight.departs;
// var destDate = `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}T${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}`;
// res.render('flights/new', {destDate});
// for (let key in req.body) {
//     if (req.body[key] === '') delete req.body[key];
// }