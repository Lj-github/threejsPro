var App;
(function (App) {
    function run() {
        let scene = new THREE.Scene();
        App.scene = scene;
        let renderer = new THREE.WebGLRenderer();
        App.renderer = renderer;
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        App.setCamera();
        var mainGame = new game.Main_birds();
        mainGame.initUI();
        Animate.run();
    }
    App.run = run;
    function runWindowFrame() {
    }
    App.runWindowFrame = runWindowFrame;
    App.randerType = 1; //0: canvas, 1 : webgl
    App.width = window.innerWidth;
    App.height = window.innerHeight;
    /**
     * Window 添加事件
     * @param {string} uiEvent
     * @param fun
     */
    function addWindowEventListener(uiEvent, fun, target) {
        window.addEventListener(uiEvent, fun, false);
    }
    App.addWindowEventListener = addWindowEventListener;
    /**
     * Dom 添加事件
     * @param {string} uiEvent
     * @param fun
     */
    function addDocumentEventListener(uiEvent, fun, options) {
        document.addEventListener(uiEvent, fun, false);
    }
    App.addDocumentEventListener = addDocumentEventListener;
    function setCamera(fov, aspect, near, far, pos) {
        let camera = new THREE.PerspectiveCamera(fov || 75, aspect || window.innerWidth / window.innerHeight, near || 0.1, far || 1000);
        App.camera = camera;
        camera.position.x = pos ? pos.x : 5;
        camera.position.y = pos ? pos.y : 5;
        camera.position.z = pos ? pos.z : 5;
        camera.lookAt(App.scene.position);
    }
    App.setCamera = setCamera;
})(App || (App = {}));
//window["App"] = App
