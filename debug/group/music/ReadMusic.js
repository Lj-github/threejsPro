var game;
(function (game) {
    class ReadMusic {
        constructor(musicPath) {
            this.initUI(musicPath);
        }
        initUI(musicPath) {
            var music = new Music.ReadBuff(musicPath);
            this.music = music;
            Animate.addRenderRunFunction(this.getBuff, this);
            let audio = document.getElementById('audio');
            audio.play();
        }
        removeSelf() {
        }
        getBuff() {
            var buf = this.music.getBuff();
            Topic.publish("readMusicBuff", buf);
        }
    }
    game.ReadMusic = ReadMusic;
})(game || (game = {}));
