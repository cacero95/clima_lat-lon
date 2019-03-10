const axio = require('axios');

const getClima = async(lat, ln) => {

    const response = await axio.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${ln}&appid=798a94d2dc877c83b2f1d1885a7aef8a&units=metric`);
    return response.data.main.temp;
}

module.exports = { getClima }