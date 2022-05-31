const mongoose = require('mongoose')

function Conexion(cadena){
    const  dbURI = cadena
    mongoose.connect(dbURI , {useNewUrlParser: true, useUnifiedTopology: true})
    const db = mongoose.connection
    db.on("error", (err)=>{console.error(err)})
    db.once("open", () => {console.log("Base de datos inicializado")})
}

module.exports.Conexion = Conexion;