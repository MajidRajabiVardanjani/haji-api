const config = require("./config");
const axios = require("axios");
module.exports = {
    rubinoDownloader: ({url = "", license = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/social/rubino/download?url=${url}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },

    tiktok: ({username = "", url = "", method = "profile", license = ""}) => {
        let furl = `${config.apiV3}/majid/tiktok`;

        if (method === "profile") {
            furl = `${furl}/profile?username=${username}`;
        } else {
            furl = `${furl}/download?url=${url}`;
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