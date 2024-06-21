const config = require("./config");
const axios = require("axios");

module.exports = {
    irna: (license) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/irna/?license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    football: ({method, license}) => {
        method = method ? method : "news";
        let url = `${config.api}/fotbali/`
        switch (method) {
            case "live":
                url = `${url}?get=LiveResults`;
                break;
            default:
                url = `${url}?get=News`
                break;
        }
        url = `${url}&license=${license}`;

        return new Promise(resolve => {
            axios.get(url)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })

    },
    varzesh3Video: ({method, url, license}) => {
        method = method ? method : "main";
        let furl = `${config.apiV3}/majid/varzesh3/video`;
        switch (method) {
            case "category":
                furl = `${furl}/category?url=${url}&license=${license}`;
                break;
            case "details":
                furl = `${furl}/details?url=${url}&license=${license}`;
                break;
            default:
                furl = `${furl}/main?license=${license}`;
                break;
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
    },
    eghtesadNews: ({method, url, license}) => {
        method = method ? method : "main";
        let furl = `${config.apiV3}/majid/eghtesadnews`;
        if (method === "details") {
            furl = `${furl}/details?url=${url}&license=${license}`;
        } else {
            furl = `${furl}/main?license=${license}`;
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
    },
    akharinKhabar: ({method = "categories", category = "https://akharinkhabar.ir/", url = "", license = ""}) => {
        let furl = `${config.apiV3}/majid/akharinkhabar?action=${method}`;
        switch (method) {
            case "news":
                furl = `${furl}&category=${category}`
                break
            case "info":
                furl = `${furl}&url=${url}`
                break
        }
        furl = `${furl}&license=${license}`;

        return new Promise(resolve => {
            axios.get(furl)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    gadgetNews: ({method = "home", url = "", search = "", license = ""}) => {
        let furl = `${config.apiV3}/gadgetnews`;
        switch (method) {
            case "latest":
                furl = `${furl}/posts/latest?license=${license}`
                break;
            case "search":
                furl = `${furl}/search?s=${search}&license=${license}`;
                break;
            case "info":
                furl = `${furl}/info?url=${url}&license=${license}`;
                break;
            default :
                furl = `${furl}?license=${license}`;
                break;
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
    },
    akharinKhabarApp: ({method = "latest", page = 1, catId = -1, newsId = 0, license = ""}) => {
        page = page ? !isNaN(Number(page.toString())) ? Number(page) : 1 : 1;
        catId = catId ? !isNaN(Number(catId.toString())) ? Number(catId) : -1 : -1;

        let furl = `${config.apiV3}/majid/akharinkhabar/app?action=${method}`;

        switch (method) {
            case "category":
                furl = `${furl}&catid=${catId}&page=${page}`;
                break;
            case "details":
                furl = `${furl}&newsid=${newsId}`;
                break;
            case "latest":
                furl = `${furl}&page=${page}`;
                break;
            default:
                furl = `${furl}&page=${page}`;
                break;
        }

        furl = `${furl}&license=${license}`;

        return new Promise(resolve => {
            axios.get(furl)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    zoomg: ({method = "home", page = 1, search = "", link = "", license = ""}) => {
        let furl = `${config.apiV3}/majid/zoomg`;
        switch (method) {
            case "home":
                furl = `${furl}/home?license=${license}`;
                break;
            case "news":
                furl = `${furl}/news?page=${page}&license=${license}`;
                break;
            case "search":
                furl = `${furl}/search?page=${page}&s=${search}&license=${license}`;
                break;
            case "info":
                furl = `${furl}/info?url=${url}&license=${license}`;
                break;

            default:
                furl = `${furl}/home?license=${license}`;
                break;
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
    },

    cryptoNews: ({method = "list", page = 1, link = "", license = ""}) => {
        let furl = `${config.apiV3}/majid/crypto/news/list?page=${page}&license=${license}`;
        if (method === "info") {
            furl = `${config.apiV3}/majid/crypto/news/info?link=${link}&license=${license}`;
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
    },
    football360: ({method = "news", page = 1, id = "", license = ""}) => {
        let furl = `${config.apiV3}//majid/football360/news`;
        if (method === "info") {
            furl = `${furl}/info?id=${id}`;
        } else {
            furl = `${furl}/list?page=${page}`;
        }
        furl = `${furl}&license=${license}`;
        return new Promise(resolve => {
            axios.get(furl)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    bartarinha: ({method = "latest", page = 1, search = "", record_id, license = ""}) => {
        let furl = `${config.apiV3}/majid/bartarinha?action=${method}`;

        switch (method) {
            case "latest":
                furl = `${furl}&page=${page}`;
                break;
            case "search":
                furl = `${furl}&page=${page}&s=${search}`;
                break;
            case "info":
                furl = `${furl}&record_id=${record_id}`;
                break;

            default:
                furl = `${furl}&page=${page}`;
                break;
        }

        furl = `${furl}&license=${license}`;

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