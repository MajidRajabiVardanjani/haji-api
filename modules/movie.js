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
    },
    imdb: ({method = "search", search = "", id = "", license = ""}) => {
        let furl = `${config.api}/imdb/`
        if (method === "search") {
            furl = `${furl}?q=search&name=${search}`
        } else {
            furl = `${furl}?q=film&id=${id}`
        }
        furl = `${furl}&license=${license}`;
        return new Promise(resolve => {
            axios.get(furl)
                .then(r => {
                    let result = r.data.result ? r.data.result : r.data.Result;
                    resolve(result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })

    },
    similarMovie: ({movieName = "", license = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/Similar-movie/?name=${movieName}&license=${license}`)
                .then(r => {
                    resolve(r.data.Results);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    hexdl: ({method = "search", search = "", url = "", license = ""}) => {
        let furl = `${config.apiV3}/majid/hexdl/search?s=${search}&license=${license}`;
        if (method === "download") {
            furl = `${config.apiV3}/majid/hexdl/download?url=${url}&license=${license}`;
        }

        return new Promise(resolve => {
            axios.get(furl)
                .then(r => {
                    resolve(r.data.result)
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    subtitle: ({method = "search", search = "", url = "", license = ""}) => {
        let furl = `${config.apiV3}/majid/movie/subtitle`;
        if (method === "search") {
            furl = `${furl}/search?s=${search}`
        } else {
            furl = `${furl}/download?url=${url}`
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