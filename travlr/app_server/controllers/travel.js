const fs = require('fs');
const path = require('path');

// Read and parse trips data from JSON file
const trips = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/trips.json'), 'utf8'));

/* GET travel view */
const travel = (req, res) => {
    res.render('travel', {
        title: 'Travlr Getaways',
        trips: trips
    });
};

module.exports = {
    travel
};