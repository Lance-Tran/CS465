const express = require('express');
const router = express.Router();

// Import API controllers
const tripsController = require('../controllers/trips');

// Define route for all trips
router
    .route('/trips')
    .get(tripsController.tripsList);

// Define route for a single trip by tripCode parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

module.exports = router;