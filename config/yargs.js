const argv = require('yargs')
                .option("tb",{
                    alias: 'tablaBase',
                    type: 'number',
                    default: 5,
                    demandOption: true,
                    describe:'Es la base de la tabla de multiplicar'
                })
                .option("h",{
                    alias: 'hasta',
                    type: 'number',
                    default: 5,
                    demandOption: true,
                    describe:'La cantidad de veces a multiplicar'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    demandOption: true,
                    describe:'Muestra la tabla en consola'
                })
                .check( (argv , options) => {
                    if (isNaN(argv.tb)) {
                        throw ('la tablaBase tiene que ser numerica')
                    }
                    if (isNaN(argv.h)) {
                        throw ('la tablaBase tiene que ser numerica')
                    }
                    return true
                })
                .argv;

module.exports = argv;