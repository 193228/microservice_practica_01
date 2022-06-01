const express = require('express')
const router = express.Router()
const perfiles = require('../controllers/js/profiles')
const fetch = require('node-fetch');

/*router.get('/listProfiles', async (req, res) => {
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
})*/

router.get('/listDogs', async (req, res) => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json();
    return res.json(data);
})

router.get('/randomImage', async (req, res) => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random")
    const data = await response.json();
    return res.json(data);
})

router.get('/raza/:nombre', async (req, res) => {
    var nombre = req.params.nombre; //or use req.param('id')
    const response = await fetch("https://dog.ceo/api/breed/"+nombre+"/images");
    const data = await response.json();
    return res.json(data);
})

module.exports = router