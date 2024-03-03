const config = require("./config");
const axios = require("axios");

module.exports = {
    dateTime: () => {
        return new Promise(resolve => {
            axios.get(`${config.api}/date/`)
                .then(r => {
                    resolve(r.data);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    fakeMail: (method = "getNewMail", email = null) => {
        return new Promise(resolve => {
            let url = `${config.api}/email/`
            switch (method) {
                case "getMessages":
                    url = `${url}?method=${method}&email=${email}`
                    break;
                default:
                    url = `${url}?method=${method}`;
                    break;
            }
            axios.get(url)
                .then(r => {
                    if (method === "getNewMail") {
                        if (r.data["ایمیل شما👍"]) {
                            resolve(r.data["ایمیل شما👍"]["email"]);
                        } else {
                            resolve("");
                        }
                    } else {
                        resolve(r.data.results);
                    }
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    telegramProxies1: (channel = "ProxyMTProto") => {
        channel = channel.replace("@", "").replace("https://t.me/", "");
        if (channel === "") {
            channel = "ProxyMTProto"
        }
        return new Promise(resolve => {
            axios.get(`${config.api}/proxy/?channel=${channel}`)
                .then(r => {
                    resolve(r.data.proxies);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    zekr: () => {
        return new Promise(resolve => {
            axios.get(`${config.api}/zekr/`)
                .then(r => {
                    resolve(r.data.Result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    creditCard: ({bin, year, month, limit}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/CreditCard/?bin=${bin}&range=${limit}&year=${year}&month=${month}`)
                .then(r => {
                    resolve(r.data.Result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    ping: ({domainOrIP, port}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/ping/?port=${port}&server=${domainOrIP}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    googleTranslate1: ({from, to, text}) => {
        from = from ? from : "fa";
        to = to ? to : "en";
        text = text ? text.toString().trim() : "سلام دنیا!";
        text = encodeURI(text);
        return new Promise(resolve => {
            axios.get(`${config.api}/translate/?from=${from}&to=${to}&text=${text}`)
                .then(r => {
                    let result = text;
                    try {
                        result = r.data ? r.data.toString().trim() : text;
                    } catch (err) {
                    }
                    resolve(result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });

    },
    QRCode: ({text, size}) => {
        text = text ? text.toString() : "Text";
        size = size ? !isNaN(Number(size)) ? Number(size) : 12 : 12;
        if (size > 12) {
            size = 12;
        } else if (size < 1) {
            size = 1;
        }
        return new Promise(resolve => {
            axios.get(`${config.api}/QRcode/?data=${text}&size=${size}`,
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
    randomNumber: ({min, max}) => {
        min = min ? !isNaN(Number(min)) ? Number(min) : 1 : 1;
        max = max ? !isNaN(Number(max)) ? Number(max) : 100 : 100;
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    },
    randomString: (length = 10) => {
        length = length ? !isNaN(Number(length)) ? Number(length) : 10 : 10;
        length = Math.ceil(length);
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    },
    pythonHost: () => {
        return new Promise(resolve => {
            axios.get(`${config.apiV2}/host/`)
                .then(r => {
                    resolve(r.data.result ? r.data.result.answer ? r.data.result.answer : r.data : null);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    shorLink: ({url}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/short/?url=${url}`)
                .then(r => {
                    resolve(r.data.result ? r.data.result.short_url ? r.data.result.short_url : r.data : null);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    shorLink2: ({url}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/short-link/?url=${url}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    nationalCode: ({text}) => {
        text = text ? text : "";
        return new Promise(resolve => {
            return new Promise(resolve => {
                axios.get(`${config.api}/estelam/codemeli/?text=${text}`)
                    .then(r => {
                        resolve(r.data.result);
                    })
                    .catch(err => {
                        config.resolveError(resolve, err);
                    });
            });
        })
    },
    darooyab: ({search, url}) => {
        search = search ? search : "";
        url = url ? url : "";
        let furl = `${config.apiV3}/majid/darooyab/search?search=${search}`;
        if (url !== "") {
            furl = `${config.apiV3}/majid/darooyab/info?url=${url}`;
        }
        return new Promise(resolve => {
            axios.get(furl)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    googleSpellCorrection: ({text}) => {
        text = text ? text.toString() : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/spell?q=${text}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    googleTranslate2: ({to, text}) => {
        to = to ? to : "en";
        text = text ? text.toString().trim() : "سلام دنیا!";
        text = encodeURI(text);
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/translate?q=${text}&to=${to}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });

    },
    farsroid: ({appName}) => {
        appName = appName ? appName.toString().trim() : "سلام دنیا!";
        appName = encodeURI(appName);
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/farsroid?s=${appName}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });

    },
    imageMetadata: ({imageUrl}) => {
        imageUrl = imageUrl ? imageUrl : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/image/metadata?url=${imageUrl}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    wikipedia: ({search}) => {
        search = search ? search : "";
        search = encodeURI(search);
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/wikipedia?s=${search}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    linkPreview: ({link}) => {
        link = link ? link : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/link/preview?url=${link}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    webScraper: ({url}) => {
        url = url ? url : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/scraper?url=${url}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    webScraperPro: ({url}) => {
        url = url ? url : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/scraper/pro?url=${url}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    html2json: ({html}) => {
        html = html ? html : "<div>سلام دنیا!</div>";
        let params = new URLSearchParams();
        params.append('html', html);

        return new Promise(resolve => {
            axios.post(`${config.apiV3}/majid/tools/html2json`, html, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    weather: ({city}) => {
        city = city ? city.toString().trim() : "تهران";
        return new Promise(resolve => {
            axios.get(`${config.api}/weather/?city=${city}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    religiousTimes: ({method, search, cityID}) => {
        method = method ? method : "search";
        search = search ? search.toString().trim() : "تبریز";
        cityID = cityID ? cityID : "20_131";
        let url = `${config.api}/owghat/`;
        switch (method) {
            case "provinces":
                url = `${url}?q=show-list-provinces`;
                break;
            case "cities":
                url = `${url}?q=show-list-cities`;
                break;
            case "cityID":
                url = `${url}?q=${cityID}`;
                break;
            default:
                url = `${url}?q=search&city=${search}`
                break;
        }
        return new Promise(resolve => {
            axios.get(url)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    }
}