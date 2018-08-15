module game {

    export class Main_birds {
        birds :Array<any>;
        boids = [];
        constructor(){
            //game.Main.addWindowEventListener(){}
        }
        public initUI(){
            this.birds = []


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
                bird["phase"] = Math.floor( Math.random() * 62.83 );
                App.scene.add( bird );
            }
            DomTopic.addDomEventListener( DomTopic.mousemove, this.onDocumentMouseMove, this)
            DomTopic.addDomEventListener(DomTopic.resize, this.onWindowResize, this)
            Animate.addRenderRunFunction(this.animate,this)


        }
        public removeSelf(){
            for ( var i = 0; i < 200; i ++ ) {
                var bird = this.birds[i]
                App.scene.remove( bird );
            }
        }
        public animate(){

            for ( var i = 0, il = this.birds.length; i < il; i++ ) {

					var boid = this.boids[ i ];
					boid.run( this.boids );

					var bird = this.birds[ i ];
					bird.position.copy( this.boids[ i ].position );

					var color = bird.material.color;
					color.r = color.g = color.b = ( 500 - bird.position.z ) / 1000;

					bird.rotation.y = Math.atan2( - boid.velocity.z, boid.velocity.x );
					bird.rotation.z = Math.asin( boid.velocity.y / boid.velocity.length() );

					bird.phase = ( bird.phase + ( Math.max( 0, bird.rotation.z ) + 0.1 )  ) % 62.83;
					bird.geometry.vertices[ 5 ].y = bird.geometry.vertices[ 4 ].y = Math.sin( bird.phase ) * 5;

				}



        }
        public onDocumentMouseMove(event){

            var vector = new THREE.Vector3( event.clientX - App.width, - event.clientY + App.height, 0 );

            for ( var i = 0, il = this.boids.length; i < il; i++ ) {

                var boid = this.boids[ i ];

                vector.z = boid.position.z;

                boid.repulse( vector );
            }


        }
        private onWindowResize(){
            // App.camera.aspect = window.innerWidth / window.innerHeight;
            App.camera.updateProjectionMatrix();
            //
            // App.renderer.setSize( window.innerWidth, window.innerHeight );
        }
    }
}

