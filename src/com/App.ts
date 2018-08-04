
module App {

    export let renderer :THREE.WebGLRenderer
    export let randerType  = 1 //0: canvas, 1 : webgl
    export let scene:THREE.Scene
    export let camera:THREE.PerspectiveCamera
    export interface pos {
        x: number;
        y: number;
        z: number;
    }
    export const width = window.innerWidth

    export const height = window.innerHeight

    /**
     * Window 添加事件
     * @param {string} uiEvent
     * @param fun
     */
    export  function addWindowEventListener(uiEvent:string,fun:any,target:any){
        window.addEventListener( uiEvent, fun, false );
    }

    /**
     * Dom 添加事件
     * @param {string} uiEvent
     * @param fun
     */
    export function addDocumentEventListener(uiEvent:string,fun:any,options:Boolean){
        document.addEventListener( uiEvent, fun, false );
    }

    export function setCamera(fov?:number,aspect?:number,near?:number,far?:number,pos?:pos){
        let camera = new THREE.PerspectiveCamera(fov || 75, aspect || window.innerWidth / window.innerHeight, near || 0.1, far ||1000)
        App.camera = camera
        camera.position.x = pos? pos.x: 5
        camera.position.y = pos? pos.y: 5
        camera.position.z = pos? pos.z: 5
        camera.lookAt(App.scene.position)
    }
}