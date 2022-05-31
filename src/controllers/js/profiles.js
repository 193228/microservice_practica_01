const { json } = require('express/lib/response')
const Profiles = require('../../models/profiles')

async function listarPerfiles(req,res){
    try {
        const perfiles = await Profiles.find()
        return res.render('index.ejs', { perfiles : perfiles });     
    } catch (error) {
        return res.status(500).json({"error":error})
    }
}

async function crearPerfiles(req,res){
    try {
        const { imagen } = req.body
        const { nombre } = req.body
        const { rol } = req.body
        const { institucion } = req.body

        const profile = await Profiles.create({
            imagen,
            nombre,
            rol,
            institucion,
        })

        return res.status(201).json(profile)
    } catch (error) {
        return res.status(500).json({"error":error})
    }
}

module.exports = {
    listarPerfiles,
    crearPerfiles,
};