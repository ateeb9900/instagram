const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle form submissions
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Received form submission: Name: ${name}, Email: ${email}, Message: ${message}`);
    
    // Respond to the client
    res.json({ status: 'success', message: 'Form received' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
