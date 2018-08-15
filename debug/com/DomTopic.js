// 方便管理页面内多个TimeOut
var DomTopic;
(function (DomTopic) {
    DomTopic.mousemove = "mousemove";
    DomTopic.resize = "resize";
    var arrayDomEvent = [];
    var allEventObj = {};
    function startListen() {
        document.addEventListener('mousemove', onDocumentMouseMove, false);
        window.addEventListener('resize', onWindowResize, false);
    }
    DomTopic.startListen = startListen;
    function onDocumentMouseMove(event) {
        // var pos = <any>{}
        // pos.x = event.clientX
        // pos.y = event.clientY
        arrayDomEvent.forEach((evt) => {
            if (evt.type == DomTopic.mousemove) {
                evt.fun.call(evt.tag, event);
            }
        });
    }
    DomTopic.onDocumentMouseMove = onDocumentMouseMove;
    function onWindowResize(event) {
        // var pos = <any>{}
        // pos.x = event.clientX
        // pos.y = event.clientY
        arrayDomEvent.forEach((evt) => {
            if (evt.type == DomTopic.resize) {
                evt.fun.call(event);
            }
        });
    }
    DomTopic.onWindowResize = onWindowResize;
    function addDomEventListener(type, fun, target) {
        var item = {};
        item.type = type;
        item.fun = fun;
        item.tag = target;
        arrayDomEvent.push(item);
    }
    DomTopic.addDomEventListener = addDomEventListener;
    function unRemoveDomEventListener(type, fun, tar) {
        arrayDomEvent = arrayDomEvent.filter((evt) => {
            return evt.tag != tar && evt.fun != fun;
        });
    }
    DomTopic.unRemoveDomEventListener = unRemoveDomEventListener;
    function unRemoveDomEventListenerByTarget(tar) {
        arrayDomEvent = arrayDomEvent.filter((evt) => {
            return evt.tag != tar;
        });
    }
    DomTopic.unRemoveDomEventListenerByTarget = unRemoveDomEventListenerByTarget;
    function unRemoveDomEventListenerByType(type) {
        arrayDomEvent = arrayDomEvent.filter((evt) => {
            return evt.type != type;
        });
    }
    DomTopic.unRemoveDomEventListenerByType = unRemoveDomEventListenerByType;
})(DomTopic || (DomTopic = {}));
