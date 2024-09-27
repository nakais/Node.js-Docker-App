// Import Express.js
const express = require('express');
const app = express();

// In-memory store (simple array)
const store = [];

// Middleware to parse JSON requests
app.use(express.json());

// Route for the root ("/")
app.get('/', (req, res) => {
    res.send('Welcome to my lightweight Node.js app!');
});

// Route to get all items in the store
app.get('/items', (req, res) => {
    res.json(store);
});

// Route to add a new item to the store
app.post('/items', (req, res) => {
    const newItem = req.body.item;
    store.push(newItem);
    res.json({ message: `Item added: ${newItem}` });
});

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

