injectScript(function() {
    setTimeout(function() {
        if (GameBase && GameBase.Action) {
            GameBase.Action.CheckSystemRequirements = function() {}
            GameBase.Action.CheckOS = function() { browserName = "スーパーブラウザーＶ" }
            console.log("%cええい、これでどうにかなれ！","font-size:25px;color:red")
        }else{
            setTimeout(arguments.callee, 500)
        }
    }, 50)
})


function injectScript(func) {
    var el = document.createElement('script');
    el.text = "(" + func.toString() + ")()";
    document.body.appendChild(el)
}