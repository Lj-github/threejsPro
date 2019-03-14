// 每秒定时回调，不再自己添加timer
module SecTimeCb {
    export const FPS = 1000 / 30
    var timer: number //number  interval key
    function startSecCb() {
        if (!timer) {
            timer = window.setInterval(() => {
                SecTimeCb.updateList()
            }, SecTimeCb, FPS)
        }
    }

    export function updateList() {
        eventList.forEach((evt) => {
            evt.cb.call(evt.cbTgt)
        })
    }

    export let eventList: Array<event> = []

    interface event {
        cb: Function
        cbTgt: any
    }

    export function subscribe(callback: (...args) => any, cbTarget ?: any) {
        if (!timer) {
            startSecCb()
        }
        eventList.push({cb: callback, cbTgt: cbTarget})
    }

    export function unSubscribe(callback, cbTarget) {
        eventList = eventList.filter((evt) => {
            return evt.cbTgt != cbTarget || evt.cb != callback
        })
        if (eventList.length === 0) {
            window.clearInterval(timer)
            timer = undefined
        }
    }

    export function unsubscribeAllOnTarget(target: any) {
        if (!target) {
            return
        }
        eventList = eventList.filter((evt) => {
            return evt.cbTgt != target
        })
    }

}