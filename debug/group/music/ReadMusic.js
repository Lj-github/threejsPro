var game;
(function (game) {
    class ReadMusic {
        constructor(musicPath) {
            this.initUI(musicPath);
        }
        initUI(musicPath) {
            var music = new Music.ReadBuff(musicPath);
            this.music = music;
            let audio = document.getElementById('audio');
            audio.play();
        }
        removeSelf() {
        }
    }
    game.ReadMusic = ReadMusic;
})(game || (game = {}));
