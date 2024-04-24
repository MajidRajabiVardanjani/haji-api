const config = require("./config");
const axios = require("axios");

module.exports = {
    irna: (license) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/irna/?license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    football: ({method, license}) => {
        method = method ? method : "news";
        let url = `${config.api}/fotbali/`
        switch (method) {
            case "live":
                url = `${url}?get=LiveResults`;
                break;
            default:
                url = `${url}?get=News`
                break;
        }
        url = `${url}&license=${license}`;

        return new Promise(resolve => {
            axios.get(url)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })

    },
    varzesh3Video: ({method, url, license}) => {
        method = method ? method : "main";
        let furl = `${config.apiV3}/majid/varzesh3/video`;
        switch (method) {
            case "category":
                furl = `${furl}/category?url=${url}&license=${license}`;
                break;
            case "details":
                furl = `${furl}/details?url=${url}&license=${license}`;
                break;
            default:
                furl = `${furl}/main?license=${license}`;
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
    },
    eghtesadNews: ({method, url, license}) => {
        method = method ? method : "main";
        let furl = `${config.apiV3}/majid/eghtesadnews`;
        if (method === "details") {
            furl = `${furl}/details?url=${url}&license=${license}`;
        } else {
            furl = `${furl}/main?license=${license}`;
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
    akharinKhabar: ({method = "categories", category = "https://akharinkhabar.ir/", url = "", license = ""}) => {
        let furl = `${config.apiV3}/majid/akharinkhabar?action=${method}`;
        switch (method) {
            case "news":
                furl = `${furl}&category=${category}`
                break
            case "info":
                furl = `${furl}&url=${url}`
                break
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
    gadgetNews: ({method = "home", url = "", search = "", license = ""}) => {
        let furl = `${config.apiV3}/gadgetnews`;
        switch (method) {
            case "latest":
                furl = `${furl}/posts/latest?license=${license}`
                break;
            case "search":
                furl = `${furl}/search?s=${search}&license=${license}`;
                break;
            case "info":
                furl = `${furl}/info?url=${url}&license=${license}`;
                break;
            default :
                furl = `${furl}?license=${license}`;
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