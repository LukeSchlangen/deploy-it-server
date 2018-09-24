const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('I am a home page!');
});

app.get('/api', (req, res) => {
    res.send('When I grow up, I will be a big, complex API!');
});

app.listen(PORT, () => {
    console.log('The server is up and running!');
});