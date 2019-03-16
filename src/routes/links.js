const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/add', (req, res) => {
  res.render('links/add');
});

router.post('/add', async (req, res) => {
  // const { title, url, description} = req.body
  const newLink = ({ title, url, description } = req.body);

  await pool.query('INSERT INTO links SET ?', [newLink]);
  res.send('Funcionou');
});

module.exports = router;