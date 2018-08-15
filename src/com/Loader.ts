module App{

    export function Loader(url:string,cb:Function,target:any) {
        var loader = new THREE.JSONLoader();
        loader.load(url, function () {

             cb.apply(target,arguments)//.call(target,arguments)
        });
    }

}