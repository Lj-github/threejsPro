namespace App {
    /**
     * randerer  不能在重新new 了  scene  camera 可以
     */

    export function run() {
        let scene = new THREE.Scene()
        App.scene = scene
        let renderer = new THREE.WebGLRenderer()
        App.renderer = renderer
        renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(renderer.domElement)
        App.setCamera()
        Animate.run()
        DomTopic.startListen()
        App.renderer.render(App.scene, App.camera);

    }

    export let exampleTar: any

    export function viewOther(className: string) {
        if (exampleTar) {
            if (exampleTar.removeSelf) {
                exampleTar.removeSelf()
            } else {
                for (var obj of App.scene.children) {
                    App.scene.remove(obj)
                }
            }

            exampleTar = undefined
        }
        var tar = new game[className]()
        if (className) {
            exampleTar = tar
            tar.initUI()
        }

    }

    export function runWindowFrame() {

    }

    export function createContaner() {


    }

    export function showFPS() {
        var stats = new Stats();
        document.body.appendChild(stats.dom);//fps
    }

    export let renderer: THREE.WebGLRenderer
    export let randerType = 1 //0: canvas, 1 : webgl
    export let scene: THREE.Scene
    export let camera: any//THREE.Camera
    export interface pos {
        x: number;
        y: number;
        z: number;
    }

    export const width = window.innerWidth

    export const height = window.innerHeight


    export function setCamera(fov?: number, aspect?: number, near?: number, far?: number, pos?: pos) {
        let camera = new THREE.PerspectiveCamera(fov || 75, aspect || window.innerWidth / window.innerHeight, near || 0.1, far || 1000)
        App.camera = camera
        camera.position.x = pos ? pos.x : 0
        camera.position.y = pos ? pos.y : 0
        camera.position.z = pos ? pos.z : 0
        camera.lookAt(App.scene.position)
    }

    export function getRandomColor() {
        return '0x' +
            (function (color) {
                return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)])
                && (color.length == 6) ? color : arguments.callee(color);
            })('');
    }

    export function removeAllCanvas() {
        var canvass = document.getElementsByTagName("canvas")
        if (canvass.length > 0) {
            for (let canvasElement of canvass){
                canvasElement.parentNode.removeChild(canvasElement)
            }
        }
    }
}
