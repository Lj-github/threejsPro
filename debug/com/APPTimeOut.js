// 方便管理页面内多个TimeOut
var AppTimeOut;
(function (AppTimeOut) {
    var arrayTimers = [];
    function scheduleOnce(callback, cbTarget, dt) {
        for (let element of arrayTimers) {
            if (element.cb === callback) {
                console.log('timeout exist!');
                return;
            }
        }
        let timeOutKey = window.setTimeout(() => {
            for (let i = 0; i < arrayTimers.length; ++i) {
                let element = arrayTimers[i];
                if (element.cb === callback) {
                    arrayTimers.splice(i, 1);
                }
            }
            callback.call(cbTarget);
        }, cbTarget, dt);
        arrayTimers.push({ cb: callback, cbTgt: cbTarget, dt: dt, key: timeOutKey });
    }
    AppTimeOut.scheduleOnce = scheduleOnce;
    function unschedule(callback, cbTarget) {
        for (let i = 0; i < arrayTimers.length; ++i) {
            let element = arrayTimers[i];
            if (element.cb === callback && element.cbTgt === cbTarget) {
                window.clearTimeout(element.key);
                arrayTimers.splice(i, 1);
            }
        }
    }
    AppTimeOut.unschedule = unschedule;
    function unscheduleAllOnTarget(target) {
        if (!target) {
            return;
        }
        arrayTimers = arrayTimers.filter((evt) => {
            if (evt.cbTgt == target) {
                window.clearTimeout(evt.key);
            }
            return evt.cbTgt != target;
        });
    }
    AppTimeOut.unscheduleAllOnTarget = unscheduleAllOnTarget;
})(AppTimeOut || (AppTimeOut = {}));
