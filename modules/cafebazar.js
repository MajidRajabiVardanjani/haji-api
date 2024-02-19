const config = require("./config");
const axios = require("axios");


module.exports = {
    searchCafeBazar: (appName = "برنامه") => {
        return new Promise(resolve => {
            axios.get(`${config.api}/bazar/?type=search&q=${encodeURI(appName)}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    infoCafeBazar: (packageName = "") => {
        return new Promise(resolve => {
            if (packageName.includes(".")) {
                axios.get(`${config.api}/bazar/?type=getinfo&q=${packageName}`)
                    .then(r => {
                        resolve(r.data.result);
                    })
                    .catch(err => {
                        config.resolveError(resolve, err);
                    });
            } else {
                resolve({error: "پارامتر نام پکیج اشتباه است!"})
            }

        });
    },
    downloadCafeBazar: (packageName = "") => {
        return new Promise(resolve => {
            if (packageName.includes(".")) {
                axios.get(`${config.api}/bazar/download.php?packagename=${packageName}`)
                    .then(r => {
                        resolve(r.data.data.downloadLink);
                    })
                    .catch(err => {
                        config.resolveError(resolve, err);
                    });
            } else {
                resolve({error: "پارامتر نام پکیج اشتباه است!"})
            }

        });
    },
}