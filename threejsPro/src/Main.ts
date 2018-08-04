// add styles
// 主函数
import './../style/style.css'
// three.js
import * as THREE from 'three'

export class Main{
    constructor(){
    }
    public run(){
        let scene = new THREE.Scene()
        App.scene = scene
        let renderer = new THREE.WebGLRenderer()
        App.renderer = renderer
        renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(renderer.domElement)
        let axis = new THREE.AxesHelper(10)
        scene.add(axis)
        App.setCamera()
    }
}
//run
new Main().run()
function animate(): void {requestAnimationFrame(animate);render()}
function render(): void {App.renderer.render(App.scene, App.camera)}
animate()






