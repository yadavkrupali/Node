const axios = require("axios");
const whether = require("./whether");

const geocode = (city, callback) => {
    // const city = "surat,gujarat";
    // console.log(city, "get lat long start");
    axios
        .get(
            `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=725b1290c1344ab4b72341d421e6c994`
        )
        .then((result) => {
            const data = result.data.results[0].geometry;
            // console.log(city, "get lat long end");
            whether(data.lat, data.lng, (data) => {
                callback(data);
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

// geocode();

module.exports = geocode;
