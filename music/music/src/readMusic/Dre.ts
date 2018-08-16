/**
 * Created by DELL on 2017/10/11.
 */
module Music{
    export class Dre{
        public static LINENUM = 80;
        public static SHAP = 2;//1:圆   2 ：柱 3 ：线
        public static TIMER =  new egret.Timer(1000/60,0);

        public static voicehigh :any;
        public static stepp:any;
        public static analyser:any;
        public static init(){

            //<audio id="audio" style=" " src="shapeofyou.mp3"></audio>

            var audio :any = document.getElementById('audio');
            var actx=new AudioContext();
            audio.src="resource/music/Time.mp3";

            this.analyser=actx.createAnalyser();
            var audioSrc=actx.createMediaElementSource(audio);
            audioSrc.connect(this.analyser);
            this.analyser.connect(actx.destination);


            function draw(){


                console.log("dre");
                console.log(this.voicehigh);
                console.log(this.stepp);


                //call(this.voicehigh,this.stepp);

                for(var i=1;i<this.LINENUM;i++){
                    var value=this.voicehigh[this.stepp*i];


                    switch(this.SHAP){
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

                    //ctx.stroke();
                }
            }
            //draw();
           // this.TIMER.addEventListener(egret.TimerEvent.TIMER,draw,this);
            //this.TIMER.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComFunc,this);
            //开始计时
           // this.TIMER.start();





        }
        private arrayBuffer(){

        }
        public static getBuff(){

            this.voicehigh=new Uint8Array(this.analyser.frequencyBinCount);
            this.analyser.getByteFrequencyData(this.voicehigh);
            this.stepp=Math.round(this.voicehigh.length/this.LINENUM);

            let bf = {};
            bf["voicehigh"] = this.voicehigh;
            bf["step"] = this.stepp;
            //console.log(bf);
            return   bf;


        }



    }
}
