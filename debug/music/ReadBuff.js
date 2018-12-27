/**
 *
 */
//todo 添加 播放 控制 新建个类 （如果可以的话 控制快进  快退） 控制歌词 进行 3d 滚动  ！！！
//todo 待考虑 可能需要 后端 解析 lrc 文件(歌词文件)
var Music;
(function (Music) {
    class ReadBuff {
        constructor(musicUrl) {
            this.LINENUM = 80;
            this.SHAP = 2; //1:圆   2 ：柱 3 ：线
            this.musicFilePath = "resource/music.json";
            this.bf = {};
            this.init(musicUrl);
        }
        init(musicUrl) {
            if (!musicUrl) {
                console.error("no musicUrl init !!!");
                return;
            }
            App.load(this.musicFilePath, this.getAllMusic, this);
            document.body.appendChild(this.createAudioElement());
            //<audio id="audio" style=" " src="shapeofyou.mp3"></audio>
            var audio = document.getElementById('audio');
            var actx = this.getAudioContext();
            audio.src = musicUrl; //";
            this.analyser = actx.createAnalyser();
            var audioSrc = actx.createMediaElementSource(audio);
            audioSrc.connect(this.analyser);
            this.analyser.connect(actx.destination);
        }
        getBuff() {
            this.bf = {};
            this.voicehigh = new Uint8Array(this.analyser.frequencyBinCount);
            this.analyser.getByteFrequencyData(this.voicehigh);
            this.stepp = Math.round(this.voicehigh.length / this.LINENUM);
            this.bf.voicehigh = this.voicehigh;
            this.bf.step = this.stepp;
            return this.bf;
        }
        createAudioElement(id = "audio") {
            var audio = document.createElement("audio");
            audio.id = id;
            return audio;
        }
        getAllMusic(json) {
            console.log(json);
        }
        getAudioContext() {
            try {
                var AudioContext = window["AudioContext"] || window["webkitAudioContext"];
                return new AudioContext();
            }
            catch (e) {
                alert('NMLGBD 你的浏览器连个Web-Audio-API 都不支持！！');
            }
            return null;
        }
    }
    Music.ReadBuff = ReadBuff;
})(Music || (Music = {}));
