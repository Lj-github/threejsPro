var App;
(function (App) {
    App.loaderType = {
        loader: 0,
        Jsonloader: 1 //默认
    };
    function Loader(url, cb, target, type = App.loaderType.Jsonloader) {
        var loader;
        switch (type) {
            case App.loaderType.loader:
                break;
            case App.loaderType.Jsonloader:
                loader = new THREE.JSONLoader();
                break;
        }
        loader.load(url, function () {
            cb.apply(target, arguments); //.call(target,arguments)
        });
    }
    App.Loader = Loader;
    function load(url, cb, target) {
        var xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("MSXML2.XMLHTTP");
        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var res = xhr.response;
                    cb.call(target, res); //.call(target,arguments)
                }
            }
        };
        xhr.send();
    }
    App.load = load;
})(App || (App = {}));
