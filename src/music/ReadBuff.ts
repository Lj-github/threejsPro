/**
 *
 */


//todo 添加 播放 控制 新建个类 （如果可以的话 控制快进  快退） 控制歌词 进行 3d 滚动  ！！！
//todo 待考虑 可能需要 后端 解析 lrc 文件(歌词文件)
module Music{

    export  interface musicbuffObj {
        voicehigh:any
        step:any
    }
    export class ReadBuff{
        public LINENUM = 80;
        public SHAP = 2;//1:圆   2 ：柱 3 ：线
        public voicehigh :any;
        public stepp:any;
        public analyser:AnalyserNode;
          private musicFilePath = "resource/music.json"
        constructor(musicUrl:string){
            this.init(musicUrl)
        }
        public init(musicUrl:string){
            App.load(this.musicFilePath,this.getAllMusic,this)
            document.body.appendChild(this.createAudioElement())
            //<audio id="audio" style=" " src="shapeofyou.mp3"></audio>
            var audio :any = document.getElementById('audio');
            var actx = new AudioContext();
            audio.src= musicUrl ;//";
            this.analyser=actx.createAnalyser();
            var audioSrc=actx.createMediaElementSource(audio);
            audioSrc.connect(this.analyser);
            this.analyser.connect(actx.destination);
        }
        public getBuff(){
            this.voicehigh = new Uint8Array(this.analyser.frequencyBinCount);
            this.analyser.getByteFrequencyData(this.voicehigh);
            this.stepp = Math.round(this.voicehigh.length/this.LINENUM);
            let bf = <musicbuffObj>{};
            bf.voicehigh = this.voicehigh;
            bf.step = this.stepp;
            return bf;
        }
        public createAudioElement(id:string = "audio"){
            var audio = document.createElement("audio")
            audio.id = id
            return audio
        }

        public getAllMusic(json){
              console.log(json)



        }
    }
}
