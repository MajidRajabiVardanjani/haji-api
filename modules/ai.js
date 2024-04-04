const config = require("./config");
const axios = require("axios");
const {googleTranslate1} = require("./tools");
const {image} = require("../index");

module.exports = {
    lexicaSearch: async ({prompt, license = ""}) => {
        prompt = prompt ? prompt.toString().trim() : "a beautiful flower";

        if (config.isFa(prompt)) {
            prompt = await googleTranslate1({
                from: "fa",
                to: "en",
                text: prompt
            })
                .then(tr => {
                    let translate = tr;
                    try {
                        translate = tr ? !tr.error ? tr : tr : prompt;
                    } catch (err) {
                    }
                    return translate;
                });
        }

        return await new Promise(resolve => {
            axios.get(`${config.api}/prompts/?text=${encodeURI(prompt)}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    removeBackground1: ({imageUrl, license = ""}) => {
        imageUrl = imageUrl ? imageUrl.includes(".") ? imageUrl : "" : "";

        return new Promise(resolve => {
            if (imageUrl !== "") {
                axios.get(`${config.apiV2}/gpt/removebg/?url=${imageUrl}&license=${license}`)
                    .then(r => {
                        let {result} = r.data;
                        resolve(result ? result.answer ? result.answer : result : null);
                    })
                    .catch(err => {
                        config.resolveError(resolve, err);
                    });
            } else {
                resolve({
                    error: "پارامتر imageUrl نامعتبر است!"
                });
            }
        })
    },
    gpt: ({model, question, license = ""}) => {
        model = model ? model : "GPT-3.5";
        question = question ? question.toString().trim() : "سلام خوبی؟";

        if (!["GPT-3", "GPT-3.5", "GPT-4"].includes(model)) {
            model = "GPT-3";
        }

        let url = `${config.apiV3}/majid/gpt`;

        switch (model) {
            case "GPT-3":
                url = `${url}/3/free?q=${question}`;
                break;
            case "GPT-3.5":
                url = `${url}/3-5/turbo?q=${question}`;
                break;
            case "GPT-4":
                url = `${url}/4?q=${question}`;
                break;
            default:
                url = `${url}/3/free?q=${question}`;
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
        });
    },
    tts: ({text, character, license = ""}) => {
        text = text ? text.toString().trim() : "سلام خوبی؟";
        character = character ? character === "FaridNeural" ? "FaridNeural" : "DilaraNeural" : "DilaraNeural";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/tts?text=${text}&Character=${character}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    imageSearch: ({prompt, license = ""}) => {
        prompt = prompt ? prompt.toString().trim() : "a beautiful flower";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/ai/image/create?p=${encodeURI(prompt)}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    ephoto360: ({method, url, text, license = ""}) => {
        text = text ? text.toString().trim() : "Haji API";
        method = method ? method : "random";
        url = url ? url : "";
        let furl = `${config.apiV3}/majid/ai/ephoto`;
        switch (method) {
            case "custom":
                furl = `${furl}/make?text=${text}&url=${url}&license=${license}`;
                break;
            case "styles":
                furl = `${furl}/styles?license=${license}`;
                break;
            default:
                furl = `${furl}/random?text=${text}&license=${license}`;
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
    drawImage: ({prompt, license = ""}) => {
        prompt = prompt ? prompt.toString().trim() : "a beautiful flower";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/ai/image/draw?p=${encodeURI(prompt)}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    dallE: ({prompt, license = ""}) => {
        prompt = prompt ? prompt.toString().trim() : "a beautiful flower";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/ai/image/draw/dalle?p=${encodeURI(prompt)}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    stt: ({url, license = ""}) => {
        url = url ? url : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/ai/stt?url=${url}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    imageUpscale: ({imageUrl, license = ""}) => {
        imageUrl = imageUrl ? imageUrl : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/image/upscale?url=${imageUrl}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    removeBackground2: ({imageUrl, license = ""}) => {
        imageUrl = imageUrl ? imageUrl : "";
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/image/remove/background?url=${imageUrl}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    llama2: ({question, license = ""}) => {
        question = question ? question.toString().trim() : "Hi";

        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/llama2?q=${encodeURI(question)}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        });
    },
    photoToAnimeAI: ({imageUrl, prompt, license = ""}) => {
        imageUrl = imageUrl ? imageUrl : "";
        prompt = prompt ? prompt.toString().trim() : "a boy";
        prompt = encodeURI(prompt);
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/ai/photo/anime?image=${imageUrl}&prompt=${prompt}&license=${license}`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    }
}