const config = require("./config");
const axios = require("axios");

const api = config.apiV3 + "/lic";

module.exports = class License {
    constructor(license = "") {
        this.license = license;
        this.lq = `&license=${license}`;
    }

    instagramDownload({method = "auto", url = "", username = "", highlightId = ""}) {
        let furl = `${api}/insta`;
        url = encodeURI(url);

        switch (method) {
            case "profile":
                furl = `${furl}/profile?url=${url}`;
                break;
            case "post":
                furl = `${furl}/post?url=${url}`;
                break;
            case "story":
                furl = `${furl}/story?url=${url}`;
                break;
            case "stories":
                furl = `${furl}/stories?id=${username}`;
                break;
            case "highlights":
                furl = `${furl}/highlights?id=${username}`;
                break;
            case "highlightById":
                furl = `${furl}/highlight/by/id?id=${highlightId}`;
                break;
            default:
                furl = `${furl}/auto?url=${url}`;
                break;
        }
        furl = `${furl}${this.lq}`;
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

    gpt({model = "gpt-3", question = "Hello"}) {
        let furl = `${api}/gpt`;
        switch (model) {
            case "gpt-3.5-turbo":
                furl = `${furl}/3-5/turbo`
                break;
            case "gpt-4":
                furl = `${furl}/4`;
                break;
            case "gpt-4-web":
                furl = `${furl}/4/web`;
                break;
            default :
                furl = `${furl}/3`;
                break;
        }
        furl = `${furl}?question=${encodeURI(question)}${this.lq}`;

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

    tts({text = "سلام", character = "DilaraNeural"}) {
        return new Promise(resolve => {
            axios.get(`${api}/tts?text=${text}&Character=${character}${this.lq}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    }

    generateImage({model = "default", prompt = "A cute cat"}) {
        return new Promise(resolve => {
            axios.get(`${api}/ai/image/draw?model=${model}&p=${prompt}${this.lq}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    }

    stt({audioUrl = ""}) {
        return new Promise(resolve => {
            if (audioUrl.includes(".mp3") || audioUrl.includes(".ogg") | audioUrl.includes(".oga")) {
                axios.get(`${api}/ai/stt?url=${audioUrl}${this.lq}`)
                    .then(r => {
                        resolve(r.data.result);
                    })
                    .catch(err => {
                        config.resolveError(resolve, err);
                    });
            } else {
                resolve({error: "فرمت فایل صوتی باید یکی از این موارد باشد: mp3 - ogg - oga"});
            }
        })
    }

    ePhoto({method = "styles", styleUrl = "", text = ""}) {
        let furl = `${api}/ai/ephoto`;

        switch (method) {
            case "random":
                furl = `${furl}/random?text=${text}`
                break;
            case "custom":
                furl = `${furl}/make?text=${text}&url=${styleUrl}`
                break;
            default:
                furl = `${furl}/random?text=${text}`
                break;
        }

        furl = `${furl}${this.lq}`;

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

    youtube({method = "search", search = "", url = ""}) {
        let furl = `${config.api}/youtube`;
        if (method === "search") {
            furl = `${furl}/search?s=${search}`;
        } else {
            furl = `${furl}/download?v=${url}`;
        }
        furl = `${furl}${this.lq}`;
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

    telegram({method = "user", username = "", id = "", name = ""}) {
        let furl = `${api}/telegram`;
        switch (method) {
            case "channel":
                furl = `${furl}/channel?username=${username}`;
                break;
            case "proxies":
                furl = `${furl}/proxies?id=${id}`;
                break;
            case "v2ray":
                furl = `${furl}/v2ray?id=${id}&name=${name}`;
                break;
            default:
                furl = `${furl}/user?username=${username}`;
                break;
        }
        furl = `${furl}${this.lq}`;
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

    googleTranslate({text = "سلام", to = "en"}) {
        to = to ? to.toString().trim().toLowerCase() : "en";
        return new Promise(resolve => {
            axios.get(`${api}/tools/translate?q=${encodeURI(text)}&to=${to}${this.lq}`)
                .then(r => {
                    resolve(r.data.result)
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })

    }
}