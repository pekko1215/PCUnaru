
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

    var changePlatfome = (ua) => {
        // Chrome, fx, IE11
        window.navigator.__defineGetter__('platform', () => ua);
        console.log(window.platform)
        // Safari
        try {
            // fxでsetterがないとエラーになるので
            window.platform = {
                get platform() {
                    return ua;
                }
            };
        } catch (e) {}
    };
    console.log(window.GameBase)
    changeUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36 Mac OS X .1_");
    changePlatfome("Win32")
    //必要なものは根気と執着、あとほんのちょっとのお茶目ささ
})


function injectScript(func) {
    var el = document.createElement('script');
    el.text = "(" + func.toString() + ")()";
    // console.log(document.)
    document.documentElement.appendChild(el);
}