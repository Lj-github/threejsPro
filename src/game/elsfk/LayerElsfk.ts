module game {
    let INTERSECTED

    export class LayerElsfk extends BaseLayer {
        private _map: ElsfkMap
        frustumSize = 1000;
        group: THREE.Group

        constructor() {
            super()

        }

        initUI() {
            //
            var aspect = window.innerWidth / window.innerHeight;
            App.camera = new THREE.CinematicCamera(60, window.innerWidth / window.innerHeight, 1, 1000);


            // App.camera = new THREE.OrthographicCamera(this.frustumSize * aspect / -2,
            //     this.frustumSize * aspect / 2, this.frustumSize / 2, this.frustumSize / -2, 1, 2000);
            App.camera.position.y = 400;
            App.scene.background = new THREE.Color(0xffffff);
            // Grid
            var gridHelper = new THREE.GridHelper(1000, 20);
            //App.scene.add(gridHelper);

            this._map = new ElsfkMap()
            this._map.initMap()
            this.group = new THREE.Group()
            var geometry = new THREE.BoxGeometry(ElsfkConfig.WIDTH, ElsfkConfig.WIDTH, ElsfkConfig.WIDTH);
            var material = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff});
            //test
            this.group.scale.x
            for (let vec of this._map.map) {

                let mesh = new BlockCube(geometry, material)
                mesh.position.x = vec.x
                mesh.position.y = vec.y
                mesh.position.z = vec.z
                mesh.matrixAutoUpdate = false;
                mesh.updateMatrix();
                //this.group.add(mesh)
                App.scene.add(mesh)
            }
            // App.scene.add(this.group)


            App.renderer.setPixelRatio(window.devicePixelRatio);
            App.renderer.setSize(window.innerWidth, window.innerHeight);

            Animate.addRenderRunFunction(this.animate, this)

            new TWEEN.Tween(this.group.position).to({
                x: Math.random() * 800 - 400,
                y: Math.random() * 800 - 400,
                z: Math.random() * 800 - 400
            }, 2000)
                .easing(TWEEN.Easing.Elastic.Out).start();

            this.raycaster = new THREE.Raycaster();

            DomTopic.addDomEventListener('mousemove', this.onDocumentMouseMove, this);
        }

        raycaster: THREE.Raycaster

        onDocumentMouseMove(event) {
            event.preventDefault();
            this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        }

        animate() {

            TWEEN.update();

            // App.camera.position.x += (this.mouseX - App.camera.position.x) * .05;
            // App.camera.position.y += (-this.mouseY - App.camera.position.y) * .05;
            App.camera.lookAt(App.scene.position);
            var currentSeconds = Date.now();
            //this.group.rotation.x = Math.sin(currentSeconds * 0.0007) * 0.5;
            //this.group.rotation.y = Math.sin(currentSeconds * 0.0003) * 0.5;
            //this.group.rotation.z = Math.sin(currentSeconds * 0.0002) * 0.5;
            this.addChick()
        }

        mouse = new THREE.Vector2()

        addChick() {
            // find intersections

            this.raycaster.setFromCamera(this.mouse, App.camera);

            var intersects = this.raycaster.intersectObjects(App.scene.children);

            if (intersects.length > 0) {

                var targetDistance = intersects[0].distance;

                //Using Cinematic camera focusAt method
                App.camera.focusAt(targetDistance);

                if (INTERSECTED != intersects[0].object) {

                    if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);

                    INTERSECTED = intersects[0].object;
                    INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
                    INTERSECTED.material.emissive.setHex(0xff0000);
                    console.log(INTERSECTED)
                    App.scene.remove(INTERSECTED)
                }

            } else {

                if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);

                INTERSECTED = null;

            }

        }
    }


}
