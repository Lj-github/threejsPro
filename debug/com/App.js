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
        Animate.run();
        DomTopic.startListen();
        //App.renderer.render( App.scene, App.camera );
    }
    App.run = run;
    function viewOther(className) {
        if (App.exampleTar) {
            App.exampleTar.removeSelf();
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
        camera.position.x = pos ? pos.x : 5;
        camera.position.y = pos ? pos.y : 5;
        camera.position.z = pos ? pos.z : 5;
        camera.lookAt(App.scene.position);
    }
    App.setCamera = setCamera;
})(App || (App = {}));
//window["App"] = App
