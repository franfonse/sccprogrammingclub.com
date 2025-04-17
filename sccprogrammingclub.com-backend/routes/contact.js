const express = require('express');

const router = express.Router();

router.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    if (name && email && message) {
        res.status(200).json({
          message: 'Thank you for reaching out! We will get back to you soon.',
        });
      } else {
        res.status(400).json({
          message: 'Please provide all fields (name, email, message).',
        });
      }
});

module.exports = router;