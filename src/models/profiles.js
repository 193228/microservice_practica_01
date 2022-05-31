const mongoose = require('mongoose')

const ProfilesSchema = new mongoose.Schema({
    imagen: {
        type: String,
        //required: true,
    },
    nombre: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true,
    },
    institucion: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('profiles', ProfilesSchema)