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
    }
}