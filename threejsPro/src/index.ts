// add styles
// 主函数
import './style.css'
// three.js
import * as THREE from 'three'

export module game{
    export class Main{
    	private  box:any
        static renderer :THREE.WebGLRenderer
		static scene:any
        static camera:any
        constructor(){
            //super()
            console.log("main")
        }
        public run(){
    		this.initUI()
			window["ddd"] = this.box
        }
        public initUI(){
            let scene = new THREE.Scene()
            Main.scene = scene
            let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
            Main.camera = camera
            let renderer = new THREE.WebGLRenderer()
            Main.renderer = renderer
            renderer.setSize(window.innerWidth, window.innerHeight)
            document.body.appendChild(renderer.domElement)
            let axis = new THREE.AxesHelper(10)
            scene.add(axis)
            let light = new THREE.DirectionalLight(0xffffff, 1.0)
            light.position.set(100, 100, 100)
            scene.add(light)
            let light2 = new THREE.DirectionalLight(0xffffff, 1.0)
            light2.position.set(-100, 100, -100)
            scene.add(light2)
            let material = new THREE.MeshBasicMaterial({
                color: 0xaaaaaa,
                wireframe: true
            })
            this.box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material)
            scene.add( this.box)

            this.box.position.x = 0.5
            this.box.rotation.y = 0.5
            camera.position.x = 5
            camera.position.y = 5
            camera.position.z = 5
            camera.lookAt(scene.position)
        }
    }
}
//run
new game.Main().run()
function animate(): void {requestAnimationFrame(animate);render()}
function render(): void {game.Main.renderer.render(game.Main.scene, game.Main.camera)}
animate()






