const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Entry = require('./models/entry');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('build'));

const morgan = require('morgan');
morgan.token('body', (request, response) => JSON.stringify(request.body));
morgan.token('size', (request, response) => response.get('Content-Length'));
const morganFormatter = (tokens, request, response) => {
        return [
                tokens.method(request, response),
                tokens.url(request, response),
                tokens.status(request, response),
                `${tokens.size(request, response)}B`,
                `${tokens['response-time'](request, response)}ms`,
                tokens.body(request, response)
        ].join(' ');
}
app.use(morgan(morganFormatter, 'tiny'));

app.get('/api/persons', (request, response) => {
        Entry.find({}).then(phonebook => response.json(phonebook));
});

app.get('/api/persons/:id', (request, response) => {
        const id = request.params.id;
        Entry.findById(id).then(entry => {
                return response.json(entry);
        }).catch(error => {
                return response.status(404).send('<h1>Entry does not exist<h1>');
        });
});

app.get('/info', (request, response) => {
        Entry.find({}).then(entries => {
                const date = new Date();
                const amount = entries.length;
                const html = `<style>body{background-color:#222;color:#ddd}</style><p>Phonebook has info for ${amount} people</p><p>${date}</p>`;
                response.send(html);
        });
});

app.delete('/api/persons/:id', (request, response, next) => {
        Entry.findByIdAndRemove(request.params.id).then(_ => {
                response.status(204).end();
        }).catch(error => next(error));
});

app.post('/api/persons', (request, response) => {
        const { name, number } = request.body;
        if (!name) {
                return response.status(400).json({
                        error: "name not supplied"
                });
        }
        if (!number) {
                return response.status(400).json({
                        error: "number not supplied"
                });
        }

        
        /*This isn't explicitly asked for in the assignment, but I wanted to make it so notes with content idential to notes already in the database aren't added.
        This solution probably doesn't work because of asynchronicity.
        And the problem is that we need that return keyword to cease the entire function, so we can't simply put that statement in then's handler.*/
        /*
        let numberOfEntries;
        Entry.find({name}).then(entries => numberOfEntries = entries.length);
        if (numberOfEntries) {
                return response.status(400).json({
                        error: `${name} is already in the phonebook`
                });
        }*/
        
        const entry = new Entry({
                name,
                number,
                date: new Date()
        });

        entry.save().then(result => {
                response.status(201).json(result);
        });
});

app.put('/api/persons/:id', (request, response, next) => {
        const {number} = request.body;
        const id = request.params.id;
        Entry.findByIdAndUpdate(id, {number}, {new: true}).then(updatedEntry => {
                response.json(updatedEntry);
        }).catch(error => next(error));
});

const unknownEndpoint = (request, response) => {
        response.status(404).send({error: "404: resource doesn't exist"});
};
app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
        console.error(error.message);

        if (error.name === 'CastError') {
                return response.status(400).send({error: 'malformed id'});
        }

        next(error);
};
app.use(errorHandler);


const PORT = process.env.PORT;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);