require('dotenv').config();
const express = require('express');

const server = express();

server.get('/api/users', (req, res) => {
    res.json([
        { id: 1, username: 'foo'},
        { id: 1, username: 'bar'},
        { id: 1, username: 'baz'}
    ])
})

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});