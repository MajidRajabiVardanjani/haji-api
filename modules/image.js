const axios = require("axios");
const config = require("./config");
const {image} = require("../index");
module.exports = {
    logo2: (name = "HA", license = "") => {
        name = name.substring(0, 2);
        return new Promise(resolve => {
            axios.get(`${config.api}/logo/?type=url&name=${name}&license=${license}`)
                .then(r => {
                    resolve(r.data.results);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    wallpaper: ({search, page, license = ""}) => {
        search = search ? search.toString().trim() : "";
        page = page ? !isNaN(Number(page)) ? Number(page) : 1 : 1;
        name = name.substring(0, 2);
        return new Promise(resolve => {
            axios.get(`${config.api}/wallpaper/?search=${encodeURI(search)}&number=${page}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    motivationalPhoto: (license = "") => {
        return new Promise(resolve => {
            axios.get(`${config.api}/photoangizeshi/?license=${license}`, {
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
    searchImage: ({search, license = ""}) => {
        search = search ? search.toString().trim() : "عکس نوشته";
        search = encodeURI(search);
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/image/search?q=${search}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });

    },
    photoToCartoon: ({url, license}) => {
        url = url ? url : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/ai/image/cartoon?url=${url}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    unsplash: ({search, license}) => {
        search = search ? search : "";
        search = encodeURI(search);
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/unsplash?text=${search}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    photoToAnime: ({url, license}) => {
        url = url ? url : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/ai/photo2anime?image=${url}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    pinterest: ({search, license}) => {
        search = search ? search : "";
        search = encodeURI(search);
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/social/pinterest/search?s=${search}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    cropImage: ({imageUrl, width, height, license}) => {
        width = width ? width.toString().trim() : "";
        height = height ? height.toString().trim() : "";
        imageUrl = imageUrl ? imageUrl : "";

        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/image/crop?url=${imageUrl}&width=${width}&height=${height}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    ocr: ({imageUrl, license}) => {
        imageUrl = imageUrl ? imageUrl : "";
        return new Promise(resolve => {
            if (imageUrl !== "") {
                axios.get(`${config.apiV4}/api/tools/ocr/?url=${imageUrl}&license=${license}`)
                    .then(r => {
                        let text = r.data ? r.data.result ? r.data.result.text ? r.data.result.text.toString().trim() : "" : "" : "";
                        resolve(text);
                    })
                    .catch(err => {
                        config.resolveError(resolve, err);
                    });
            } else {
                resolve({error: "imageUrl نامعتبر است!"});
            }
        })
    },
    freepikSearch: ({search = "", license = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/freepik/search?s=${search}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    extractTextFromImage: ({imageUrl = "", lang = "fa", license = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/extract/image/text?lang=${lang}&url=${imageUrl}&license=${license}`)
                .then(r => {
                    resolve(r.data.result)
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    }
}