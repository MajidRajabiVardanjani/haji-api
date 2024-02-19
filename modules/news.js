const config = require("./config");
const axios = require("axios");

module.exports = {
    irna: () => {
        return new Promise(resolve => {
            axios.get(`${config.api}/irna/`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    football: ({method}) => {
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
    varzesh3Video: ({method, url}) => {
        method = method ? method : "main";
        let furl = `${config.apiV3}/majid/varzesh3/video`;
        switch (method) {
            case "category":
                furl = `${furl}/category?url=${url}`;
                break;
            case "details":
                furl = `${furl}/details?url=${url}`;
                break;
            default:
                furl = `${furl}/main`;
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
    eghtesadNews: ({method, url}) => {
        method = method ? method : "main";
        let furl = `${config.apiV3}/majid/eghtesadnews`;
        if (method === "details") {
            furl = `${furl}/details?url=${url}`;
        } else {
            furl = `${furl}/main`;
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