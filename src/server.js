const express = require('express');
const path = require('path');
const pages = require("./pages.js")

//Modificado
const server = express();

server
.use(express.urlencoded({extended: true}))

.use(express.static("public"))
.set("views",path.join(__dirname,"views"))
.set("view engine", "hbs")

//Rotas
.get('/',pages.index)
.get('/orphanage',pages.orphanage)
.get('/orphanages',pages.orphanages)
.get('/create-orphanage',pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

server.listen(5500)