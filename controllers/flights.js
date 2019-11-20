var Flight = require('../models/flight')

module.exports = {
    index, 
    show,
    new: newFlight,
    create
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'Flight list',  flights });
    });
};

function show(req, res) {
Flight.findById(req.params.id, function(err, flight) {
    res.render('flights/index', { title: 'Flight Summary', flight } )
})
}
function newFlight(req, res) {
    res.render('flights/new'), { title: 'Enter Flight' };
}

function create(req, res) {
    req.body.airlines = !!req.body.airlines;
    var flight = new Flight(req.body);
    flight.save(function(err) {
        if(err) return res.render('flights/new');
        console.log(flight)
    }) 
    res.render('flights/new');
}