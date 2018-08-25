module game{
    export class ReadMusic {

        public music : Music.ReadBuff
        public buf :any
        constructor(musicPath :string){
            this.initUI(musicPath)
        }
        initUI(musicPath:string){
            var music = new Music.ReadBuff(musicPath)

            this.music = music
            let audio :any = document.getElementById('audio');
            audio.play();
        }
        removeSelf(){

        }

    }
}