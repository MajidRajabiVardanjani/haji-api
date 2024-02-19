const axios = require("axios");
const config = require("./config");
module.exports = {
    logo2: (name = "HA") => {
        name = name.substring(0, 2);
        return new Promise(resolve => {
            axios.get(`${config.api}/logo/?type=url&name=${name}`)
                .then(r => {
                    resolve(r.data.results);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    wallpaper: ({search, page}) => {
        search = search ? search.toString().trim() : "";
        page = page ? !isNaN(Number(page)) ? Number(page) : 1 : 1;
        name = name.substring(0, 2);
        return new Promise(resolve => {
            axios.get(`${config.api}/wallpaper/?search=${encodeURI(search)}&number=${page}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    motivationalPhoto: () => {
        return new Promise(resolve => {
            axios.get(`${config.api}/photoangizeshi/`, {
                responseType: 'arraybuffer'
            })
                .then(r => {
                    resolve(config.arrayBufferToBase64(r.data));
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    searchImage: ({search}) => {
        search = search ? search.toString().trim() : "عکس نوشته";
        search = encodeURI(search);
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/image/search?q=${search}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });

    },
    photoToCartoon: ({url}) => {
        url = url ? url : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/ai/image/cartoon?url=${url}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    unsplash: ({search}) => {
        search = search ? search : "";
        search = encodeURI(search);
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/unsplash?text=${search}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    photoToAnime: ({url}) => {
        url = url ? url : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/ai/photo2anime?image=${url}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    pinterest: ({search}) => {
        search = search ? search : "";
        search = encodeURI(search);
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/social/pinterest/search?s=${search}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    cropImage: ({imageUrl, width, height}) => {
        width = width ? width.toString().trim() : "";
        height = height ? height.toString().trim() : "";
        imageUrl = imageUrl ? imageUrl : "";

        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/image/crop?url=${imageUrl}&width=${width}&height=${height}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    }
}