const axios = require("axios");
const config = require("./config");

module.exports = {
    cryptoCurrency: () => {
        return new Promise(resolve => {
            axios.get(`${config.api}/arzDigital/`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    exchangeRate: () => {
        return new Promise(resolve => {
            axios.get(`${config.api}/exchange-rate/`)
                .then(r => {
                    resolve(r.data.Results);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    khodro: ({search}) => {
        search = search ? search.toString().trim() : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/car/price?name=${encodeURI(search)}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });

    },
    nobitex: ({}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/nobitex/`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    }
}