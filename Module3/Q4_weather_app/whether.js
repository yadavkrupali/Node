const axios = require("axios");

const weather = async (lat, lng, callback) => {
    // const lat = 21.1702;
    // const log = 72.8311;

    const API = "5111d0e2833d3f447d463c52f090bc6f";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API}&units=metric`;
    axios.get(url).then((result) => {
        const data = result.data.main;
        data.city = result.data.name;
        callback(data);
    });
};
// weather();
module.exports = weather;
