const config = require("./config");
const axios = require("axios");

module.exports = {
    motivational: (license = "") => {
        return new Promise(resolve => {
            axios.get(`${config.api}/angizeshi/?license=${license}`)
                .then(r => {
                    resolve(r.data);
                })
                .catch(err => {
                    resolve("خطایی رخ داده است!");
                });
        });
    },
    famousBook: (license = "") => {
        return new Promise(resolve => {
            axios.get(`${config.api}/ketab/?license=${license}`)
                .then(r => {
                    resolve(r.data);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    photography: (license = "") => {
        return new Promise(resolve => {
            axios.get(`${config.api}/photography/?license=${license}`)
                .then(r => {
                    resolve(r.data);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    heavy: (license = "") => {
        return new Promise(resolve => {
            axios.get(`${config.api}/gang/?license=${license}`)
                .then(r => {
                    resolve(r.data);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    deghatKardin: (license = "") => {
        return new Promise(resolve => {
            axios.get(`${config.api}/deghat/?license=${license}`)
                .then(r => {
                    resolve(r.data);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    font: (text = "HajiAPI", design = false, license = "") => {
        return new Promise(resolve => {
            axios.get(`${config.api}/font/?design=${design.toString()}&text=${text}&license=${license}`)
                .then(r => {
                    resolve(r.data);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    sokhangoo: (question = "سلام", license = "") => {
        return new Promise(resolve => {
            axios.get(`${config.api}/sokhan/?text=${question}&license=${license}`)
                .then(r => {
                    resolve(r.data);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    bmi: ({weight, height, license = ""}) => {
        weight = weight ? !isNaN(Number(weight)) ? Number(weight) : 75 : 75;
        height = height ? !isNaN(Number(height)) ? Number(height) : 180 : 180;

        return new Promise(resolve => {
            axios.get(`${config.api}/estelam/bmi/?weight=$${weight}&height=${height}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    birthdate: ({y, m, d, license = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/birthdate?year=${y}&month=${m}&day=${d}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    fal: (license = "") => {
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/fal/hafez?license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    nameDictionary: ({name, license = ""}) => {
        name = name ? name.toString().trim() : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/dictionary/names?name=${encodeURI(name)}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    danestani: (license = "") => {
        return new Promise(resolve => {
            axios.get(`${config.api}/danestani/?license=${license}`)
                .then(r => {
                    resolve(r.data);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    falPhoto: (license = "") => {
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/fal/hafez/photo?license=${license}`,
                {
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
    joke: (license = "") => {
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/jok/random?license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    cooking: ({method, search, url, license = ""}) => {
        method = method ? method : "search";
        search = search ? search.toString().trim() : "";
        url = url ? url : "";
        let furl = `${config.apiV3}/majid/fun/cooking`;

        if (method === "info") {
            furl = `${furl}/info?url=${url}`;
        } else {
            furl = `${furl}/search?s=${encodeURI(search)}`;
        }
        furl = `${furl}&license=${license}`
        return new Promise(resolve => {
            if (url.includes("https://rezim.ir")) {
                axios.get(furl)
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