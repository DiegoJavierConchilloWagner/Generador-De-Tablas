const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear()

// //De esta forma privienen los resultados y se armaba antes de la
// //Forma antigua y no recomendada
// const [ ,  , arg3 = 'tablaBase=5'] = process.argv
// const [ , tablaBase = 5] = arg3.split('=')
// console.log( tablaBase )

console.log( argv )

crearArchivo( argv.tb , argv.h , argv.l )
    .then((result) => console.log(result,'creado'))
    .catch((err) => console.error(err));