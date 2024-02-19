const config = require("./config");
const axios = require("axios");

module.exports = {
    googlePlayDownload: ({url}) => {
        url = url ? url : "";
        return new Promise(resolve => {
            if (url.includes("play.google.com")) {
                axios.get(`${config.api}/googleplay/?url=${url}`)
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
    }
}