// 每秒定时回调，不再自己添加timer
module SecTimeCb{
    // var timer:egret.Timer
    // function startSecCb(){
    //     if (!timer){
    //         timer = new egret.Timer(1000,0)
    //         timer.addEventListener(egret.TimerEvent.TIMER, updateList, SecTimeCb)
    //         timer.start()
    //     }
    // }
    //
    // function updateList(){
    //     eventList.forEach((evt)=>{
    //         evt.cb.call(evt.cbTgt)
    //     })
    // }
    //
    // var eventList:Array<event> = []
    // interface event {
    //     cb:Function
    //     cbTgt:any
    // }
    //
    // export function subscribe(callback:(...args) => any, cbTarget ?:any){
    //     if (!timer){
    //         startSecCb()
    //     }
    //     eventList.push({cb:callback,cbTgt:cbTarget})
    // }
    //
    // export function unSubscribe(callback, cbTarget){
    //     eventList.push({cb:callback,cbTgt:cbTarget})
    //     eventList = eventList.filter((evt)=>{
    //         return evt.cbTgt != cbTarget || evt.cb != callback
    //     })
    // }
    //
    // export function unsubscribeAllOnTarget(target:any){
    //     if (!target){
    //         return
    //     }
    //     eventList = eventList.filter((evt)=>{
    //         return evt.cbTgt != target
    //     })
    // }

}