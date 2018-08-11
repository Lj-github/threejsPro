// 原来简单地消息机制
var Topic;
(function (Topic) {
    var eventMaps = {};
    function subscribe(topic, callback, cbTarget, once) {
        // ("loop ------EZTopic.subscribe："+topic);
        var events = eventMaps[topic];
        if (!events) {
            events = [];
            eventMaps[topic] = events;
        }
        events.push({
            target: cbTarget,
            invoker: callback,
            once: once || false
        });
    }
    Topic.subscribe = subscribe;
    function unsubscribe(callback, cbTarget) {
        // ("loop ------EZTopic.unsubscribe");
        var eventMapsBake = eventMaps;
        Object.keys(eventMaps).forEach((key) => {
            var items = eventMaps[key].filter((item) => {
                return item.target != cbTarget || item.invoker != callback;
            }); // 找到不等于 target 的保留下来
            eventMapsBake[key] = items;
        });
    }
    Topic.unsubscribe = unsubscribe;
    function unsubscribeAllOnTarget(target) {
        // ("loop ------EZTopic.unsubscribeAllOnTarget");
        if (!target) {
            return;
        }
        var eventMapsBake = eventMaps;
        Object.keys(eventMaps).forEach((key) => {
            var items = eventMaps[key].filter((item) => {
                return item.target != target;
            }); // 找到不等于 target 的保留下来
            eventMapsBake[key] = items;
        });
    }
    Topic.unsubscribeAllOnTarget = unsubscribeAllOnTarget;
    function publish(...args) {
        if (!arguments || arguments.length <= 0) {
            return;
        }
        var topicId = arguments[0];
        // ("loop ------EZTopic.publish:"+topicId);
        var newArgs = Array.prototype.splice.call(arguments, 1);
        var events = eventMaps[topicId];
        if (events && events.length > 0) {
            // invoker回调中有可能会对events进行修改，所以必须等所有回调执行完成之后，才能处理once参数
            var list = [];
            list.push(events);
            for (let event of events) {
                event.invoker.apply(event.target, newArgs);
            }
            // # 重新取值
            events = eventMaps[topicId];
            // # 排除掉只能执行一次的那些 event
            var keeps = events.filter((event) => {
                return !event.once;
            });
            eventMaps[topicId] = keeps;
        }
    }
    Topic.publish = publish;
})(Topic || (Topic = {}));
