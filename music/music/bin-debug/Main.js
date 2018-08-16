var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Dre = Music.Dre;
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.WIDTH = 960;
        _this.HEIGHT = 640;
        _this.TIMER = new egret.Timer(1000 / 60, 0);
        _this.debug = true;
        _this.isThemeLoadEnd = false;
        _this.isResourceLoadEnd = false;
        return _this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        //Config loading process interface
        //设置加载进度界面
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        // initialize the Resource loading library
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载皮肤主题资源和preload资源组。
     * Loading of configuration file is complete, start to pre-load the theme configuration file and the preload resource group
     */
    Main.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        // load skin theme configuration file, you can manually modify the file. And replace the default skin.
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        var theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    };
    /**
     * 主题文件加载完成,开始预加载
     * Loading of theme configuration file is complete, start to pre-load the
     */
    Main.prototype.onThemeLoadComplete = function () {
        this.isThemeLoadEnd = true;
        this.createScene();
    };
    /**
     * preload资源组加载完成
     * preload resource group is loaded
     */
    Main.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.isResourceLoadEnd = true;
            this.createScene();
        }
    };
    Main.prototype.createScene = function () {
        if (this.isThemeLoadEnd && this.isResourceLoadEnd) {
            this.startCreateScene();
        }
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    Main.prototype.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    /**
     * 资源组加载出错
     * Resource group loading failed
     */
    Main.prototype.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //ignore loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     * loading process of preload resource
     */
    Main.prototype.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.startCreateScene = function () {
        this.layer = new eui.Component();
        Dre.init();
        this.initCanvas();
        egret.callLater(function () {
            //this.anchorOffsetX = this.width / 2;
            //this.anchorOffsetY = this.height / 2;
        }, this);
        var heart = LineGroup.drawLine();
        heart["name"] = "heart";
        heart.x = 100;
        heart.y = 100;
        this.addChild(heart);
    };
    Main.prototype.draw = function () {
        var bf = Dre.getBuff();
        var voicehigh = bf["voicehigh"];
        var step = bf["step"];
        if (this.layer) { }
        //this.layer.removeChildren();
        for (var i = 1; i < Dre.LINENUM; i++) {
            var value = voicehigh[step * i];
            //console.log(value);
            if (i == 35) {
                var group = this.getChildByName("heart");
                if (group) {
                    var heart = group.getChildByName("shape");
                    //if (heart){
                    group.scaleX = group.scaleY = value / 300;
                    //}
                }
            }
            if (value && (value > 0)) {
                //太耗内存
                var name_1 = "shap_" + i;
                var shape = this.getChildByName(name_1);
                var col = shape.color;
                if (shape && !this.debug) {
                    shape.graphics.clear();
                    shape.graphics.beginFill(col);
                    shape.graphics.drawRect(this.WIDTH * .5 - (i - 1) * 10, 250, 7, -value + 1);
                    shape.graphics.endFill();
                    shape.color = col;
                }
                var nameNum = Dre.LINENUM * 2 - i;
                var name1 = "shap_" + nameNum;
                var shape1 = this.getChildByName(name1);
                if (shape1 && !this.debug) {
                    shape1.graphics.clear();
                    shape1.graphics.beginFill(col);
                    shape1.graphics.drawRect(i * 10 + this.WIDTH * .5, 250, 7, -value + 1);
                    shape1.graphics.endFill();
                    shape1.color = col;
                }
                //this.layer.addChild(shape);
            }
        }
        //ctx.fillStyle=color;
        //ctx.fillRect(i*10+canvas.width*.5,250,7,-value+1);
        //ctx.fillRect(canvas.width*.5-(i-1)*10,250,7,-value+1);
        //ctx.fill();
        //ctx.fillStyle=colort;
        //ctx.fillRect(i*10+canvas.width*.5,250,7,value+1);
        //ctx.fillRect(canvas.width*.5-(i-1)*10,250,7,value+1);
    };
    /**
     * 初始化条目
     */
    Main.prototype.initCanvas = function () {
        console.log("init");
        for (var i = 1; i < Dre.LINENUM * 2; i++) {
            var col = this.getRandomColor();
            var shape = new egret.Shape();
            shape.graphics.beginFill(col);
            shape.graphics.drawRect(this.WIDTH * .5 - (i - 1) * 10, 250, 7, 10);
            shape.graphics.endFill();
            shape.name = "shap_" + i;
            shape["color"] = col;
            this.addChild(shape);
            console.log("------");
        }
        console.log(this);
        var audio = document.getElementById('audio');
        audio.play();
        this.layer.width = this.WIDTH;
        this.layer.height = this.HEIGHT;
        this.addChild(this.layer);
        this.layer.x = 0;
        this.layer.y = 0;
        this.TIMER.addEventListener(egret.TimerEvent.TIMER, this.draw, this);
        //this.TIMER.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComFunc,this);
        //开始计时
        this.TIMER.start();
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    Main.prototype.getRandomColor = function () {
        return '0x' +
            (function (color) {
                return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)])
                    && (color.length == 6) ? color : arguments.callee(color);
            })('');
    };
    /**
     * 点击按钮
     * Click the button
     */
    Main.prototype.onButtonClick = function (e) {
        var panel = new eui.Panel();
        panel.title = "Title";
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.addChild(panel);
    };
    return Main;
}(eui.UILayer));
