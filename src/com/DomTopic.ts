// 方便管理页面内多个TimeOut
module DomTopic{
    interface domEvent {
        cb:Function
        cbTgt:any
        dt:number
        key:number
    }
    var arrayDomEvent:Array<domEvent> = []
    var allEventObj = {}
    // export function startListen(){
    //     document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    //     window.addEventListener( 'resize', onWindowResize, false );
    // }
    // export function onDocumentMouseMove(event){
    //
    //     var mouseX = event.clientX
    //     var mouseY = event.clientY
    //
    // }


    export function scheduleOnce(callback:Function, cbTarget :any, dt:number) {
        for (let element of arrayDomEvent) {
            if (element.cb === callback) {
                console.log('timeout exist!')
                return
            }
        }
        let timeOutKey = window.setTimeout(()=> {
            for (let i=0; i<arrayDomEvent.length; ++i) {
                let element = arrayDomEvent[i]
                if (element.cb === callback) {
                    arrayDomEvent.splice(i, 1)
                }
            }
            callback.call(cbTarget)
        }, cbTarget, dt)
        arrayDomEvent.push({cb:callback,cbTgt:cbTarget, dt:dt, key:timeOutKey})
    }

    export function unschedule(callback:Function, cbTarget) {
        for (let i=0; i<arrayDomEvent.length; ++i) {
            let element = arrayDomEvent[i]
            if (element.cb === callback && element.cbTgt === cbTarget) {
                window.clearTimeout(element.key)
                arrayDomEvent.splice(i, 1)
            }
        }
    }


    export function unscheduleAllOnTarget(target:any){
        if (!target){
            return
        }
        arrayDomEvent = arrayDomEvent.filter((evt)=>{
            if (evt.cbTgt == target){
                window.clearTimeout(evt.key)
            }
            return evt.cbTgt != target
        })
    }

}