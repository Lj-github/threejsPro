// animate 所有

namespace Animate{
    let allRunTag = []
    export interface allRunTagInfo {
        fun:Function,
        tag:any,
        loop:boolean
    }

    export function run() {
        App.renderer.render(App.scene, App.camera)
         allRunTag.forEach((evt:allRunTagInfo)=>{
             evt.fun.call(evt.tag)
        })
        requestAnimationFrame(Animate.run)
    }
     export function start() {

    }

    /**
     *
     * @param {Function} fun
     * @param tag
     * @param {boolean} loop 是否无限执行
     */
    export function addRenderRunFunction(fun:Function,tag:any,loop :boolean = true) {
        var item = <allRunTagInfo>{}
        item.fun = fun
        item.loop = loop
        item.tag = tag
        allRunTag.push(item)
    }


}

