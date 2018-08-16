module game{
    export class ReadMusic {

        public music : Music.ReadBuff
        constructor(musicPath :string){
            this.initUI(musicPath)
        }
        initUI(musicPath:string){
            var music = new Music.ReadBuff(musicPath)

            this.music = music
            Animate.addRenderRunFunction(this.getBuff, this)
            let audio :any = document.getElementById('audio');
            audio.play();

        }
        removeSelf(){

        }
        public getBuff(){
            var buf = this.music.getBuff()

            Topic.publish("readMusicBuff",buf)
        }
    }
}