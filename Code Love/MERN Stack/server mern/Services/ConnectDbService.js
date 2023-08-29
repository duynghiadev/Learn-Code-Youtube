const mongoose = require('mongoose');

async function connectDatabase() {
    try {
        await mongoose.connect(`mongodb://localhost:${process.env.PORT_MONGO}/${process.env.DATABASE_NAME}`);
        console.log('connect database success');
    } catch (error) {
        console.log('connect database fail', error);
    }
}

module.exports = connectDatabase;