const express = require('express')
const router = express.Router()
const perfiles = require('../controllers/js/profiles')
const fetch = require('node-fetch');

router.get('/listProfiles', async (req, res) => {
    perfiles.listarPerfiles(req,res);
})

router.get('/formProfile', async (req, res) => {
    return res.render('form.ejs');
})

router.post('/createProfile', (req, res) => {
    perfiles.crearPerfiles(req,res)
})

router.get('/random', async (req, res) => {
    const response = await fetch("https://api.chucknorris.io/jokes/random")
    const data = await response.json();
    return res.json(data);
    //return res.render('form.ejs');
})

module.exports = router