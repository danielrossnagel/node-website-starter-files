const express = require('express');
const people = require('./people.json');

const app = express();

// set view engine to pug
app.set('view engine', 'pug');

// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));

// init server on port 7000
const server = app.listen(7000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

// home
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Homepage',
    people: people.profiles
  });
});

// profiles
app.get('/profile', (req, res) => {
  const person = people.profiles.find(p => p.id === req.query.id);
  res.render('profile', {
    person
  });
});