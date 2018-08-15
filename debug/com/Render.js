/**
 * rander  所有
 */
var Rander;
(function (Rander) {
    function run() {
        requestAnimationFrame(Animate.run);
        Rander.run();
    }
    Rander.run = run;
})(Rander || (Rander = {}));
