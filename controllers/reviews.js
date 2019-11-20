var Movie = require('../models/flight');
 
module.exports = {
  create
};

function create(req, res) {
    Movie.findById(req.params.id, function(err, flight) {
      flight.reviews.push(req.body);
      flight.save(function(err) {
        res.redirect(`/flights/${flight._id}`);
      });
    });
  }