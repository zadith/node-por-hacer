const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

console.log(argv);

let comando = argv._[0];

switch( comando ){

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
    break;

    case 'listar':

        let listado = porHacer.getListado();

        for ( let tarea of listado){
            console.log(colors.green('=======Por Hacer========'));
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log(colors.green(`========================`));
            console.log(colors.red("________________________"));
        }
        
    break;

    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log('Tarea actualizada: ', actualizado);

    break;

    case 'eliminar':

        let eliminado = porHacer.eliminar(argv.descripcion);
        console.log('Eliminado: ', eliminado);
    
    break;

    default:
        console.log('Comando no reconocido');
    break;

}