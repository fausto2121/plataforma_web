const db = require('mongoose')
const Model = require('./model')

const uri = "mongodb+srv://ups:12345@cluster0.q0tyh.mongodb.net/ups?retryWrites=true&w=majority";

db.Promise = global.Promise
db.connect(uri, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    dbName:'ups'
})
    .then(() => console.log('[db] Conectada con éxito.'))
    .catch((error) => console.error('[error] ', error))

function addActividad( actividad ) {
    const objeto = new Model( actividad )
    objeto.save()
}

async function getActividad() {
    const objetos = await Model.find()
    return objetos
}

module.exports = {
    add: addActividad,
    list: getActividad,
}