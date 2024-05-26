const config = require("./config");
const axios = require("axios");
const {defaults} = require("axios");

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
    },

    torobApp: ({method = "categories", page = 1, categoryId = 94, search = "", id = "", license = ""}) => {
        let furl = `https://api3.haji-api.ir/majid/torob/app`;

        switch (method) {
            case "categories":
                furl = `${furl}/categories?license=${license}`;
                break;
            case "category":
                furl = `${furl}/category?id=${categoryId}&page=${page}&license=${license}`;
                break;
            case "search":
                furl = `${furl}/search?s=${search}&page=${page}&license=${license}`;
                break;
            case "info":
                furl = `${furl}/info?id=${id}&license=${license}`;
                break;

            default:
                furl = `${furl}/categories?license=${license}`;
                break;
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
    }
}