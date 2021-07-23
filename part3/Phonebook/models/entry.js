const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const url = process.env.MONGODB_URI;

console.log(`Connecting to phonebook-app at ${url}`);

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }).then(result => {
        console.log('Successfully connected to MongoDB');
}).catch(error => {
        console.log('Error connecting to MongoDB: ', error.message);
});

const entrySchema = new mongoose.Schema({
        name: {
                type: String,
                required: true,
                minLength: 3,
                unique: true
        },
        number: {
                type: String,
                required: true,
                minLength: 8
        },
        date: Date
});
entrySchema.plugin(uniqueValidator);

entrySchema.set('toJSON', {
        transform: (document, returnedObject) => {
                returnedObject.id = returnedObject._id.toString();
                delete returnedObject._id;
                delete returnedObject.__v;
        }
});

module.exports = mongoose.model('Entry', entrySchema);