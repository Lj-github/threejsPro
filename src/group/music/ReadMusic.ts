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


        // public draw(){
        // let bf = Dre.getBuff();
        // let voicehigh = bf["voicehigh"];
        // let step = bf["step"];
        // if (this.layer){}
        // //this.layer.removeChildren();
        // for(let i=1;i<Dre.LINENUM;i++){
        //     let value=voicehigh[step*i];
        //     //console.log(value);
        //     if (i == 35){
        //         let group :any= this.getChildByName("heart");
        //         if (group){
        //
        //             let heart = group.getChildByName("shape");
        //             //if (heart){
        //                group.scaleX = group.scaleY = value/300;
        //             //}
        //         }
        //     }
        //     if (value && (value>0) ){
        //         //太耗内存
        //         let name = "shap_" + i;
        //         let shape :any = this.getChildByName(name);
        //         let col = shape.color;
        //         if (shape && !this.debug){
        //             shape.graphics.clear();
        //             shape.graphics.beginFill(col);
        //             shape.graphics.drawRect(this.WIDTH*.5-(i-1)*10,250,7,-value+1);
        //             shape.graphics.endFill();
        //             shape.color = col;
        //
        //         }
        //         let nameNum = Dre.LINENUM*2 - i;
        //         let name1 = "shap_" + nameNum;
        //         let shape1:any = this.getChildByName(name1)
        //         if (shape1&& !this.debug){
        //
        //             shape1.graphics.clear();
        //             shape1.graphics.beginFill( col);
        //             shape1.graphics.drawRect(i*10+this.WIDTH*.5,250,7,-value+1);
        //             shape1.graphics.endFill();
        //             shape1.color = col
        //         }
        //         //this.layer.addChild(shape);
        //     }
        // }
        //ctx.fillStyle=color;
        //ctx.fillRect(i*10+canvas.width*.5,250,7,-value+1);
        //ctx.fillRect(canvas.width*.5-(i-1)*10,250,7,-value+1);
        //ctx.fill();
        //ctx.fillStyle=colort;
        //ctx.fillRect(i*10+canvas.width*.5,250,7,value+1);
        //ctx.fillRect(canvas.width*.5-(i-1)*10,250,7,value+1);


    }
}