const request = require('supertest');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Welcome to my lightweight Node.js app!');
});

test('GET / responds with "Welcome to my lightweight Node.js app!"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Welcome to my lightweight Node.js app!');
});
