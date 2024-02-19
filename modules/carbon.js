const config = require("./config");
const axios = require("axios");

module.exports = {
    carbonOptions: () => {
        return new Promise(resolve => {
            axios.get(`${config.apiV3}/majid/tools/carbon/options`)
                .then(r => {
                    resolve(r.data.result);
                })
                .catch(err => {
                    config.resolveError(resolve, err);
                });
        })
    },
    carbon: ({code, lang, background, theme, font, line, firstLine, watermark}) => {
        code = code ? code : "";
        let params = new URLSearchParams();
        params.append('code', code);
        if (lang) {
            params.append('lang', lang);
        }
        if (background) {
            params.append('background', background);
        }
        if (theme) {
            params.append('theme', theme);
        }
        if (font) {
            params.append('font', font);
        }
        if (line) {
            params.append('line', line);
        }
        if (firstLine) {
            params.append('first-line', firstLine);
        }
        if (watermark) {
            params.append('watermark', watermark);
        }
        return new Promise(resolve => {
            if (code !== "") {
                let url = `${config.apiV3}/majid/tools/carbon/default`;
                if (lang || background || theme || font || line || firstLine || watermark) {
                    url = `${config.apiV3}/majid/tools/carbon`;
                }
                axios.post(url, params, {headers: {"Content-Type": "application/x-www-form-urlencoded"}})
                    .then(r => {
                        resolve(r.data.result);
                    })
                    .catch(err => {
                        config.resolveError(resolve, err);
                    });
            } else {
                resolve({error: "وارد کردن پارامتر code الزامی است!"});
            }
        });
    }
}