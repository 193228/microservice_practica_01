const express = require('express')
const router = express.Router()
const perfiles = require('../controllers/js/profiles')
var perfil;

router.get('/listProfiles', async (req, res) => {
    perfiles.listarPerfiles(req,res);
})

router.get('/formProfile', async (req, res) => {
    return res.render('form.ejs');
})

router.post('/createProfile', (req, res) => {
    perfiles.crearPerfiles(req,res)
})

module.exports = router