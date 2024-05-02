const axios = require("axios");
const config = require("./config");

module.exports = {
    cryptoCurrency: (license = "") => {
        return new Promise(resolve => {
            axios.get(`${config.api}/arzDigital/?license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    exchangeRate: (license = "") => {
        return new Promise(resolve => {
            axios.get(`${config.api}/exchange-rate/?license=${license}`)
                .then(r => {
                    resolve(r.data.Results);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    khodro: ({search, license}) => {
        search = search ? search.toString().trim() : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/car/price?name=${encodeURI(search)}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });

    },
    nobitex: ({license = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/nobitex/?license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    mobile: ({model = "", license = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/price/mobile?model=${model}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    }
}