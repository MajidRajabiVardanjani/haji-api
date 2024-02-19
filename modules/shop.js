const config = require("./config");
const axios = require("axios");

module.exports = {
    digikalaSearch: ({search}) => {
        search = search ? search.toString().trim() : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/dk/search?search=${encodeURI(search)}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },

    digikalaInfo: ({productId}) => {
        productId = productId ? productId.toString().trim() : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/dk/product?id=${productId}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },

    torob: ({search}) => {
        search = search ? search.toString().trim() : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/torob/search?s=${encodeURI(search)}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
}