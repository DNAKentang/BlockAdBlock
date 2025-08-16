(() => {
    "use strict";
    var t;
    t = function(t) {
        console.log("Ads are ".concat(t ? "blocked" : "not blocked")),
            function(t) {
                var e = document.body;
                if (t) {
                    e.innerHTML = "";
                    var o = document.createElement("h1");
			o.textContent = "This website can't be accessed with adblock. pls turn off your adblock when visiting this website // Website ini tidak dapat diakses dengan adblock, tolong matikan adblock kalian saat mengakses website ini.", e.appendChild(o);
                }
            }(t)
    }, fetch("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
        method: "HEAD",
        mode: "no-cors"
    }).then((function(e) {
        t(e.redirected)
    })).catch((function() {
        t(window.navigator.onLine)
    }))
})();
