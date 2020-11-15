
const opciones = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    },
    eliminar: {
        alias: 'e'
    }

}

const argv = require('yargs')
    .command('crear', 'Crear un elemento tarea por hacer', opciones)
    .command('actualizar', 'Actualiza el estado de una tarea', opciones)
    .command('eliminar', 'Elimina una tarea', opciones)
    .help()
    .argv;

module.exports = {
    argv
}