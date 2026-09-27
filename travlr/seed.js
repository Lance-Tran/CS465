const fs = require('fs');
const mongoose = require('mongoose');

// Connect to MongoDB
const dbURI = 'mongodb://127.0.0.1:27017/travlr';
mongoose.connect(dbURI);

// Require Model
const Trip = require('./app_server/models/travlr');

// Read JSON mock data
const trips = JSON.parse(fs.readFileSync('./app_server/data/trips.json', 'utf8'));

const seedDB = async () => {
    try {
        await Trip.deleteMany({});
        await Trip.insertMany(trips);
        console.log('Database successfully seeded with trips data!');
    } catch (err) {
        console.error('Error seeding database:', err);
    } finally {
        await mongoose.connection.close();
        process.exit(0);
    }
};

seedDB();