const express = require('express')
const { route } = require('../components/usuario/network')
const usuario = require('../components/usuario/network')
const carrera = require('../components/carrera/network')
const institucion = require('../components/institucion/network')
const actividad = require('../components/actividad/network')
const representante_legal = require('../components/representante_legal/network')

const routes = function( server ) {
    server.use('/usuario', usuario)
    server.use('/carrera', carrera)
   server.use('/actividad', actividad)
   server.use('/institucion', institucion)
   server.use('/representante_legal', representante_legal)
}

module.exports = routes