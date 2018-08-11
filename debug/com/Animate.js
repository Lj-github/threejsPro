// animate 所有
var Animate;
(function (Animate) {
    let allRunTag = [];
    function run() {
        App.renderer.render(App.scene, App.camera);
        allRunTag.forEach((evt) => {
            evt.fun.call(evt.tag);
        });
        requestAnimationFrame(Animate.run);
    }
    Animate.run = run;
    function start() {
    }
    Animate.start = start;
    /**
     *
     * @param {Function} fun
     * @param tag
     * @param {boolean} loop 是否无限执行
     */
    function addRenderRunFunction(fun, tag, loop = true) {
        var item = {};
        item.fun = fun;
        item.loop = loop;
        item.tag = tag;
        allRunTag.push(item);
    }
    Animate.addRenderRunFunction = addRenderRunFunction;
})(Animate || (Animate = {}));
