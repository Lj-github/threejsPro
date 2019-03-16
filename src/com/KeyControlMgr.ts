// 键盘事件 管理器

module KeyControlMgr {
    export interface keyEvent {
        fun: Function
        tag: any
        keyCode: number
        type: number
    }

    export enum KeyType {
        Up = 0,
        Down
    }

    export const Key = {
        Q: 81,
        S: 83,
        A: 65,
        D: 68,
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39
    }


    var arrayDomEvent: Array<keyEvent> = []
    var allEventObj = {}

    export function startListen() {
        document.onkeydown = function (event) {
            var e = event || window.event || arguments.callee.caller.arguments[0];
            KeyControlMgr.onKeyUp(e)
        };
        document.onkeyup = function (event) {
            var e = event || window.event || arguments.callee.caller.arguments[0];
            KeyControlMgr.onKeyDown(e)
        };
    }

    export function onKeyUp(event) {
        arrayDomEvent.forEach((evt: keyEvent) => {
            if (evt.keyCode == event.keyCode && evt.type == KeyType.Up) {
                evt.fun.call(evt.tag, event.keyCode)
            }
        })
    }

    export function onKeyDown(event) {
        arrayDomEvent.forEach((evt: keyEvent) => {
            if (evt.keyCode == event.keyCode && evt.type == KeyType.Down) {
                evt.fun.call(evt.tag, event.keyCode)
            }
        })

    }

    export function addKeyUpEventListener(keyCode: number, fun: Function, target: any) {
        if (arrayDomEvent.length === 0) {
            startListen()
        }

        var item = <keyEvent>{}
        item.keyCode = keyCode
        item.fun = fun
        item.tag = target
        item.type = KeyType.Up
        arrayDomEvent.push(item)

    }

    export function addKeyDownEventListener(keyCode: number, fun: Function, target: any) {
        if (arrayDomEvent.length === 0) {
            startListen()
        }
        var item = <keyEvent>{}
        item.keyCode = keyCode
        item.fun = fun
        item.tag = target
        item.type = KeyType.Down
        arrayDomEvent.push(item)
    }

    export function removeKeyEventListener(type: string, fun: Function, tar: any) {
        arrayDomEvent = arrayDomEvent.filter((evt: keyEvent) => {
            return evt.tag != tar && evt.fun != fun
        })
    }

    export function removeKeyEventListenerByTar(tar: any) {
        arrayDomEvent = arrayDomEvent.filter((evt: keyEvent) => {
            return evt.tag != tar
        })
    }

    export function unRemoveKeyEventListenerByType(keyCode: number) {
        arrayDomEvent = arrayDomEvent.filter((evt: keyEvent) => {
            return evt.keyCode != keyCode
        })
    }

}

