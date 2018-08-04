
module game {

    export class Main_birds {
        birds :Array<THREE.Mesh>;
        boids = [];
        constructor(){
            //game.Main.addWindowEventListener(){}
        }
        private initUI(){
            var a = this.birds[0]

            for ( var i = 0; i < 200; i ++ ) {

                var boid = this.boids[ i ] = new Boid();
                boid.position.x = Math.random() * 400 - 200;
                boid.position.y = Math.random() * 400 - 200;
                boid.position.z = Math.random() * 400 - 200;
                boid.velocity.x = Math.random() * 2 - 1;
                boid.velocity.y = Math.random() * 2 - 1;
                boid.velocity.z = Math.random() * 2 - 1;
                boid.setAvoidWalls( true );
                boid.setWorldSize( 500, 500, 400 );

                var bird = this.birds[i] = new THREE.Mesh( new Bird(), new THREE.MeshBasicMaterial( { color:Math.random() * 0xffffff, side: THREE.DoubleSide } ) );
                //bird.phase = Math.floor( Math.random() * 62.83 );
                App.scene.add( bird );


            }

        }
    }
}