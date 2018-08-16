/**
 */
module Music{
    interface musicbuffObj {
        voicehigh:any
        step:any

    }

    export class ReadBuff{
        public LINENUM = 80;
        public SHAP = 2;//1:圆   2 ：柱 3 ：线
        public voicehigh :any;
        public stepp:any;
        public analyser:AnalyserNode;
        public init(){

            document.body.appendChild(this.createAudioElement())
            //<audio id="audio" style=" " src="shapeofyou.mp3"></audio>
            var audio :any = document.getElementById('audio');
            var actx=new AudioContext();
            audio.src="resource/music/Time.mp3";
            this.analyser=actx.createAnalyser();
            var audioSrc=actx.createMediaElementSource(audio);
            audioSrc.connect(this.analyser);
            this.analyser.connect(actx.destination);
        }
        public getBuff(){
            this.voicehigh=new Uint8Array(this.analyser.frequencyBinCount);
            this.analyser.getByteFrequencyData(this.voicehigh);
            this.stepp=Math.round(this.voicehigh.length/this.LINENUM);
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

    }
}
