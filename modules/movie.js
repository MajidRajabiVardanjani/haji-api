const config = require("./config");
const axios = require("axios");

module.exports = {
    moboMoviesSearch: ({search, license}) => {
        search = search ? search.toString() : "فیلم";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/movie/search?search=${encodeURI(search)}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    moboMoviesDownload: ({moboUrl, license}) => {
        moboUrl = moboUrl ? moboUrl : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/movie/download?url=${moboUrl}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    }
}