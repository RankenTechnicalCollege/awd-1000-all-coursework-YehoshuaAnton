import express from 'express';
import cors from 'cors';
import * as data from './data.js';

const app = express();

// set up middleware
app.use(cors());
app.use(express.json());

// set up API routes
app.get('/', (request, response) => {
	response.json({ info: 'A simple API for maintaining an email list.' })
});
app.get('/emails', data.getEmails);
app.post('/emails', data.addEmail);
app.delete('/emails/:id', data.deleteEmail);

// start the server
app.listen(3000, () => {
	console.log('API running on port 3000.')
});