var App;
(function (App) {
    function Loader(url, cb, target) {
        var loader = new THREE.JSONLoader();
        loader.load(url, function () {
            cb.apply(target, arguments); //.call(target,arguments)
        });
    }
    App.Loader = Loader;
})(App || (App = {}));
