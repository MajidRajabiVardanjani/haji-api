# Haji-API - وب سرویس حاجی

## نصب

```bash
npm i haji-api --save
```

# [سایت حاجی](https://hajiapi.ir/)

## [چنل تلگرام](https://t.me/HajiApi)

## [لیست وب سرویس ها](https://docs.hajiapi.ir/)

#### [پشتیبانی تلگرام (احسان)](https://t.me/HttpAdmin)

#### [پشتیبانی تلگرام (مجید)](https://t.me/MajidRajabiVardanjani)

#### [پشتیبانی تلگرام (دکتر لینوکس)](https://t.me/DrLinuxDev)

#### [پشتیبانی تلگرام (مهدی)](https://t.me/require_once)

## لیست سرویس های اشتراکی

### [دریافت لایسنس رایگان](https://t.me/hajiapi_license_bot)

- **[فرهنگ نام ها اشتراکی](#فرهنگ-نام-ها-اشتراکی)**
- **[مترجم گوگل اشتراکی](#مترجم-گوگل-اشتراکی)**
- **[تلگرام اشتراکی](#تلگرام-اشتراکی)**
- **[یوتیوب اشتراکی](#یوتیوب-اشتراکی)**
- **[لوگوساز اشتراکی](#لوگوساز-اشتراکی)**
- **[گفتار به متن اشتراکی](#گفتار-به-متن-اشتراکی)**
- **[ساخت عکس با هوش مصنوعی اشتراکی](#ساخت-عکس-با-هوش-مصنوعی-اشتراکی)**
- **[متن به گفتار اشتراکی](#متن-به-گفتار-اشتراکی)**
- **[GPT اشتراکی](#GPT-اشتراکی)**
- **[دانلودر اینستاگرام](#دانلودر-اینستاگرام)**

## فرهنگ نام ها اشتراکی

```javascript
const License = require("haji-api/modules/License");
let license = new License("your_license");

// ترجمه گوگل
license.nameDictionary({
    name: "مجید"
}).then(console.log);
```

## مترجم گوگل اشتراکی

```javascript
const License = require("haji-api/modules/License");
let license = new License("your_license");

// ترجمه گوگل
license.googleTranslate({
    text: "سلام",
    to: "en" // زبان مقصد
}).then(console.log);
```

## تلگرام اشتراکی

```javascript
const License = require("haji-api/modules/License");
let license = new License("your_license");

// اطلاعات کاربر
license.telegram({
    method: "user",
    username: "MajidRajabiVardanjani"
}).then(console.log);

// اطلاعات کانال
license.telegram({
    method: "channel",
    username: "HajiApi"
}).then(console.log);

// پراکسی
license.telegram({
    method: "proxies",
    id: "آی دی کانال برای دریافت پراکسی ها (اختیاری)"
}).then(console.log);

// کانفیگ v2ray
license.telegram({
    method: "v2ray",
    id: "آی دی کانال برای دریافت کانفیگ ها (اختیاری)",
    name: "اسم دلخواه برای کانفیگ ها (تبلیغ اختیاری)"
}).then(console.log);
```

## یوتیوب اشتراکی

```javascript
const License = require("haji-api/modules/License");
let license = new License("your_license");

// جستجو در یوتیوب
license.youtube({
    method: "search",
    search: "ویدیو"
}).then(console.log);

// دانلودر از یوتیوب
license.youtube({
    method: "download",
    url: "لینک ویدیو"
}).then(console.log);
```

## لوگوساز اشتراکی

```javascript
const License = require("haji-api/modules/License");
let license = new License("your_license");

// لیست استایل ها
license.ePhoto({
    method: "styles"
}).then(console.log);

// ساخت لوگو رندوم
license.ePhoto({
    method: "random",
    text: "HajiAPI"
}).then(console.log);

// ساخت لوگو سفارشی
license.ePhoto({
    method: "custom",
    styleUrl: "از متد استایل ها",
    text: "HajiAPI"
}).then(console.log);
```

## گفتار به متن اشتراکی

```javascript
const License = require("haji-api/modules/License");
let license = new License("your_license");

// گفتار به متن
license.stt({
    audioUrl: ".mp3|.ogg|.oga"
}).then(console.log);
```

## ساخت عکس با هوش مصنوعی اشتراکی

```javascript
const License = require("haji-api/modules/License");
let license = new License("your_license");

// متن به گفتار
license.generateImage({
    model: "default", // default - stablediffusion - dalle - pixart - prodia
    prompt: "a cute cat"
}).then(console.log);
```

## متن به گفتار اشتراکی

```javascript
const License = require("haji-api/modules/License");
let license = new License("your_license");

// متن به گفتار
license.tts({
    character: "DilaraNeural", // DilaraNeural - FaridNeural
    text: "سلام عزیزم! خوبی؟"
}).then(console.log);
```

## GPT اشتراکی

```javascript
const License = require("haji-api/modules/License");
let license = new License("your_license");

// چت جی پی تی
license.gpt({
    model: "gpt-3", // gpt-3 - gpt-3.5-turbo - gpt-4 - gpt-4-web
    question: "Hello"
}).then(console.log);
```

## دانلودر اینستاگرام

```javascript
const License = require("haji-api/modules/License");
let license = new License("your_license");

// دانلود با شناسایی خودکار
license.instagramDownload({
    method: "auto",
    url: "لینک پست، ریلز، پروفایل، استوری، هایلات یا ..."
}).then(console.log);

// دانلود پروفایل
license.instagramDownload({
    method: "profile",
    url: "لینک پروفایل یا نام کاربری"
}).then(console.log);

// دانلود پست یا ریلز
license.instagramDownload({
    method: "post",
    url: "لینک پست یا ریلز"
}).then(console.log);

// دانلود استوری
license.instagramDownload({
    method: "story",
    url: "لینک استوری"
}).then(console.log);

// دریافت استوری ها
license.instagramDownload({
    method: "stories",
    id: "نام کاربری"
}).then(console.log);

// دریافت هایلایت ها
license.instagramDownload({
    method: "highlights",
    id: "نام کاربری"
}).then(console.log);

// دانلود هایلایت بر اساس هایلایت آی دی
license.instagramDownload({
    method: "highlightById",
    highlightId: "highlight:... از متد دریافت هایلایت ها"
}).then(console.log);
```

## لیست سرویس های در دسترس

- **[اوقات شرعی](#اوقات-شرعی)**
- **[OCR](#OCR)**
- **[آب و هوا](#آب-و-هوا)**
- **[آشپزی](#آشپزی)**
- **[HTML to JSON](#HTML-to-JSON)**
- **[وب اسکرپر](#وب-اسکرپر)**
- **[جوک رندوم](#جوک-رندوم)**
- **[دانلود ویدیو پینترست](#دانلود-ویدیو-پینترست)**
- **[فال حافظ تصویری](#فال-حافظ-تصویری)**
- **[اسپاتیفای](#اسپاتیفای)**
- **[جستجو و دانلود موزیک با لینک مستقیم](#جستجو-و-دانلود-موزیک-با-لینک-مستقیم)**
- **[عکس به انیمه توسط هوش مصنوعی](#عکس-به-انیمه-توسط-هوش-مصنوعی)**
- **[چت llama2](#چت-llama2)**
- **[v2ray کانفیگ](#v2ray-کانفیگ)**
- **[پراکسی تلگرام](#پراکسی-تلگرام)**
- **[اطلاعات کاربر و کانال تلگرام](#اطلاعات-کاربر-و-کانال-تلگرام)**
- **[برش عکس](#برش-عکس)**
- **[جستجوی عکس pinterest](#جستجوی-عکس-pinterest)**
- **[دریافت پیش نمایش لینک](#دریافت-پیش-نمایش-لینک)**
- **[حذف پس زمینه عکس با هوش مصنوعی 2](#حذف-پس-زمینه-عکس-با-هوش-مصنوعی-2)**
- **[افزایش کیفیت عکس](#افزایش-کیفیت-عکس)**
- **[ویکی پدیا فارسی](#ویکی-پدیا-فارسی)**
- **[متادیتای عکس](#متادیتای-عکس)**
- **[نوبیتکس](#نوبیتکس)**
- **[قیمت خودرو](#قیمت-خودرو)**
- **[دانستنی](#دانستنی)**
- **[انیمه کردن عکس](#انیمه-کردن-عکس)**
- **[فرهنگ نام ها](#فرهنگ-نام-ها)**
- **[ترب](#ترب)**
- **[فارسروید](#فارسروید)**
- **[شازم | Shazam](#شازم--shazam)**
- **[گفتار به متن](#گفتار-به-متن)**
- **[فال حافظ](#فال-حافظ)**
- **[جستجوی عکس Unsplash](#جستجوی-عکس-unsplash)**
- **[کارتونی کردن عکس](#کارتونی-کردن-عکس)**
- **[جستجوی عکس از اینترنت](#جستجوی-عکس-از-اینترنت)**
- **[ساخت عکس با هوش مصنوعی | Dall-E 3](#ساخت-عکس-با-هوش-مصنوعی--dall-e-3)**
- **[ساخت عکس با هوش مصنوعی](#ساخت-عکس-با-هوش-مصنوعی)**
- **[ساخت لوگو | ePhoto 360](#ساخت-لوگو--ephoto-360)**
- **[اطلاعات تولد](#اطلاعات-تولد)**
- **[مترجم گوگل 2](#مترجم-گوگل-2)**
- **[جستجوی عکس هوش مصنوعی](#جستجوی-عکس-هوش-مصنوعی)**
- **[متن به گفتار | Text To Speech](#متن-به-گفتار--text-to-speech)**
- **[اقتصاد نیوز](#اقتصاد-نیوز)**
- **[دیجی کالا](#دیجی-کالا)**
- **[ورزش 3 (ویدیو)](#ورزش-3-ویدیو)**
- **[موبوموویز](#موبوموویز)**
- **[تصحیح غلط املایی گوگل](#تصحیح-غلط-املایی-گوگل)**
- **[Chat GPT | جی پی تی](#chat-gpt--جی-پی-تی)**
- **[دارویاب | اطلاعات دارویی](#دارویاب--اطلاعات-دارویی)**
- **[زیباسازی تکه کد | carbon](#زیباسازی-تکه-کد--carbon)**
- **[استعلام صحت کد ملی](#استعلام-صحت-کد-ملی)**
- **[BMI شاخص توده بدنی](#bmi-شاخص-توده-بدنی)**
- **[اخبار فوتبال](#اخبار-فوتبال)**
- **[... قیمت ارز فیات، دلار و](#-قیمت-ارز-فیات-دلار-و)**
- **[کوتاه کننده لینک](#کوتاه-کننده-لینک)**
- **[کوتاه کننده لینک](#کوتاه-کننده-لینک)**
- **[GooglePlay دانلودر](#googleplay-دانلودر)**
- **[SoundCloud دانلودر](#soundcloud-دانلودر)**
- **[حذف پس زمینه عکس با هوش مصنوعی 1](#حذف-پس-زمینه-عکس-با-هوش-مصنوعی-1)**
- **[هاست پایتون رایگان](#هاست-پایتون-رایگان)**
- **[جستجوی عکس lexica](#جستجوی-عکس-lexica)**
- **[عدد و رشته رندوم](#عدد-و-رشته-رندوم)**
- **[QR Code](#qr-code)**
- **[ایرنا](#ایرنا)**
- **[مترجم گوگل 1](#مترجم-گوگل-1)**
- **[عکس انگیزشی رندوم](#عکس-انگیزشی-رندوم)**
- **[ملوبیت](#ملوبیت)**
- **[والپیپر](#والپیپر)**
- **[سخنگو](#سخنگو)**
- **[پینگ سایت یا آی پی](#پینگ-سایت-یا-آی-پی)**
- **[تولید کردیت کارت](#تولید-کردیت-کارت)**
- **[قیمت ارز دیجیتال](#قیمت-ارز-دیجیتال)**
- **[ذکر ایام هفته](#ذکر-ایام-هفته)**
- **[فونت کلمات](#فونت-کلمات)**
- **[لوگو دو حرفی](#لوگو-دو-حرفی)**
- **[کافه بازار](#کافه--بازار)**
- **[پراکسی تلگرام ورژن 1](#پراکسی-تلگرام-ورژن-1)**
- **[دقت کردین؟](#دقت-کردین)**
- **[ایمیل فیک](#ایمیل-فیک)**
- **[جمله سنگین](#جمله-سنگین)**
- **[تصویر مفهومی](#تصویر-مفهومی)**
- **[تاریخ و ساعت](#تاریخ-و-ساعت)**
- **[متن کتب معروف رندوم](#متن-کتب-معروف-رندوم)**
- **[جمله انگیزشی رندوم](#جمله-انگیزشی-رندوم)**

## اوقات شرعی

```javascript
const {religiousTimes} = require("haji-api/modules/tools");

// لیست استان ها
religiousTimes({
    method: "provinces"
}).then(console.log);

// لیست شهر ها
religiousTimes({
    method: "cities"
}).then(console.log);

// اوقات شرعی بر اساس شناسه شهر
religiousTimes({
    method: "cityID",
    cityID: "20_131" // از متد لیست شهر ها
}).then(console.log);

// اوقات شرعی بر اساس اسم شهر
religiousTimes({
    method: "search",
    search: "تبریز"
}).then(console.log);
```

## OCR

```javascript
const {ocr} = require("haji-api/modules/image");

// استخراج متن فارسی از عکس
ocr({
    imageUrl: "https://i.pinimg.com/736x/fb/24/2e/fb242e91771b3e392f12174ef7cfaf77.jpg"
}).then(console.log);
```

## آب و هوا

```javascript
const {weather} = require("haji-api/modules/tools");

weather({
    city: "تهران"
}).then(console.log);
```

## آشپزی

```javascript
const {cooking} = require("haji-api/modules/fun");

// جستجوی غذا از سایت rezim.ir
cooking({
    method: "search",
    search: "سوخاری"
}).then(console.log);

// دریافت دستور پخت و طرز تهیه غذا
cooking({
    method: "info",
    url: "https://rezim.ir/..."// لینک (url) غذا از متد search
}).then(console.log);
```

## HTML to JSON

```javascript
const {html2json} = require("haji-api/modules/tools");

html2json({
    html: "<p>کد HTML شما</p>"
}).then(console.log);
```

## وب اسکرپر

```javascript
const {webScraper, webScraperPro} = require("haji-api/modules/tools");

// ساده
webScraper({
    url: "لینک موردنظر برای اسکرپ"
}).then(console.log);

// پرو (روی کروم اجرا می شود)
webScraperPro({
    url: "لینک موردنظر برای اسکرپ"
}).then(console.log);
```

## جوک رندوم

```javascript
const {joke} = require("haji-api/modules/fun");

joke().then(console.log);
```

## دانلود ویدیو پینترست

```javascript
const {pinterestDownloadVideo} = require("haji-api/modules/pinterest");

pinterestDownloadVideo({
    url: "https://pin.it/XmathTqdC"
}).then(console.log);
```

## فال حافظ تصویری

```javascript
const {falPhoto} = require("haji-api/modules/fun");

falPhoto()
    .then(console.log);
```

## اسپاتیفای

```javascript
const {spotify} = require("haji-api/modules/music");

// جستجو
spotify({
    method: "search",
    search: "نام خواننده یا موزیک"
}).then(console.log);

// دانلود
spotify({
    method: "download",
    url: "لینک اسپاتیفای از متد قبلی"
}).then(console.log);
```

## جستجو و دانلود موزیک با لینک مستقیم

```javascript
const {musicVIP} = require("haji-api/modules/music");

musicVIP({
    search: "نام خواننده یا موزیک"
}).then(console.log);
```

## عکس به انیمه توسط هوش مصنوعی

```javascript
const {photoToAnimeAI} = require("haji-api/modules/ai");

photoToAnimeAI({
    imageUrl: "لینک عکس",
    prompt: "a boy"
}).then(console.log);
```

## چت llama2

```javascript
const {llama2} = require("haji-api/modules/ai");

llama2({
    question: "Whats your name?"
}).then(console.log);
```

## v2ray کانفیگ

```javascript
const {v2ray} = require("haji-api/modules/telegram");

// لیست کانفیگ ها (پیشفرض)
v2ray({
    configName: "https://t.me/HajiApi" // اسم کانفیگ ها (تبلیغ خودتون)
}).then(console.log);

// لیست کانفیگ ها (سفارشی)
v2ray({
    configName: "https://t.me/HajiApi", // اسم کانفیگ ها (تبلیغ خودتون)
    username: "napsternetv"// آدرس چنل مورد نظر برای استخراج کانفیگ ها را وارد کنید.
}).then(console.log);
```

## پراکسی تلگرام

```javascript
const {proxies} = require("haji-api/modules/telegram");

// لیست پراکسی ها (پیشفرض)
proxies().then(console.log);

// لیست پراکسی ها (سفارشی)
proxies({
    username: "proxycityiran"// آدرس چنل مورد نظر برای استخراج پراکسی ها را وارد کنید.
}).then(console.log);
```

## اطلاعات کاربر و کانال تلگرام

```javascript
const {user, channel} = require("haji-api/modules/telegram");

// اطلاعات کاربر تلگرام
user({
    username: "MajidRajabiVardanjani",
}).then(console.log);

// اطلاعات کانال تلگرام
channel({
    username: "HajiApi",
}).then(console.log);
```

## برش عکس

```javascript
const {cropImage} = require("haji-api/modules/image");

cropImage({
    imageUrl: "لینک عکس",
    width: "512", // عرض
    height: "512" // ارتفاع
}).then(console.log);
```

## جستجوی عکس pinterest

```javascript
const {pinterest} = require("haji-api/modules/image");

pinterest({
    search: "Boy"
}).then(console.log);
```

## دریافت پیش نمایش لینک

```javascript
const {linkPreview} = require("haji-api/modules/tools");

linkPreview({
    link: "https://t.me/HajiApi/11261"
}).then(console.log);
```

## حذف پس زمینه عکس با هوش مصنوعی 2

```javascript
const {removeBackground2} = require("haji-api/modules/ai");

removeBackground2({
    imageUrl: "لینک عکس"
}).then(console.log);
```

## افزایش کیفیت عکس

```javascript
const {imageUpscale} = require("haji-api/modules/ai");

imageUpscale({
    imageUrl: "لینک عکس"
}).then(console.log);
```

## ویکی پدیا فارسی

```javascript
const {wikipedia} = require("haji-api/modules/tools");

wikipedia({
    search: "آموزش"
}).then(console.log);
```

## متادیتای عکس

```javascript
const {imageMetadata} = require("haji-api/modules/tools");

imageMetadata({
    imageUrl: "لینک عکس"
}).then(console.log);
```

## نوبیتکس

```javascript
const {nobitex} = require("haji-api/modules/rate");

nobitex().then(console.log);
```

## قیمت خودرو

```javascript
const {khodro} = require("haji-api/modules/rate");

khodro({
    search: "207" // اسم خودرو
}).then(console.log);
```

## دانستنی

```javascript
const {danestani} = require("haji-api/modules/fun");

danestani().then(console.log);
```

## انیمه کردن عکس

```javascript
const {photoToAnime} = require("haji-api/modules/image");

photoToAnime({
    url: "لینک عکس مورد نظر"
}).then(console.log);
```

## فرهنگ نام ها

```javascript
const {nameDictionary} = require("haji-api/modules/fun");

nameDictionary({
    name: "مجید"
}).then(console.log);
```

## ترب

```javascript
const {torob} = require("haji-api/modules/shop");

torob({
    search: "iPhone"
}).then(console.log);
```

## فارسروید

```javascript
const {farsroid} = require("haji-api/modules/tools");

farsroid({
    appName: "اینشات"
}).then(console.log);
```

## شازم | Shazam

```javascript
const {shazam} = require("haji-api/modules/music");

shazam({
    url: "mp3 لینک فایل صوتی با فرمت"
}).then(console.log);
```

## گفتار به متن

```javascript
const {stt} = require("haji-api/modules/ai");

stt({
    url: "mp3 ogg oga لینک فایل صوتی با فرمت"
}).then(console.log);
```

## فال حافظ

```javascript
const {fal} = require("haji-api/modules/fun");

fal().then(console.log);
```

## جستجوی عکس Unsplash

```javascript
const {unsplash} = require("haji-api/modules/image");

unsplash({
    search: "گوشی"
}).then(console.log);
```

## کارتونی کردن عکس

```javascript
const {photoToCartoon} = require("haji-api/modules/image");

photoToCartoon({
    url: "لینک عکس"
}).then(console.log);
```

## جستجوی عکس از اینترنت

```javascript
const {searchImage} = require("haji-api/modules/image");

searchImage({
    search: "عکس نوشته"
}).then(console.log);
```

## ساخت عکس با هوش مصنوعی | Dall-E 3

```javascript
const {dallE} = require("haji-api/modules/ai");

dallE({
    prompt: "یک گربه که خوابیده است"
}).then(console.log);
```

## ساخت عکس با هوش مصنوعی

```javascript
const {drawImage} = require("haji-api/modules/ai");

drawImage({
    prompt: "یک سگ در حال پرواز"
}).then(console.log);
```

## ساخت لوگو | ePhoto 360

```javascript
const {ephoto360} = require("haji-api/modules/ai");

// ساخت لوگو با استایل تصادفی
ephoto360({
    method: "random",
    text: "Haji API"
}).then(console.log);

// لیست استایل ها
ephoto360({
    method: "styles"
}).then(console.log);

// ساخت لوگو
ephoto360({
    method: "custom",
    text: "Haji API",
    url: "لینک استایل از متد لیست استایل ها"
}).then(console.log);

```

## اطلاعات تولد

```javascript
const {birthdate} = require("haji-api/modules/fun");

birthdate({
    d: "2", // روز
    m: "10", // ماه
    y: "1379" // سال
}).then(console.log);
```

## مترجم گوگل 2

```javascript
const {googleTranslate2} = require("haji-api/modules/tools");

googleTranslate2({
    to: "en",
    text: "سلام دنیا!"
}).then(console.log);
```

## جستجوی عکس هوش مصنوعی

```javascript
const {imageSearch} = require("haji-api/modules/ai");

imageSearch({
    prompt: "a beautiful flower"
}).then(console.log);
```

## متن به گفتار | Text To Speech

```javascript
const {tts} = require("haji-api/modules/ai");

tts({
    text: "سلام عزیزم خوبی؟",
    character: "DilaraNeural" // DilaraNeural - FaridNeural
}).then(console.log);
```

## اقتصاد نیوز

```javascript
const {eghtesadNews} = require("haji-api/modules/news");

// لیست اخبار و اطلاعات صفحه اصلی
eghtesadNews({
    method: "main"
}).then(console.log);


// دریافت اطلاعات خبر
eghtesadNews({
    method: "details",
    url: "لینک خبر متد قبلی"
}).then(console.log);
```

## دیجی کالا

```javascript
const {digikalaSearch, digikalaInfo} = require("haji-api/modules/shop");

// جستجوی محصول
digikalaSearch({
    search: "گوشی"
}).then(console.log);

// اطلاعات محصول
digikalaInfo({
    productId: "شناسه محصول از متد قبلی"
}).then(console.log);
```

## ورزش 3 (ویدیو)

```javascript
const {varzesh3Video} = require("haji-api/modules/news");

// اطلاعات صفحه اصلی (دسته بندی ها، اخبار و ...)
varzesh3Video({
    method: "main"
}).then(console.log);

// دریافت اخبار بر اساس دسته بندی
varzesh3Video({
    method: "category",
    url: "لینک دسته بندی از متد اطلاعات صفحه اصلی"
}).then(console.log);

// دریافت اطلاعات خبر و دانلود ویدیو ها
varzesh3Video({
    method: "details",
    url: "لینک خبر از دو متد قبلی"
}).then(console.log);
```

## موبوموویز

```javascript
const {moboMoviesSearch, moboMoviesDownload} = require("haji-api/modules/movie");

// جستجوی فیلم یا سریال
moboMoviesSearch({
    search: "مردگان متحرک"
}).then(console.log);

// اطلاعات و دانلود فیلم یا سریال
moboMoviesDownload({
    moboUrl: "https://mobomovies.online/post/the-walking-dead" // لینک فیلم یا سریال از متد قبلی
}).then(console.log);
```

## تصحیح غلط املایی گوگل

```javascript
const {googleSpellCorrection} = require("haji-api/modules/tools");

// احتمال خطا در این وب سرویس زیاد است
googleSpellCorrection({
    text: "صلام خوبی؟"
}).then(console.log);
```

## Chat GPT | جی پی تی

```javascript
const {gpt} = require("haji-api/modules/ai");

gpt({
    model: "GPT-3.5", // GPT-3 - GPT-3.5 - GPT-4
    question: "سلام ربات خوبی؟"
}).then(console.log);
```

## دارویاب | اطلاعات دارویی

```javascript
const {darooyab} = require("haji-api/modules/tools");

// جستجوی دارو
darooyab({search: "ملاتونین"})
    .then(console.log);

// اطلاعات دارو
darooyab({url: "لینک دارویاب از متد قبلی (جستجو)"})
    .then(console.log);
```

## زیباسازی تکه کد | carbon

```javascript
const {carbonOptions, carbon} = require("haji-api/modules/carbon");

// دریافت گزینه ها
carbonOptions()
    .then(console.log);

carbon({
    code: "Your_Code ..."
}).then(console.log);
```

| پارامتر    | توضیحات                         |
|------------|---------------------------------|
| code       | Code to be used as Image        |
| lang       | Program Languages               |
| background | Set Background for Image (rgba) |
| theme      | Set Themes for Image            |
| font       | Set Font for Write              |
| line       | Show Line numbers               |
| firstLine  | First Line Numbers              |
| watermark  | Show Carbon Watermark           |

## استعلام صحت کد ملی

```javascript
const {nationalCode} = require("haji-api/modules/tools");

nationalCode({
    text: "کد ملی مورد نظر"
}).then(console.log);
```

## BMI شاخص توده بدنی

```javascript
const {bmi} = require("haji-api/modules/fun");

bmi({
    weight: 75, // وزن
    height: 180 // قد
}).then(console.log);
```

## اخبار فوتبال

```javascript
const {football} = require("haji-api/modules/news");

football({method: "news"}) // method => "news" or "live"
    .then(console.log);
```

## ... قیمت ارز فیات، دلار و

```javascript
const {exchangeRate} = require("haji-api/modules/rate");

exchangeRate()
    .then(console.log);
```

## کوتاه کننده لینک

```javascript
const {shorLink, shorLink2} = require("haji-api/modules/tools");

// وب سرویس 1
shorLink({url: "https://google.com"})
    .then(console.log);

// وب سرویس 2
shorLink2({url: "https://google.com"})
    .then(console.log);
```

## GooglePlay دانلودر

```javascript
const {googlePlayDownload} = require("haji-api/modules/googleplay");

googlePlayDownload({url: "https://play.google.com/store/apps/details?id=org.telegram.messenger"})
    .then(console.log);
```

## SoundCloud دانلودر

```javascript
const {soundCloudDownload} = require("haji-api/modules/music");

soundCloudDownload({url: "https://soundcloud.com/..."})
    .then(console.log);
```

## حذف پس زمینه عکس با هوش مصنوعی 1

```javascript
const {removeBackground1} = require("haji-api/modules/ai");

removeBackground1({imageUrl: "لینک عکس"})
    .then(console.log);
```

## هاست پایتون رایگان

```javascript
const {pythonHost} = require("haji-api/modules/tools");

pythonHost()
    .then(console.log);
```

## جستجوی عکس lexica

```javascript
const {lexicaSearch} = require("haji-api/modules/ai");

lexicaSearch({prompt: "a beautiful flower"})
    .then(console.log);
```

## عدد و رشته رندوم

```javascript
const {randomNumber, randomString} = require("haji-api/modules/tools");

const num = randomNumber({
    min: 1, // حداقل
    max: 100 // حداکثر
});
console.log(num);

// تولید رشته رندوم
const str = randomString(10); // تعداد کاراکتر
console.log(str);
```

## QR Code

```javascript
const {QRCode} = require("haji-api/modules/tools");

QRCode({
    text: "English Text", // متن یا لینک (انگلیسی)
    size: 12 // اندازه (از 1 تا 12 پیشفرض 12)
}).then(console.log);
```

## ایرنا

```javascript
const {irna} = require("haji-api/modules/news");

irna()
    .then(console.log);
```

## مترجم گوگل 1

```javascript
const {googleTranslate1} = require("haji-api/modules/tools");

googleTranslate1({
    from: "fa",
    to: "en",
    text: "سلام دنیا!"
}).then(console.log);
```

## عکس انگیزشی رندوم

```javascript
const {motivationalPhoto} = require("haji-api/modules/image");

motivationalPhoto()
    .then(console.log); // Base64 Image ...
```

## ملوبیت

```javascript
const {melobit} = require("haji-api/modules/music");

melobit({method: "new"}) // موزیک های جدید
    .then(console.log);

melobit({method: "day"}) // موزیک های برتر روز
    .then(console.log);

melobit({method: "week"}) // موزیک های برتر هفته
    .then(console.log);

melobit({method: "trend"}) // موزیک های ترند
    .then(console.log);

melobit({method: "search", search: "آهنگ"}) // جستجوی موزیک
    .then(console.log);

melobit({method: "info", id: "شناسه موزیک از متد های قبلی"}) // اطلاعات و دانلود موزیک
    .then(console.log);
```

## والپیپر

```javascript
const {wallpaper} = require("haji-api/modules/image");

wallpaper({search: "آیفون", page: 1})
    .then(console.log);
```

## سخنگو

```javascript
const {sokhangoo} = require("haji-api/modules/fun");

sokhangoo("سلام")
    .then(console.log);
```

## پینگ سایت یا آی پی

```javascript
const {ping} = require("haji-api/modules/tools");

ping({
    domainOrIP: "google.com",
    port: 443
}).then(console.log);
```

## تولید کردیت کارت

```javascript
const {creditCard} = require("haji-api/modules/tools");

creditCard({
    bin: "435412",
    year: "2025",
    month: "01",
    limit: 1 // تعداد کردیت کارت برای تولید
}).then(console.log);
```

## قیمت ارز دیجیتال

```javascript
const {cryptoCurrency} = require("haji-api/modules/rate");

cryptoCurrency()
    .then(console.log);
```

## ذکر ایام هفته

```javascript
const {zekr} = require("haji-api/modules/tools");

zekr()
    .then(console.log);
```

## فونت کلمات

```javascript
const {font} = require("haji-api/modules/fun");

font("HajiAPI", false) // Design true or false
    .then(console.log);
```

## لوگو دو حرفی

```javascript
const {logo2} = require("haji-api/modules/image");

logo2("HA")
    .then(console.log);
```

## کافه  بازار

```javascript
const {searchCafeBazar, infoCafeBazar, downloadCafeBazar} = require("haji-api/modules/cafebazar");

searchCafeBazar("اینشات") // جستجو در کافه بازار.
    .then(console.log);

infoCafeBazar("PACKAGE-NAME") // دریافت اطلاعات برنامه یا بازی (پکیج نیم را از متد قبلی دریافت کنید)
    .then(console.log);

downloadCafeBazar("PACKAGE-NAME") // دانلود برنامه یا بازی (پکیج نیم را از متد اول دریافت کنید)
    .then(console.log);
```

## پراکسی تلگرام ورژن 1

```javascript
const {telegramProxies1} = require("haji-api/modules/tools");
telegramProxies1("ProxyMTProto") // آدرس چنل مورد نظر برای استخراج پراکسی ها را وارد کنید.
    .then(console.log);
```

## دقت کردین؟

```javascript
const {deghat} = require("haji-api/modules/fun");
deghat()
    .then(console.log);
```

## ایمیل فیک

```javascript
const {fakeMail} = require("haji-api/modules/tools");

// دریافت آدرس ایمیل فیک
fakeMail()
    .then(console.log);

// دریافت لیست ایمیل ها
fakeMail("getMessages", "آدرس ایمیل دریافتی")
    .then(console.log);
```

## جمله سنگین

```javascript
const {heavy} = require("haji-api/modules/fun");
heavy()
    .then(console.log);
```

## تصویر مفهومی

```javascript
const {photography} = require("haji-api/modules/fun");
photography()
    .then(console.log);
```

## تاریخ و ساعت

```javascript
const {dateTime} = require("haji-api/modules/tools");
dateTime()
    .then(console.log);
```

## متن کتب معروف رندوم

```javascript
const {famousBook} = require("haji-api/modules/fun");
famousBook()
    .then(console.log);
```

## جمله انگیزشی رندوم

```javascript
const {motivational} = require("haji-api/modules/fun");
motivational()
    .then(console.log);
```
