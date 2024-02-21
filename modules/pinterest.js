const config = require("./config");
const axios = require("axios");

module.exports = {
    pinterestDownloadVideo: ({url}) => {
        url = url ? url : "";
        return new Promise(resolve => {
            if (url.includes("pin.it") || url.includes("pinterest.com")) {
                axios.get(`${config.apiV3}/majid/social/pinterest/download/video?url=${url}`)
                    .then(r => {
                        resolve(r.data.result);
                    })
                    .catch(err => {
                        config.resolveError(resolve, err);
                    });
            } else {
                resolve({error: "پارامتر url نامعتبر است!"});
            }
        })
    }
}