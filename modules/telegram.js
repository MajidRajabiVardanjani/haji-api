const axios = require("axios");
const config = require("./config");
const {resolveError} = require("./config");

module.exports = {
    user: ({username, license}) => {
        username = username ? username.toString().trim() : "";

        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/telegram/user?username=${username}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    resolveError(resolve, err);
                });
        });
    },
    channel: ({username, license}) => {
        username = username ? username.toString().trim() : "";

        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/telegram/channel?username=${username}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    resolveError(resolve, err);
                });
        });
    },

    proxies: ({username, license}) => {
        username = username ? username.toString().trim() : "";
        let furl = `${config.apiV3}/majid/telegram/proxies?license=${license}`;
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
    },
    v2ray: ({username, configName, license}) => {
        username = username ? username.toString().trim() : "";
        configName = configName ? configName.toString().trim() : "https://t.me/HajiApi";

        let furl = `${config.apiV3}/majid/telegram/v2ray?name=${configName}&license=${license}`;
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
    },
    channelPosts: ({id, license}) => {
        id = id ? id.toString().trim() : "";

        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/telegram/channel/posts?id=${id}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    resolveError(resolve, err);
                });
        });
    }
}