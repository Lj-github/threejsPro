var game;
(function (game) {
    class ReadMusic {
        constructor() {
            this.initUI();
        }
        initUI() {
            var music = new Music.ReadBuff();
            music.init();
            this.music = music;
            Animate.addRenderRunFunction(this.getBuff, this);
            let audio = document.getElementById('audio');
            audio.play();
        }
        removeSelf() {
        }
        getBuff() {
            var buf = this.music.getBuff();
            console.log(buf);
            Topic.publish("readMusicBuff", buf);
        }
    }
    game.ReadMusic = ReadMusic;
})(game || (game = {}));
