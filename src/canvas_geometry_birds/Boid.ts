
module game {
    export var vector = new THREE.Vector3(),
        _acceleration, _width = 500, _height = 500, _depth = 200, _goal, _neighborhoodRadius = 100,
        _maxSpeed = 4, _maxSteerForce = 0.1, _avoidWalls = false;

    export class Boid {
         position:THREE.Vector3
         velocity:THREE.Vector3
        constructor(){
            this.position = new THREE.Vector3();
            this.velocity = new THREE.Vector3();
            _acceleration = new THREE.Vector3();
        }
        public setGoal(target){
            _goal = target;
        }
        public setAvoidWalls = function ( value ) {
            _avoidWalls = value;
        };
        public setWorldSize = function ( width, height, depth ) {
            _width = width;
            _height = height;
            _depth = depth;
        };
        public run = function ( boids ) {
            if ( _avoidWalls ) {
                vector.set( - _width, this.position.y, this.position.z );
                vector = this.avoid( vector );
                vector.multiplyScalar( 5 );
                _acceleration.add( vector );

                vector.set( _width, this.position.y, this.position.z );
                vector = this.avoid( vector );
                vector.multiplyScalar( 5 );
                _acceleration.add( vector );

                vector.set( this.position.x, - _height, this.position.z );
                vector = this.avoid( vector );
                vector.multiplyScalar( 5 );
                _acceleration.add( vector );

                vector.set( this.position.x, _height, this.position.z );
                vector = this.avoid( vector );
                vector.multiplyScalar( 5 );
                _acceleration.add( vector );

                vector.set( this.position.x, this.position.y, - _depth );
                vector = this.avoid( vector );
                vector.multiplyScalar( 5 );
                _acceleration.add( vector );

                vector.set( this.position.x, this.position.y, _depth );
                vector = this.avoid( vector );
                vector.multiplyScalar( 5 );
                _acceleration.add( vector );

            }/* else {
						this.checkBounds();

					}
					*/
            if ( Math.random() > 0.5 ) {
                this.flock( boids );
            }
            this.move();
        };

        public flock( boids ) {
            if ( _goal ) {
                _acceleration.add( this.reach( _goal, 0.005 ) );
            }
            _acceleration.add( this.alignment( boids ) );
            _acceleration.add( this.cohesion( boids ) );
            _acceleration.add( this.separation( boids ) );

        };

        public move () {
            this.velocity.add( _acceleration );
            var l = this.velocity.length();
            if ( l > _maxSpeed ) {
                this.velocity.divideScalar( l / _maxSpeed );
            }
            this.position.add( this.velocity );
            _acceleration.set( 0, 0, 0 );
        };

        public  checkBounds() {
            if ( this.position.x >   _width ) this.position.x = - _width;
            if ( this.position.x < - _width ) this.position.x =   _width;
            if ( this.position.y >   _height ) this.position.y = - _height;
            if ( this.position.y < - _height ) this.position.y =  _height;
            if ( this.position.z >  _depth ) this.position.z = - _depth;
            if ( this.position.z < - _depth ) this.position.z =  _depth;

        };

        public avoid( target ) {
            var steer = new THREE.Vector3();
            steer.copy( this.position );
            steer.sub( target );
            steer.multiplyScalar( 1 / this.position.distanceToSquared( target ) );
            return steer;

        };

        public repulse( target ) {
            var distance = this.position.distanceTo( target );
            if ( distance < 150 ) {
                var steer = new THREE.Vector3();
                steer.subVectors( this.position, target );
                steer.multiplyScalar( 0.5 / distance );
                _acceleration.add( steer );
            }
        };

        public reach( target, amount ) {
            var steer = new THREE.Vector3();
            steer.subVectors( target, this.position );
            steer.multiplyScalar( amount );
            return steer;

        };

        public alignment( boids ) {
            var count = 0;
            var velSum = new THREE.Vector3();
            for ( var i = 0, il = boids.length; i < il; i++ ) {
                if ( Math.random() > 0.6 ) continue;
                var boid = boids[ i ];
                var distance = boid.position.distanceTo( this.position );
                if ( distance > 0 && distance <= _neighborhoodRadius ) {
                    velSum.add( boid.velocity );
                    count++;
                }
            }
            if ( count > 0 ) {
                velSum.divideScalar( count );
                var l = velSum.length();
                if ( l > _maxSteerForce ) {
                    velSum.divideScalar( l / _maxSteerForce );
                }
            }
            return velSum;
        };

        public cohesion( boids ) {
            var count = 0;
            var posSum = new THREE.Vector3();
            var steer = new THREE.Vector3();
            for ( var i = 0, il = boids.length; i < il; i ++ ) {
                if ( Math.random() > 0.6 ) continue;
                var boid = boids[ i ];
                var distance = boid.position.distanceTo( this.position );
                if ( distance > 0 && distance <= _neighborhoodRadius ) {
                    posSum.add( boid.position );
                    count++;
                }
            }
            if ( count > 0 ) {
                posSum.divideScalar( count );
            }
            steer.subVectors( posSum, this.position );
            var l = steer.length();
            if ( l > _maxSteerForce ) {
                steer.divideScalar( l / _maxSteerForce );
            }
            return steer;
        };

        public separation( boids ) {
            var posSum = new THREE.Vector3();
            var repulse = new THREE.Vector3();
            for ( var i = 0, il = boids.length; i < il; i ++ ) {
                if ( Math.random() > 0.6 ) continue;
                var boid = boids[ i ];
                var distance = boid.position.distanceTo( this.position );
                if ( distance > 0 && distance <= _neighborhoodRadius ) {
                    repulse.subVectors( this.position, boid.position );
                    repulse.normalize();
                    repulse.divideScalar( distance );
                    posSum.add( repulse );
                }
            }
            return posSum;
        }
    }
}