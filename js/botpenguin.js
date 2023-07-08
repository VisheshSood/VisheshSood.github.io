function createBPMeta() {
    let t = document.createElement("meta");
    t.name = "viewport", t.content = "width=device-width, initial-scale=1", document.head.appendChild(t)
}

function createBPStyles() {
    let t = document.createElement("style");
    t.appendChild(document.createTextNode('.BotPenguin-chat *{box-sizing:content-box!important;-webkit-box-sizing:content-box!important;font-family:Brandon Grotesque Light,sans-serif!important}@media screen and (max-width:550px){#BotPenguin-messenger{width:100%!important;height:100%!important;bottom:0!important;right:0!important;left:0!important;border-radius:0!important;margin:0!important}}#BotPenguin-messenger{background:#fff;z-index:2147483647;width:360px;height:500px;position:fixed;bottom:20px;right:20px;border:none;border-radius:10px;box-shadow:0 0 3px 1px hsla(0,0%,57.3%,.3);left:auto;display:none}.center{left:0!important;right:0!important;margin:auto!important}@font-face{font-family:Brandon Grotesque Light;src:url(https://cdn.botpenguin.com/assets/fonts/brandon-grotesque-light-58a8a4b38001d.woff)}#botpenguin-launcher-12{position:fixed;z-index:2147483647;bottom:20px;right:20px;cursor:pointer;visibility:hidden;transition:visibility .7s,opacity .5s linear;opacity:0;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.botpenguin-launcher-text-12{font-weight:600;color:#000;position:relative;margin-bottom:2px;max-width:230px;background:#fff;padding:13px;vertical-align:bottom;cursor:pointer;border-radius:20px 20px 3px 20px;margin-right:8px;margin-top:0;font-size:16px;word-spacing:2px;font-family:Brandon Grotesque Light,sans-serif}.botpenguin-launcher-text-12,span.botpenguin-launcher-image-12{box-shadow:0 0 3px 1px hsla(0,0%,57.3%,.3);overflow:hidden;display:inline-block}span.botpenguin-launcher-image-12{vertical-align:middle;border-radius:50%;height:44px;width:44px;padding:8px}span.botpenguin-launcher-image-12 img{width:100%;height:100%;border-radius:50%}.botpenguin-launcher-text-12:after{display:block;position:absolute;content:"";width:10px;height:10px;right:-10px;bottom:10px;background-color:inherit;transform:translateX(-6px) rotate(45deg);pointer-events:none;box-shadow:2px -2px 4px 0 rgba(0,0,0,.2)}.botpenguin-right{right:20px;left:auto}.botpenguin-left{right:auto;left:20px}.botpenguin-center{right:20px!important;top:auto!important;bottom:50%!important}@media screen and (max-width:550px){.botpenguin-launcher-text-12{max-width:215px;padding:12px;font-size:16px}span.botpenguin-launcher-image-12{height:44px;width:44px}}@media screen and (max-width:350px){.botpenguin-launcher-text-12{max-width:185px;padding:12px;font-size:16px}span.botpenguin-launcher-image-12{height:44px;width:44px}}@media screen and (max-width:300px){.botpenguin-launcher-text-12{max-width:160px;padding:12px;font-size:16px}span.botpenguin-launcher-image-12{height:44px;width:44px}}.hide{animation:.6s forwards right-animate}@keyframes right-animate{0%{transform:translateX(0) scaleX(1) scaleY(1)}100%{transform:translateX(65%) scaleX(0)}}')), document.head.appendChild(t)
}

function insertBPScript() {
    let t = document.createElement("script");
    t.defer = !0, t.src = "https://cdn.botpenguin.com/window-script/runtime-main.d5772693.js", document.body.appendChild(t);
    let e = document.createElement("script");
    e.defer = !0, e.src = "https://cdn.botpenguin.com/window-script/2.9fd30bbf.chunk.js", document.body.appendChild(e);
    let n = document.createElement("script");
    n.defer = !0, n.src = "https://botpenguin-assets.s3.us-east-2.amazonaws.com/cdn/window-script/main.06fe2c17.chunk.js", document.body.appendChild(n)
}(() => {
    if (document.querySelector("botpenguin-root")) throw new Error("The bot element already exist, please remove existing script to continue");
    let t = document.getElementById("BotPenguin-messenger-widget");
    if (t) {
        let e = t.innerText.split(",");
        localStorage.setItem("__BotPenguinUser", e[1]), localStorage.setItem("__BotPenguin", e[0]), e.length < 2 ? (localStorage.setItem("old", "true"), localStorage.setItem("old-botpenguin-api-key", encodeURIComponent(String(decodeURI(t.innerText))))) : localStorage.setItem("old", "false")
    } else {
        let t = document.getElementById("Ym90cGVuZ3VpbkFwaQ").src;
        if (t = new URL(String(t)), t = t.searchParams.get("apiKey"), !t) throw new Error("Invalid Script");
        localStorage.setItem("old", "true"), localStorage.setItem("old-botpenguin-api-key", encodeURIComponent(String(t)))
    }
    createBPStyles(), createBPMeta();
    let e = document.createElement("botpenguin-root");
    document.body.appendChild(e), insertBPScript()
})();