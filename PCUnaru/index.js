
injectScript(function() {
    var changeUserAgent = (ua) => {
        // Chrome, fx, IE11
        window.navigator.__defineGetter__('userAgent', () => ua);
        console.log(window.navigator)
        // Safari
        try {
            // fxでsetterがないとエラーになるので
            window.navigator = {
                get userAgent() {
                    return ua;
                }
            };
        } catch (e) {}
    };
    console.log(window.GameBase)
    changeUserAgent("Win NT 10 ChromeベーススーパーブラウザーＸ");
    //必要なものは根気と執着、あとほんのちょっとのお茶目ささ
})


function injectScript(func) {
    var el = document.createElement('script');
    el.text = "(" + func.toString() + ")()";
    // console.log(document.)
    document.documentElement.appendChild(el);
}