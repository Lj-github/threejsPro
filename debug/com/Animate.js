// animate 所有
var Animate;
(function (Animate) {
    function run() {
        App.renderer.render(App.scene, App.camera);
    }
    Animate.run = run;
})(Animate || (Animate = {}));
//# sourceMappingURL=Animate.js.map