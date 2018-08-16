
import Dre = Music.Dre;
class Main extends eui.UILayer {
    public layer  :eui.Component;
    private WIDTH=960;
    private HEIGHT = 640;
    private TIMER =  new egret.Timer(1000/60,0);
    public debug = true;
    /**
     * 加载进度界面
     * loading process interface
     */
    private loadingView: LoadingUI;
    protected createChildren(): void {
        super.createChildren();
        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter",assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter());
        //Config loading process interface
        //设置加载进度界面
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        // initialize the Resource loading library
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }
    /**
     * 配置文件加载完成,开始预加载皮肤主题资源和preload资源组。
     * Loading of configuration file is complete, start to pre-load the theme configuration file and the preload resource group
     */
    private onConfigComplete(event:RES.ResourceEvent):void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        // load skin theme configuration file, you can manually modify the file. And replace the default skin.
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        let theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    }
    private isThemeLoadEnd: boolean = false;
    /**
     * 主题文件加载完成,开始预加载
     * Loading of theme configuration file is complete, start to pre-load the 
     */
    private onThemeLoadComplete(): void {
        this.isThemeLoadEnd = true;
        this.createScene();
    }
    private isResourceLoadEnd: boolean = false;
    /**
     * preload资源组加载完成
     * preload resource group is loaded
     */
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.isResourceLoadEnd = true;
            this.createScene();
        }
    }
    private createScene(){
        if(this.isThemeLoadEnd && this.isResourceLoadEnd){
            this.startCreateScene();
        }
    }
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onItemLoadError(event:RES.ResourceEvent):void {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }
    /**
     * 资源组加载出错
     * Resource group loading failed
     */
    private onResourceLoadError(event:RES.ResourceEvent):void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //ignore loading failed projects
        this.onResourceLoadComplete(event);
    }
    /**
     * preload资源组加载进度
     * loading process of preload resource
     */
    private onResourceProgress(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }
    private textfield:egret.TextField;
    /**
     * 创建场景界面
     * Create scene interface
     */
    public startCreateScene() {
        this.layer = new eui.Component();
        Dre.init();
        this.initCanvas();
        egret.callLater(() => {
            //this.anchorOffsetX = this.width / 2;
            //this.anchorOffsetY = this.height / 2;
        }, this);

        let heart  = LineGroup.drawLine();

        heart["name"] = "heart";
        heart.x = 100;
        heart.y = 100;
        this.addChild(heart)
    }
    public draw(){
        let bf = Dre.getBuff();
        let voicehigh = bf["voicehigh"];
        let step = bf["step"];
        if (this.layer){}
        //this.layer.removeChildren();
        for(let i=1;i<Dre.LINENUM;i++){
            let value=voicehigh[step*i];
            //console.log(value);
            if (i == 35){
                let group :any= this.getChildByName("heart");
                if (group){

                    let heart = group.getChildByName("shape");
                    //if (heart){
                       group.scaleX = group.scaleY = value/300;
                    //}
                }
            }
            if (value && (value>0) ){
                //太耗内存
                let name = "shap_" + i;
                let shape :any = this.getChildByName(name);
                let col = shape.color;
                if (shape && !this.debug){
                    shape.graphics.clear();
                    shape.graphics.beginFill(col);
                    shape.graphics.drawRect(this.WIDTH*.5-(i-1)*10,250,7,-value+1);
                    shape.graphics.endFill();
                    shape.color = col;

                }
                let nameNum = Dre.LINENUM*2 - i;
                let name1 = "shap_" + nameNum;
                let shape1:any = this.getChildByName(name1)
                if (shape1&& !this.debug){

                    shape1.graphics.clear();
                    shape1.graphics.beginFill( col);
                    shape1.graphics.drawRect(i*10+this.WIDTH*.5,250,7,-value+1);
                    shape1.graphics.endFill();
                    shape1.color = col
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
    }
    /**
     * 初始化条目
     */
    public initCanvas(){
        console.log("init");
        for(let i=1;i<Dre.LINENUM*2;i++){
            let col = <any>this.getRandomColor();
            let shape:egret.Shape = new egret.Shape();
            shape.graphics.beginFill(col );
            shape.graphics.drawRect(this.WIDTH*.5-(i-1)*10,250,7,10);
            shape.graphics.endFill();
            shape.name = "shap_" + i;
            shape["color"] = col
            this.addChild(shape);
            console.log("------");

        }
        console.log(this);
        let audio :any = document.getElementById('audio');
        audio.play();
        this.layer.width = this.WIDTH;
        this.layer.height = this.HEIGHT;
        this.addChild(this.layer);
        this.layer.x = 0;
        this.layer.y = 0;
        this.TIMER.addEventListener(egret.TimerEvent.TIMER,this.draw,this);
        //this.TIMER.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComFunc,this);
        //开始计时
        this.TIMER.start();
    }
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name:string):egret.Bitmap {
        let result = new egret.Bitmap();
        let texture:egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    private getRandomColor() {
        return '0x' +
            (function (color) {
                return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)])
                && (color.length == 6) ? color : arguments.callee(color);
            })('');
    }
    /**
     * 点击按钮
     * Click the button
     */
    private onButtonClick(e: egret.TouchEvent) {
        let panel = new eui.Panel();
        panel.title = "Title";
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.addChild(panel);
    }
}