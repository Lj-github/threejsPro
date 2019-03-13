// 方便管理页面内多个TimeOut
module DomTopic {
    export interface domEvent {
        fun: Function
        tag: any
        type: string
    }

    export const event = {
        mousemove: "mousemove",
        mousedown: "mousedown",
        mouseup: 'mouseup',
        resize: "resize"
    }

    export const mousemove = event.mousemove
    export const resize = event.resize
    var arrayDomEvent: Array<domEvent> = []
    var allEventObj = {}
    export function startListen() {
        document.addEventListener(event.mousemove, onDocumentMouseMove, false);
        document.addEventListener(event.mouseup, onDocumentMouseUp, false);
        document.addEventListener(event.mousedown, onDocumentMouseDown, false)
        window.addEventListener(event.resize, onWindowResize, false);
    }

    export function onDocumentMouseMove(event) {
        // var pos = <any>{}
        // pos.x = event.clientX
        // pos.y = event.clientY
        arrayDomEvent.forEach((evt: domEvent) => {
            if (evt.type == mousemove) {
                evt.fun.call(evt.tag, event)
            }
        })

    }

    export function onDocumentMouseUp(eve) {
        arrayDomEvent.forEach((evt: domEvent) => {
            if (evt.type == event.mouseup) {
                evt.fun.call(evt.tag, eve)
            }
        })
    }

    export function onDocumentMouseDown(eve) {
        arrayDomEvent.forEach((evt: domEvent) => {
            if (evt.type == event.mousedown) {
                evt.fun.call(evt.tag, eve)
            }
        })
    }

    export function onWindowResize(event) {
        // var pos = <any>{}
        // pos.x = event.clientX
        // pos.y = event.clientY
        arrayDomEvent.forEach((evt: domEvent) => {
            if (evt.type == resize) {
                evt.fun.call(event)
            }
        })
    }

    export function addDomEventListener(type: string, fun: Function, target: any) {
        var item = <domEvent>{}
        item.type = type
        item.fun = fun
        item.tag = target
        arrayDomEvent.push(item)
    }

    export function unRemoveDomEventListener(type: string, fun: Function, tar: any) {
        arrayDomEvent = arrayDomEvent.filter((evt: domEvent) => {
            return evt.tag != tar && evt.fun != fun
        })
    }

    export function unRemoveDomEventListenerByTarget(tar: any) {
        arrayDomEvent = arrayDomEvent.filter((evt: domEvent) => {
            return evt.tag != tar
        })
    }

    export function unRemoveDomEventListenerByType(type: string) {
        arrayDomEvent = arrayDomEvent.filter((evt: domEvent) => {
            return evt.type != type
        })
    }

}