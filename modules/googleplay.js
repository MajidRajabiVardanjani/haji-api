const config = require("./config");
const axios = require("axios");

module.exports = {
    googlePlayDownload: ({url, license = ""}) => {
        url = url ? url : "";
        return new Promise(resolve => {
            if (url.includes("play.google.com")) {
                axios.get(`${config.api}/googleplay/?url=${url}&license=${license}`)
                    .then(r => {
                        resolve(r.data.result);
                    })
                    .catch(err => {
                        config.resolveError(resolve, err);
                    });
            } else {
                resolve({error: "پارامتر url نامعتبر است!"});
            }
        });
    },
    googlePlaySearch: ({appName = "", license = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/googleplay/search?name=${appName}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    }
}