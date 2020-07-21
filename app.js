const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(40.75, -74.00)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {
    // Salida: el clima de XXXX es de XXXX o no se pudo determinar el clima de XXX
    try {
        //const coords = await lugar.getLugarLatLng(argv.direccion);
        // const temp = await clima.getClima(coords.lat, coords.lng);
        const temp = await clima.getClima(40.75, -74.00);
        return `El clima de ${direccion} es de ${temp}.`
    } catch (err) {
        return `No se pudo determinar el clima de ${direccion}: ${err}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);