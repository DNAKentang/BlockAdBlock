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
                    o.textContent = "This site requires ads for some reason. Disable adblock to see content, or watch below video to learn more", e.appendChild(o);
                        }, e.appendChild(o)
                    }))
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
