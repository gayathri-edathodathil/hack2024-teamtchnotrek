const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// In-memory data storage (for demonstration)
let rewardPoints = 100; // Initial reward points

// API Endpoints

// Get reward points
app.get('/api/reward-points', (req, res) => {
    res.json({ points: rewardPoints });
});

// Post additional shift request
app.post('/api/additional-shift', (req, res) => {
    const { date, startTime, endTime } = req.body;

    // Simulate shift addition
    if (date && startTime && endTime) {
        rewardPoints += 10; // Add reward points for additional shift
        res.json({ success: true });
    } else {
        res.status(400).json({ success: false, message: 'Invalid shift data' });
    }
});

// Placeholder endpoints for shift rescheduling and swapping
app.post('/api/reschedule-shift', (req, res) => {
    // Simulate rescheduling shift
    res.json({ success: true });
});

app.post('/api/swap-shift', (req, res) => {
    // Simulate swapping shift
    res.json({ success: true });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
