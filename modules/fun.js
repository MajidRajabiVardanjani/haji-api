const config = require("./config");
const axios = require("axios");

module.exports = {
    motivational: () => {
        return new Promise(resolve => {
            axios.get(`${config.api}/angizeshi/`)
                .then(r => {
                    resolve(r.data);
                })
                .catch(err => {
                    resolve("خطایی رخ داده است!");
                });
        });
    },
    famousBook: () => {
        return new Promise(resolve => {
            axios.get(`${config.api}/ketab/`)
                .then(r => {
                    resolve(r.data);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    photography: () => {
        return new Promise(resolve => {
            axios.get(`${config.api}/photography/`)
                .then(r => {
                    resolve(r.data);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    heavy: () => {
        return new Promise(resolve => {
            axios.get(`${config.api}/gang/`)
                .then(r => {
                    resolve(r.data);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    deghatKardin: () => {
        return new Promise(resolve => {
            axios.get(`${config.api}/deghat/`)
                .then(r => {
                    resolve(r.data);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    font: (text = "HajiAPI", design = false) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/font/?design=${design.toString()}&text=${text}`)
                .then(r => {
                    resolve(r.data);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    sokhangoo: (question = "سلام") => {
        return new Promise(resolve => {
            axios.get(`${config.api}/sokhan/?text=${question}`)
                .then(r => {
                    resolve(r.data);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    bmi: ({weight, height}) => {
        weight = weight ? !isNaN(Number(weight)) ? Number(weight) : 75 : 75;
        height = height ? !isNaN(Number(height)) ? Number(height) : 180 : 180;

        return new Promise(resolve => {
            axios.get(`${config.api}/estelam/bmi/?weight=$${weight}&height=${height}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    birthdate: ({y, m, d}) => {
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/birthdate?year=${y}&month=${m}&day=${d}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    fal: () => {
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/fal/hafez`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    nameDictionary: ({name}) => {
        name = name ? name.toString().trim() : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/dictionary/names?name=${encodeURI(name)}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    danestani: () => {
        return new Promise(resolve => {
            axios.get(`${config.api}/danestani/`)
                .then(r => {
                    resolve(r.data);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    falPhoto: () => {
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/fal/hafez/photo`,
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
    joke: () => {
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/jok/random`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    cooking: ({method, search, url}) => {
        method = method ? method : "search";
        search = search ? search.toString().trim() : "";
        url = url ? url : "";
        let furl = `${config.apiV3}/majid/fun/cooking`;

        if (method === "info") {
            furl = `${furl}/info?url=${url}`;
        } else {
            furl = `${furl}/search?s=${encodeURI(search)}`;
        }

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