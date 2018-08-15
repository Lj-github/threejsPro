// 方便管理页面内多个TimeOut
namespace AppTimeOut{
    interface timerEvent {
        cb:Function
        cbTgt:any
        dt:number
        key:number
    }
    var arrayTimers:Array<timerEvent> = []


    export function scheduleOnce(callback:Function, cbTarget :any, dt:number) {
        for (let element of arrayTimers) {
            if (element.cb === callback) {
                console.log('timeout exist!')
                return
            }
        }
        let timeOutKey = window.setTimeout(()=> {
            for (let i=0; i<arrayTimers.length; ++i) {
                let element = arrayTimers[i]
                if (element.cb === callback) {
                    arrayTimers.splice(i, 1)
                }
            }            
            callback.call(cbTarget)
        }, cbTarget, dt)
        arrayTimers.push({cb:callback,cbTgt:cbTarget, dt:dt, key:timeOutKey})
    }

    export function unschedule(callback:Function, cbTarget) {
        for (let i=0; i<arrayTimers.length; ++i) {
            let element = arrayTimers[i]
            if (element.cb === callback && element.cbTgt === cbTarget) {
                window.clearTimeout(element.key)
                arrayTimers.splice(i, 1)
            }
        }
    }


    export function unscheduleAllOnTarget(target:any){
        if (!target){
            return
        }
        arrayTimers = arrayTimers.filter((evt)=>{
            if (evt.cbTgt == target){
                window.clearTimeout(evt.key)
            }
            return evt.cbTgt != target
        })        
    }

}