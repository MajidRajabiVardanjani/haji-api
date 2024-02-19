module.exports = {
    api: "https://haji-api.ir",
    apiV2: "https://api2.haji-api.ir",
    apiV3: "https://api3.haji-api.ir",

    resolveError: (resolve, err = null) => {
        let error = "";
        let data = error ?
            err.response ?
                err.response.data ?
                    err.response.data.message ?
                        {error: err.response.message} :
                        err.response.data : err.response : err ? {error: err.message} : null : null
        error = data ? data : {
            error: "خطایی رخ داده است!"
        }
        resolve(error);
        return error;
    },
    arrayBufferToBase64: (data) => {
        let b64 = ""
        try {
            Buffer.from(data, 'binary').toString('base64');
        } catch (err) {
        }
        return b64;
    },
    isFa: (str = "") => {
        let strIsFa = false;
        ["ا", "ب", "پ", "ت", "س",
            "ش", "ص", "ض", "ط",
            "ظ", "ع", "غ", "ک",
            "گ", "ل", "م", "ن",
            "ه", "ی"].map(a => {
            if (str.includes(a) && !strIsFa) {
                strIsFa = true;
            }
        });
        return strIsFa;
    }
}