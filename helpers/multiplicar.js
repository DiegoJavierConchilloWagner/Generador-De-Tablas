const fs = require('fs');
const colors = require('colors')

const crearArchivo = async( tablaBase , hasta , listar) => {
    try {
        console.log('==================='.green);
        console.log(`   tabla del: ${colors.blue(tablaBase)}`);
        console.log('==================='.green);
    
        let salida = ''
        let consola = ''
        
        for (let i = 1; i <= hasta; i++) {
            consola +=colors.green(`${tablaBase} x ${i} = ${ tablaBase * i }\n`)
            salida +=`${tablaBase} x ${i} = ${ tablaBase * i }\n`
        }
        
        listar && console.log(consola);

        fs.writeFileSync( `./salida/tabla-${tablaBase}.txt`, salida);
        return `tabla-${tablaBase}.txt`
        // fs.writeFiles( `tabla-${tablaBase}.txt`, salida, (err) =>{
        //     if (err) throw err;
        //     console.log(`tabla-${tablaBase}.txt creado`)
        // } )
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}