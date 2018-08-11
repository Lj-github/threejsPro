var game;
(function (game) {
    game.vector = new THREE.Vector3(), game._width = 500, game._height = 500, game._depth = 200, game._neighborhoodRadius = 100, game._maxSpeed = 4, game._maxSteerForce = 0.1, game._avoidWalls = false;
    class Boid {
        constructor() {
            this.position = new THREE.Vector3();
            this.velocity = new THREE.Vector3();
            game._acceleration = new THREE.Vector3();
        }
        setGoal(target) {
            game._goal = target;
        }
        setAvoidWalls(value) {
            game._avoidWalls = value;
        }
        ;
        setWorldSize(width, height, depth) {
            game._width = width;
            game._height = height;
            game._depth = depth;
        }
        ;
        run(boids) {
            if (game._avoidWalls) {
                game.vector.set(-game._width, this.position.y, this.position.z);
                game.vector = this.avoid(game.vector);
                game.vector.multiplyScalar(5);
                game._acceleration.add(game.vector);
                game.vector.set(game._width, this.position.y, this.position.z);
                game.vector = this.avoid(game.vector);
                game.vector.multiplyScalar(5);
                game._acceleration.add(game.vector);
                game.vector.set(this.position.x, -game._height, this.position.z);
                game.vector = this.avoid(game.vector);
                game.vector.multiplyScalar(5);
                game._acceleration.add(game.vector);
                game.vector.set(this.position.x, game._height, this.position.z);
                game.vector = this.avoid(game.vector);
                game.vector.multiplyScalar(5);
                game._acceleration.add(game.vector);
                game.vector.set(this.position.x, this.position.y, -game._depth);
                game.vector = this.avoid(game.vector);
                game.vector.multiplyScalar(5);
                game._acceleration.add(game.vector);
                game.vector.set(this.position.x, this.position.y, game._depth);
                game.vector = this.avoid(game.vector);
                game.vector.multiplyScalar(5);
                game._acceleration.add(game.vector);
            } /* else {
                        this.checkBounds();

                    }
                    */
            if (Math.random() > 0.5) {
                this.flock(boids);
            }
            this.move();
        }
        ;
        flock(boids) {
            if (game._goal) {
                game._acceleration.add(this.reach(game._goal, 0.005));
            }
            game._acceleration.add(this.alignment(boids));
            game._acceleration.add(this.cohesion(boids));
            game._acceleration.add(this.separation(boids));
        }
        ;
        move() {
            this.velocity.add(game._acceleration);
            var l = this.velocity.length();
            if (l > game._maxSpeed) {
                this.velocity.divideScalar(l / game._maxSpeed);
            }
            this.position.add(this.velocity);
            game._acceleration.set(0, 0, 0);
        }
        ;
        checkBounds() {
            if (this.position.x > game._width)
                this.position.x = -game._width;
            if (this.position.x < -game._width)
                this.position.x = game._width;
            if (this.position.y > game._height)
                this.position.y = -game._height;
            if (this.position.y < -game._height)
                this.position.y = game._height;
            if (this.position.z > game._depth)
                this.position.z = -game._depth;
            if (this.position.z < -game._depth)
                this.position.z = game._depth;
        }
        ;
        avoid(target) {
            var steer = new THREE.Vector3();
            steer.copy(this.position);
            steer.sub(target);
            steer.multiplyScalar(1 / this.position.distanceToSquared(target));
            return steer;
        }
        ;
        repulse(target) {
            var distance = this.position.distanceTo(target);
            if (distance < 150) {
                var steer = new THREE.Vector3();
                steer.subVectors(this.position, target);
                steer.multiplyScalar(0.5 / distance);
                game._acceleration.add(steer);
            }
        }
        ;
        reach(target, amount) {
            var steer = new THREE.Vector3();
            steer.subVectors(target, this.position);
            steer.multiplyScalar(amount);
            return steer;
        }
        ;
        alignment(boids) {
            var count = 0;
            var velSum = new THREE.Vector3();
            for (var i = 0, il = boids.length; i < il; i++) {
                if (Math.random() > 0.6)
                    continue;
                var boid = boids[i];
                var distance = boid.position.distanceTo(this.position);
                if (distance > 0 && distance <= game._neighborhoodRadius) {
                    velSum.add(boid.velocity);
                    count++;
                }
            }
            if (count > 0) {
                velSum.divideScalar(count);
                var l = velSum.length();
                if (l > game._maxSteerForce) {
                    velSum.divideScalar(l / game._maxSteerForce);
                }
            }
            return velSum;
        }
        ;
        cohesion(boids) {
            var count = 0;
            var posSum = new THREE.Vector3();
            var steer = new THREE.Vector3();
            for (var i = 0, il = boids.length; i < il; i++) {
                if (Math.random() > 0.6)
                    continue;
                var boid = boids[i];
                var distance = boid.position.distanceTo(this.position);
                if (distance > 0 && distance <= game._neighborhoodRadius) {
                    posSum.add(boid.position);
                    count++;
                }
            }
            if (count > 0) {
                posSum.divideScalar(count);
            }
            steer.subVectors(posSum, this.position);
            var l = steer.length();
            if (l > game._maxSteerForce) {
                steer.divideScalar(l / game._maxSteerForce);
            }
            return steer;
        }
        ;
        separation(boids) {
            var posSum = new THREE.Vector3();
            var repulse = new THREE.Vector3();
            for (var i = 0, il = boids.length; i < il; i++) {
                if (Math.random() > 0.6)
                    continue;
                var boid = boids[i];
                var distance = boid.position.distanceTo(this.position);
                if (distance > 0 && distance <= game._neighborhoodRadius) {
                    repulse.subVectors(this.position, boid.position);
                    repulse.normalize();
                    repulse.divideScalar(distance);
                    posSum.add(repulse);
                }
            }
            return posSum;
        }
    }
    game.Boid = Boid;
})(game || (game = {}));
//# sourceMappingURL=Boid.js.map