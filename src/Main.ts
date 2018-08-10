// add styles
// 主函数
//import '../style/style.css'
// three.js
import * as THREE from 'three'
//import * as TWEEN from '@tweenjs/tween.js'
export class Main{

    constructor(){
    }
    public run(){
       // var a = new TWEEN.Tween()
        let scene = new THREE.Scene()
        App.scene = scene
        let renderer = new THREE.WebGLRenderer()
        App.renderer = renderer
        renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(renderer.domElement)
        let axis = new THREE.AxesHelper(10)
        scene.add(axis)
        App.setCamera()

        var mainGame = new game.Main_birds()
        mainGame.initUI()




        this.stattAni()
    }
    public stattAni(){
        Animate.run()
    }
}
//run
new Main().run()
// requestAnimationFrame(Animate.run)
// function animate(): void {requestAnimationFrame(animate);render()}
// function render(): void {App.renderer.render(App.scene, App.camera)}
// animate()







