var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by DELL on 2017/10/11.
 */
var Music;
(function (Music) {
    var Dre = (function () {
        function Dre() {
        }
        Dre.init = function () {
            //<audio id="audio" style=" " src="shapeofyou.mp3"></audio>
            var audio = document.getElementById('audio');
            var actx = new AudioContext();
            audio.src = "resource/music/Time.mp3";
            this.analyser = actx.createAnalyser();
            var audioSrc = actx.createMediaElementSource(audio);
            audioSrc.connect(this.analyser);
            this.analyser.connect(actx.destination);
            function draw() {
                console.log("dre");
                console.log(this.voicehigh);
                console.log(this.stepp);
                //call(this.voicehigh,this.stepp);
                for (var i = 1; i < this.LINENUM; i++) {
                    var value = this.voicehigh[this.stepp * i];
                    switch (this.SHAP) {
                        case 1:
                            //ctx.fillStyle=color;
                            //ctx.beginPath();
                            //ctx.arc(i*50,canvas.height*.5,value*.3,0,Math.PI*2,true);
                            //ctx.fill();
                            break;
                        case 2:
                            //ctx.fillStyle=color;
                            //ctx.fillRect(i*10+canvas.width*.5,250,7,-value+1);
                            //ctx.fillRect(canvas.width*.5-(i-1)*10,250,7,-value+1);
                            //ctx.fill();
                            //ctx.fillStyle=colort;
                            //ctx.fillRect(i*10+canvas.width*.5,250,7,value+1);
                            // ctx.fillRect(canvas.width*.5-(i-1)*10,250,7,value+1);
                            break;
                        case 3:
                            //moveTo(0,canvas.height*.5);
                            //ctx.lineTo(i*7+canvas.width*.5,-value+canvas.height*.5);
                            //ctx.strokeStyle="#f00";
                            //ctx.stroke();
                            break;
                    }
                }
            }
            //draw();
            // this.TIMER.addEventListener(egret.TimerEvent.TIMER,draw,this);
            //this.TIMER.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComFunc,this);
            //开始计时
            // this.TIMER.start();
        };
        Dre.prototype.arrayBuffer = function () {
        };
        Dre.getBuff = function () {
            this.voicehigh = new Uint8Array(this.analyser.frequencyBinCount);
            this.analyser.getByteFrequencyData(this.voicehigh);
            this.stepp = Math.round(this.voicehigh.length / this.LINENUM);
            var bf = {};
            bf["voicehigh"] = this.voicehigh;
            bf["step"] = this.stepp;
            //console.log(bf);
            return bf;
        };
        return Dre;
    }());
    Dre.LINENUM = 80;
    Dre.SHAP = 2; //1:圆   2 ：柱 3 ：线
    Dre.TIMER = new egret.Timer(1000 / 60, 0);
    Music.Dre = Dre;
    __reflect(Dre.prototype, "Music.Dre");
})(Music || (Music = {}));
//# sourceMappingURL=Dre.js.map