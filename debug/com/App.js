var App;
(function (App) {
    /**
     * randerer  不能在重新new 了  scene  camera 可以
     */
    function run() {
        let scene = new THREE.Scene();
        App.scene = scene;
        let renderer = new THREE.WebGLRenderer();
        App.renderer = renderer;
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        App.setCamera();
        Animate.run();
        DomTopic.startListen();
        //App.renderer.render( App.scene, App.camera );
    }
    App.run = run;
    function viewOther(className) {
        if (App.exampleTar) {
            if (App.exampleTar.removeSelf) {
                App.exampleTar.removeSelf();
            }
            else {
                for (var obj of App.scene.children) {
                    App.scene.remove(obj);
                }
            }
            App.exampleTar = undefined;
        }
        var tar = new game[className]();
        if (className) {
            App.exampleTar = tar;
            tar.initUI();
        }
    }
    App.viewOther = viewOther;
    function runWindowFrame() {
    }
    App.runWindowFrame = runWindowFrame;
    function createContaner() {
    }
    App.createContaner = createContaner;
    function showFPS() {
        var stats = new Stats();
        document.body.appendChild(stats.dom); //fps
    }
    App.showFPS = showFPS;
    App.randerType = 1; //0: canvas, 1 : webgl
    App.width = window.innerWidth;
    App.height = window.innerHeight;
    function setCamera(fov, aspect, near, far, pos) {
        let camera = new THREE.PerspectiveCamera(fov || 75, aspect || window.innerWidth / window.innerHeight, near || 0.1, far || 1000);
        App.camera = camera;
        camera.position.x = pos ? pos.x : 0;
        camera.position.y = pos ? pos.y : 0;
        camera.position.z = pos ? pos.z : 0;
        camera.lookAt(App.scene.position);
    }
    App.setCamera = setCamera;
    function getRandomColor() {
        return '0x' +
            (function (color) {
                return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)])
                    && (color.length == 6) ? color : arguments.callee(color);
            })('');
    }
    App.getRandomColor = getRandomColor;
})(App || (App = {}));
//window["App"] = App
