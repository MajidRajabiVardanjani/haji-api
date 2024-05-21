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

    digikalaApp: ({method = "home", category_id = 1, page = 1, id = 1, search = "", license = ""}) => {

        let furl = `${config.apiV3}/majid/dk/app?action=${method}`;
        switch (method) {
            case "category":
                furl = `${furl}&category_id=${category_id}&page=${page}`;
                break;
            case "product":
                furl = `${furl}&id=${id}`;
                break;
            case "search":
                furl = `${furl}&s=${search}&page=${page}`;
                break;
        }

        furl = `${furl}&license=${license}`;

        return new Promise(resolve => {
            axios.get(furl)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    }
}