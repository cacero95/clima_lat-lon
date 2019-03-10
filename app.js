const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
// console.log(argv.direccion);

lugar.getLatLn(argv.direccion).then(response => {
    clima.getClima(response.lat, response.ln).then(resp => {
        console.log(`el clima de ${response.direccion} es:${resp}`);
    })
})