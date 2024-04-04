const config = require("./config");
const axios = require("axios");


module.exports = {
    searchCafeBazar: (appName = "برنامه", license = "") => {
        return new Promise(resolve => {
            axios.get(`${config.api}/bazar/?type=search&q=${encodeURI(appName)}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    infoCafeBazar: (packageName = "", license = "") => {
        return new Promise(resolve => {
            if (packageName.includes(".")) {
                axios.get(`${config.api}/bazar/?type=getinfo&q=${packageName}&license=${license}`)
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
    downloadCafeBazar: (packageName = "", license = "") => {
        return new Promise(resolve => {
            if (packageName.includes(".")) {
                axios.get(`${config.api}/bazar/download.php?packagename=${packageName}&license=${license}`)
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