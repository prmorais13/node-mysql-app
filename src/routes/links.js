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
  res.redirect('/links');
});

router.get('/', async (req, res) => {
  const links = await pool.query('SELECT * FROM Links');
  res.render('links/list', { links });
});

router.get('/delete/:id', async (req, res) => {
  await pool.query('DELETE FROM links WHERE id = ?', [req.params.id]);
  res.redirect('/links');
});

router.get('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const links = await pool.query('SELECT * FROM links WHERE id = ?', [id]);
  res.render('links/edit', { link: links[0] });
});

module.exports = router;
