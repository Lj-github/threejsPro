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
    function unRenderRunFunction(fun, tar) {
        allRunTag = allRunTag.filter((evt) => {
            return evt.tag != tar && evt.fun != fun;
        });
    }
    Animate.unRenderRunFunction = unRenderRunFunction;
    function unAllRenderRunFunctionByTarget(target) {
        allRunTag = allRunTag.filter((evt) => {
            return evt.tag != target;
        });
    }
    Animate.unAllRenderRunFunctionByTarget = unAllRenderRunFunctionByTarget;
})(Animate || (Animate = {}));
