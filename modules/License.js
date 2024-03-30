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
}