module game{
    export class ReadMusic {
        public music : Music.ReadBuff
        constructor(){

        }
        initUI(){
            var music = new Music.ReadBuff()
            music.init()
            this.music = music
            Animate.addRenderRunFunction(this.getBuff, this)
            let audio :any = document.getElementById('audio');
            audio.play();
        }
        removeSelf(){

        }
        public getBuff(){
            var buf = this.music.getBuff()
            console.log(buf)
        }
    }
}