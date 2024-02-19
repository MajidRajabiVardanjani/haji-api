const axios = require("axios");
const config = require("./config");
const {resolveError} = require("./config");

module.exports = {
    user: ({username}) => {
        username = username ? username.toString().trim() : "";

        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/telegram/user?username=${username}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    resolveError(resolve, err);
                });
        });
    },
    channel: ({username}) => {
        username = username ? username.toString().trim() : "";

        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/telegram/channel?username=${username}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    resolveError(resolve, err);
                });
        });
    },

    proxies: ({username}) => {
        username = username ? username.toString().trim() : "";
        let furl = `${config.apiV3}/majid/telegram/proxies`;
        if (username !== "") {
            furl = `${furl}?id=${username}`;
        }
        return new Promise(resolve => {
            axios.get(furl)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    resolveError(resolve, err);
                });
        });
    },
    v2ray: ({username, configName}) => {
        username = username ? username.toString().trim() : "";
        configName = configName ? configName.toString().trim() : "https://t.me/HajiApi";

        let furl = `${config.apiV3}/majid/telegram/v2ray?name=${configName}`;
        if (username !== "") {
            furl = `${furl}&id=${username}`;
        }
        return new Promise(resolve => {
            axios.get(furl)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    resolveError(resolve, err);
                });
        });
    }
}