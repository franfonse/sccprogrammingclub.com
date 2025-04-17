const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
    console.log('Frontend connected to backend');
    res.json({ message: 'Connected to backend' });
});

// ROUTES
const contact = require('./routes/contact');
app.use('/contact', contact);

app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});
