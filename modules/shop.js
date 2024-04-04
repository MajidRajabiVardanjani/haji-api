const config = require("./config");
const axios = require("axios");

module.exports = {
    digikalaSearch: ({search, license}) => {
        search = search ? search.toString().trim() : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/dk/search?search=${encodeURI(search)}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },

    digikalaInfo: ({productId, license}) => {
        productId = productId ? productId.toString().trim() : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/dk/product?id=${productId}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },

    torob: ({search, license}) => {
        search = search ? search.toString().trim() : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/torob/search?s=${encodeURI(search)}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
}