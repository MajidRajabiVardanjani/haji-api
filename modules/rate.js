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
    },
    nobitex2: ({currency = "rls", license = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.apiV4}/api/tools/nobitex/?currency=${currency}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },

    bitpin: ({search = "", license = ""}) => {
        search = search.replace(/ /g, "").toString().trim().toLowerCase();
        let furl = `${config.api}/bitpin/`;
        if (search === "") {
            furl = `${furl}?license=${license}`;
        } else {
            furl = `${furl}?search=${search}&license=${license}`;
        }
        return new Promise(resolve => {
            axios.get(furl)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    bonbast: ({license = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/price/bonbast?license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    }
}