
module App{
    export const loaderType = {
        loader : 0,
        Jsonloader:1, //默认
        FontLoader:2
    }
    export function Loader( url:string,cb:Function,target:any,type:number = loaderType.Jsonloader) {
        var loader
        switch (type){
            case loaderType.loader:
                break;
            case loaderType.Jsonloader:
                loader = new THREE.JSONLoader()
                break;
            case loaderType.FontLoader:
                loader = new THREE.FontLoader()
                break;
        }
        loader.load(url, function () {
             cb.apply(target,arguments)//.call(target,arguments)
        });
    }
    export function load(url:string,cb:Function,target:any) {
        var xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("MSXML2.XMLHTTP")

        xhr.open("GET", url, true)
        xhr.setRequestHeader("Content-Type","application/json;charset=UTF-8")
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 ){
                if(xhr.status == 200){
                    var res = xhr.response
                    cb.call(target,res)//.call(target,arguments)
                }
            }
        }
        xhr.send()
    }


}