const config = require("./config");
const axios = require("axios");

module.exports = {
    dateTime: (license) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/date/?license=${license}`)
                .then(r => {
                    resolve(r.data);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    }, fakeMail: (method = "getNewMail", email = null, license) => {
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
            url = `${url}&license=${license}`
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
    }, telegramProxies1: (channel = "ProxyMTProto", license = "") => {
        channel = channel.replace("@", "").replace("https://t.me/", "");
        if (channel === "") {
            channel = "ProxyMTProto"
        }
        return new Promise(resolve => {
            axios.get(`${config.api}/proxy/?channel=${channel}&license=${license}`)
                .then(r => {
                    resolve(r.data.proxies);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    }, zekr: (license) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/zekr/?license=${license}`)
                .then(r => {
                    resolve(r.data.Result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    }, creditCard: ({bin, year, month, limit, license}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/CreditCard/?bin=${bin}&range=${limit}&year=${year}&month=${month}&license=${license}`)
                .then(r => {
                    resolve(r.data.Result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    }, ping: ({domainOrIP, port, license}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/ping/?port=${port}&server=${domainOrIP}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    }, googleTranslate1: ({from, to, text, license}) => {
        from = from ? from : "fa";
        to = to ? to : "en";
        text = text ? text.toString().trim() : "سلام دنیا!";
        text = encodeURI(text);
        return new Promise(resolve => {
            axios.get(`${config.api}/translate/?from=${from}&to=${to}&text=${text}&license=${license}`)
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

    }, QRCode: ({text, size, license}) => {
        text = text ? text.toString() : "Text";
        size = size ? !isNaN(Number(size)) ? Number(size) : 12 : 12;
        if (size > 12) {
            size = 12;
        } else if (size < 1) {
            size = 1;
        }
        return new Promise(resolve => {
            axios.get(`${config.api}/QRcode/?data=${text}&size=${size}&license=${license}`, {
                responseType: 'arraybuffer'
            })
                .then(r => {
                    resolve(config.arrayBufferToBase64(r.data));
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    }, randomNumber: ({min, max}) => {
        min = min ? !isNaN(Number(min)) ? Number(min) : 1 : 1;
        max = max ? !isNaN(Number(max)) ? Number(max) : 100 : 100;
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }, randomString: (length = 10) => {
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
    }, pythonHost: (license) => {
        return new Promise(resolve => {
            axios.get(`${config.apiV2}/host/?license=${license}`)
                .then(r => {
                    resolve(r.data.result ? r.data.result.answer ? r.data.result.answer : r.data : null);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    }, shorLink: ({url, license}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/short/?url=${url}&license=${license}`)
                .then(r => {
                    resolve(r.data.result ? r.data.result.short_url ? r.data.result.short_url : r.data : null);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    }, shorLink2: ({url, license}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/short-link/?url=${url}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    }, nationalCode: ({text, license}) => {
        text = text ? text : "";
        return new Promise(resolve => {
            return new Promise(resolve => {
                axios.get(`${config.api}/estelam/codemeli/?text=${text}&license=${license}`)
                    .then(r => {
                        resolve(r.data.result);
                    })
                    .catch(err => {
                        config.resolveError(resolve, err);
                    });
            });
        })
    }, darooyab: ({search, url, license}) => {
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
    }, googleSpellCorrection: ({text, license}) => {
        text = text ? text.toString() : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/spell?q=${text}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    }, googleTranslate2: ({to, text, license}) => {
        to = to ? to : "en";
        text = text ? text.toString().trim() : "سلام دنیا!";
        text = encodeURI(text);
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/translate?q=${text}&to=${to}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });

    }, farsroid: ({appName, license}) => {
        appName = appName ? appName.toString().trim() : "سلام دنیا!";
        appName = encodeURI(appName);
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/farsroid?s=${appName}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });

    }, imageMetadata: ({imageUrl, license}) => {
        imageUrl = imageUrl ? imageUrl : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/image/metadata?url=${imageUrl}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    }, wikipedia: ({search, license}) => {
        search = search ? search : "";
        search = encodeURI(search);
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/wikipedia?s=${search}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    }, linkPreview: ({link, license}) => {
        link = link ? link : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/link/preview?url=${link}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    }, webScraper: ({url, license}) => {
        url = url ? url : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/scraper?url=${url}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    }, webScraperPro: ({url, license}) => {
        url = url ? url : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/scraper/pro?url=${url}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    }, html2json: ({html, license}) => {
        html = html ? html : "<div>سلام دنیا!</div>";
        let params = new URLSearchParams();
        params.append('html', html);

        return new Promise(resolve => {
            axios.post(`${config.apiV3}/majid/tools/html2json?license=${license}`, html, {
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
    }, weather: ({city, license}) => {
        city = city ? city.toString().trim() : "تهران";
        return new Promise(resolve => {
            axios.get(`${config.api}/weather/?city=${city}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    }, religiousTimes: ({method, search, cityID, license}) => {
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
        url = `${url}&license=${license}`
        return new Promise(resolve => {
            axios.get(url)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    }, network: ({action, host, port, ip, queryType, license = ""}) => {
        action = action ? action : "ping";
        queryType = queryType ? queryType.toUpperCase() : "A";

        let furl = `${config.apiV3}/majid/tools/network?action=${action}`;
        switch (action) {
            case "dns":
                furl = `${furl}&host=${host}&queryType=${queryType}`;
                break;
            case "reverse":
                furl = `${furl}&ip=${ip}`;
                break;
            case "port":
                furl = `${furl}&host=${host}&port=${port}`;
                break;
            default:
                furl = `${furl}&host=${host}`;
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
    }, dehkhoda: ({text = "", license = ""}) => {
        text = text ? text.toString().trim() : "";
        return new Promise(resolve => {
            if (text !== "") {
                axios.get(`${config.apiV3}/majid/tools/dictionary/dehkhoda?q=${encodeURI(text)}&license=${license}`)
                    .then(r => {
                        resolve(r.data.result);
                    })
                    .catch(err => {
                        config.resolveError(resolve, err);
                    });
            } else {
                resolve({error: "'text' parameter is empty!"})
            }
        })
    }, date: ({license = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/date?license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },

    webShot: ({license = "", url = "", fullSize = false, width = "512", height = "512"}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/webshot/?url=${url}&fullSize=${fullSize.toString()}&height=${height}&width=${width}&license=${license}`)
                .then(r => {
                    resolve(r.data.link);
                })
                .catch(err => {
                    config.resolveError(resolve, err)
                });
        })
    }, aparatDownloader: ({url = "", license = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/aparat/?link=${url}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    }, url2pdf: ({url = "", license = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/url2pdf?url=${url}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    }, extractPDFText: ({pdfUrl = "", license = ""}) => {
        return new Promise(resolve => {
            if (pdfUrl.includes(".pdf")) {
                axios.get(`${config.apiV3}/majid/tools/extract/pdf?url=${pdfUrl}&license=${license}`)
                    .then(r => {
                        resolve(r.data.result);
                    })
                    .catch(err => {
                        config.resolveError(resolve, err);
                    });
            } else {
                resolve({error: "pdfUrl is not valid!"});
            }
        })
    }, rssParser: ({rssUrl = "", license = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/rss/parse?url=${rssUrl}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });

        })
    }, qrCode: ({text = "", size = 512, license = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/qrcode?text=${text}&size=${size}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    }, captcha: ({length = 5, license = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/captcha?length=${length}&license=${license}`)
                .then(r => {
                    resolve(r.data);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    }, googlesSearch: ({search = "", license = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/google/search?s=${search}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    }, whoisIP: ({ip = "", license = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/whois/ip?ip=${ip}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    }, whoisDomain: ({domain = "", license = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/whois/domain?domain=${domain}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    captcha2: ({
                   textColor = "#000000",
                   bgColor = "#fffffe",
                   width = 300,
                   height = 150,
                   length = 5,
                   fontSize = 20,
                   lineCount = 3,
                   lineColor = "#000000",
                   lineWidth = 1,
                   license = ""
               }) => {
        let furl = `${config.apiV4}/api/tools/captcha/?license=${license}`;

        if (textColor) {
            furl = `${furl}&textColor=${textColor}`;
        }
        if (bgColor) {
            furl = `${furl}&bgColor=${bgColor}`;
        }
        if (width) {
            furl = `${furl}&width=${width}`;
        }
        if (height) {
            furl = `${furl}&height=${height}`;
        }
        if (length) {
            furl = `${furl}&length=${length}`;
        }
        if (fontSize) {
            furl = `${furl}&fontSize=${fontSize}`;
        }
        if (lineCount) {
            furl = `${furl}&lineCount=${lineCount}`;
        }
        if (lineColor) {
            furl = `${furl}&lineColor=${lineColor}`;
        }
        if (lineWidth) {
            furl = `${furl}&lineWidth=${lineWidth}`;
        }

        return new Promise(resolve => {
            axios.get(furl)
                .then(r => {
                    resolve(r.data ? r.data.result ? r.data.result.image_base64 ? r.data.result.image_base64 : r.data.result : r.data.result : r.data);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    postTracking: ({code = "", type = "json", license = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/post/tracking?code=${code}&type=${type}&license=${license}`)
                .then(r => {
                    resolve(r.data.result)
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    }
}