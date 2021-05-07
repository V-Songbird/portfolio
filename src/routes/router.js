const express = require('express');
const router = express.Router();

const myWorks = require('../lib/works');
const myInfo = require('../lib/info');

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home',
    barbaName: 'home',
    works: myWorks,
    info: myInfo,
    isContact: false,
    javascript: 'home'
  });
});

module.exports = router;
