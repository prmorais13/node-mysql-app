const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Node MySql App version 1.0.0'));

module.exports = router;
