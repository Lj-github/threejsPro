
import * as THREE from 'three'
window["THREE"] = THREE
import * as TWEEN from '@tweenjs/tween.js'
window["TWEEN"] = TWEEN


class Main{constructor(){}public run(){App.run()}}
/*****start load js ****/


var loadScript = function (list, callback) {
    var loaded = 0;
    var loadNext = function () {
        var src = list[loaded]
        loadSingleScript(src, function () {
            loaded++;
            if (loaded >= list.length) {
                callback();
            }
            else {
                loadNext();
            }
        })
    };
    loadNext();
};
var loadSingleScript = function (src, callback) {
    if (src.split("/").pop() == "Main.js"){
        callback()
        return
    }

    let cb = function (s) {
        s.parentNode.removeChild(s);
        s.removeEventListener('load',cb, false);
        callback();
    }

    var s = document.createElement('script');
    s.async = false;
    s.src = src;
    s.addEventListener('load',()=>{cb(s)} , false);
    document.body.appendChild(s);
};
var jsUrl =  location.origin + "/resource/JS.json"//jsFile
var xhr = new XMLHttpRequest();
xhr.open('GET', jsUrl + "?" + Math.random(), true);
xhr.addEventListener("load", function () {
    var manifest = JSON.parse(xhr.response);
    var list = manifest.initial.concat(manifest.game);

    loadScript(list, function () {
        new Main().run();window["Main"] = Main
    });
});
xhr.send(null);




/*****load js end   ****/







