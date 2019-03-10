const axios = require('axios');

const getLatLn = async(direccion) => {
    const url = encodeURI(direccion); // convierte los espacios y
    // los demas caracteres a un formato adecuado para hacer peticiones http
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${url}`,
        headers: { 'X-RapidAPI-Key': 'dfd139112cmshcca492e6101d344p10d009jsn25f6c91c70ca' }
    });

    const response = await instance.get();

    if (response.data.Results.length == 0) {
        console.log(`no hay resultados para ${direccion}`);
        return;
    }
    const data = response.data.Results[0];
    const address = data.name;
    const lat = data.lat;
    const ln = data.lon;
    /**
     *  cuando el status de la aplicacion sale
     *  200 = peticion realizada satisfactoriamente
     *  404 = no se encontro el url
     *  405 = error en el servidor  
     */
    return {
        direccion: address,
        lat,
        ln
    }
    // api.openweathermap.org/data/2.5/weather?lat=35&lon=139

}
module.exports = { getLatLn }