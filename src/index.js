// Paquetes Requeridos
const express = require('express')
const app = express()
const routes = require('../src/routes/routes') // includes the routes.js file
const path = require('path');
const bodyParser = require('body-parser');
const conexion = require('../src/config/conexionDB');
const cors = require('cors');

// setup bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/controllers/views");

//Middlewares
app.use(express.json()) // we need to tell server to use json as well
app.use(routes) // tells the server to use the routes in routes.js
app.use(express.static(path.join(__dirname, '/controllers')));
app.use(cors())

//Conexion con la bd en la nube
conexion.Conexion("mongodb+srv://eduarfailmaster:Nanguelu_01@cluster0.b5xl2.mongodb.net/ProfilesPolitecnico")

app.listen(2400, () => {console.log("Server Corriendo En El Puerto 2400")})