const axios = require("axios");
const config = require("./config");

module.exports = {
    getProxies: ({protocol = "socks5", timeout = 5000, license = ""}) => {
        return new Promise(resolve => {
            if (["http", "socks4", "socks5"].includes(protocol)) {
                axios.get(`${config.apiV3}/majid/proxy/list?protocol=${protocol}&timeout=${timeout}&license=${license}`)
                    .then(r => {
                        resolve(r.data.result)
                    })
                    .catch(err => {
                        config.resolveError(resolve, err);
                    });
            } else {
                resolve({error: "پارامتر protocol نامعتبر است!"})
            }

        })
    }
}