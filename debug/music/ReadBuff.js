/**
 *
 */
var Music;
(function (Music) {
    class ReadBuff {
        constructor(musicUrl) {
            this.LINENUM = 80;
            this.SHAP = 2; //1:圆   2 ：柱 3 ：线
            this.init(musicUrl);
        }
        init(musicUrl) {
            document.body.appendChild(this.createAudioElement());
            //<audio id="audio" style=" " src="shapeofyou.mp3"></audio>
            var audio = document.getElementById('audio');
            var actx = new AudioContext();
            audio.src = musicUrl; //";
            this.analyser = actx.createAnalyser();
            var audioSrc = actx.createMediaElementSource(audio);
            audioSrc.connect(this.analyser);
            this.analyser.connect(actx.destination);
        }
        getBuff() {
            this.voicehigh = new Uint8Array(this.analyser.frequencyBinCount);
            this.analyser.getByteFrequencyData(this.voicehigh);
            this.stepp = Math.round(this.voicehigh.length / this.LINENUM);
            let bf = {};
            bf.voicehigh = this.voicehigh;
            bf.step = this.stepp;
            return bf;
        }
        createAudioElement(id = "audio") {
            var audio = document.createElement("audio");
            audio.id = id;
            return audio;
        }
    }
    Music.ReadBuff = ReadBuff;
})(Music || (Music = {}));
