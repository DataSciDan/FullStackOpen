const mongoose = require('mongoose');

const commandlineArguments = process.argv.length;

if (commandlineArguments < 6 && commandlineArguments !== 4) {
        console.log('Please provide a username, passphrase, name, and number: node mongo.js <username> <passphrase> <name> <number>');
        process.exit(1);
}

const [username, passphrase] = process.argv.slice(2, 4);
let name, number;
if (commandlineArguments > 4) {
        [name, number] = process.argv.slice(4, 6);
}

const uri = `mongodb+srv://${username}:${passphrase}@cluster0.a7wtw.mongodb.net/phonebook-app?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });

const entrySchema = new mongoose.Schema({
        name: String,
        number: String,
        date: Date
});

const Entry = mongoose.model('Entry', entrySchema);

if (commandlineArguments === 4) {
        Entry.find({}).then(result => {
                result.forEach(note => console.log(note));
        }).then(_ => {
                mongoose.connection.close();
                process.exit(0);
        });
}

const entry = new Entry({
        name,
        number,
        date: new Date()
});

entry.save().then(result => {
        console.log(`added ${name} with the number ${number} to the phonebook`);
        mongoose.connection.close();
});