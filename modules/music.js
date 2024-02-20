const config = require("./config");
const axios = require("axios");

module.exports = {
    melobit: ({method, search, id}) => {
        method = method ? method : "search";
        search = search ? search.toString().trim() : "آهنگ";
        id = id ? id : "";
        return new Promise(resolve => {
            if (["search", "info", "week", "day", "trend", "new"].includes(method)) {
                if (method === "info" && id !== "") {
                    let url = `${config.api}/music/?q=${method}`;
                    switch (method) {
                        case "search":
                            url = url + `&t=${encodeURI(search)}`;
                            break;
                        case "info":
                            url = url + `&t=${id}`;
                            break;
                    }
                    axios.get(url)
                        .then(r => {
                            switch (method) {
                                case "info":
                                    let result = r.data;
                                    try {
                                        delete result.ok;
                                        delete result.channel;
                                    } catch (err) {
                                    }
                                    resolve(result);
                                    break;
                                default:
                                    const {results, total} = r.data;
                                    resolve({results, total});
                                    break;
                            }
                        })
                        .catch(err => {
                            config.resolveError(resolve, err);
                        });
                } else {
                    resolve({error: "پارامتر id نامعتبر است!"});
                }
            } else {
                resolve({error: "پارامتر method نامعتبر است!"});
            }

        });
    }, soundCloudDownload: ({url}) => {
        url = url ? url : "";
        return new Promise(resolve => {
            if (url.includes("soundcloud.com")) {
                axios.get(`${config.api}/SoundCloud/?url=${url}`)
                    .then(r => {
                        resolve(r.data.result);
                    })
                    .catch(err => {
                        config.resolveError(resolve, err);
                    });
            } else {
                resolve({
                    error: "پارامتر url نامعتبر است!"
                });
            }
        })
    }, shazam: ({url}) => {
        url = url ? url : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/shazam?url=${url}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    musicVIP: ({search}) => {
        search = search ? search.toString().trim() : "آهنگ";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/music/vip?s=${encodeURI(search)}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    spotify: ({method, search, url}) => {
        url = url ? url : "";
        search = search ? search.toString().trim() : "آهنگ";
        method = method ? method : "search";

        let furl = `${config.apiV3}/majid/spotify`;

        if (method === "download") {
            furl = `${furl}/download?url=${url}`
        } else {
            furl = `${furl}/search?s=${encodeURI(search)}`;
        }

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