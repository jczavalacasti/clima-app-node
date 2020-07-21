const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f8616935b21b0ea663b235c3142af576`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}