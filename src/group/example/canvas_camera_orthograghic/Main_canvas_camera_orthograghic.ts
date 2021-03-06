

module game {


    export class Main_canvas_camera_orthograghic {
        frustumSize = 1000;


        constructor() {
        }

        public initUI() {


            var aspect = window.innerWidth / window.innerHeight;
            App.camera = new THREE.OrthographicCamera(this.frustumSize * aspect / -2,
                this.frustumSize * aspect / 2, this.frustumSize / 2, this.frustumSize / -2, 1, 2000);
            App.camera.position.y = 400;


            App.scene.background = new THREE.Color(0xf0f0f0);
            // Grid
            var gridHelper = new THREE.GridHelper(1000, 20);
            App.scene.add(gridHelper);
            // Cubes

            var geometry = new THREE.BoxGeometry(50, 50, 50);
            var material = new THREE.MeshLambertMaterial({color: 0xffffff, overdraw: 0.5});

            for (var i = 0; i < 100; i++) {

                var cube = new THREE.Mesh(geometry, material);

                cube.scale.y = Math.floor(Math.random() * 2 + 1);

                cube.position.x = Math.floor((Math.random() * 1000 - 500) / 50) * 50 + 25;
                cube.position.y = (cube.scale.y * 50) / 2;
                cube.position.z = Math.floor((Math.random() * 1000 - 500) / 50) * 50 + 25;

                App.scene.add(cube);

            }

            // Lights

            var ambientLight = new THREE.AmbientLight(Math.random() * 0x10);
            App.scene.add(ambientLight);

            var directionalLight = new THREE.DirectionalLight(Math.random() * 0xffffff);
            directionalLight.position.x = Math.random() - 0.5;
            directionalLight.position.y = Math.random() - 0.5;
            directionalLight.position.z = Math.random() - 0.5;
            directionalLight.position.normalize();
            App.scene.add(directionalLight);

            var directionalLight = new THREE.DirectionalLight(Math.random() * 0xffffff);
            directionalLight.position.x = Math.random() - 0.5;
            directionalLight.position.y = Math.random() - 0.5;
            directionalLight.position.z = Math.random() - 0.5;
            directionalLight.position.normalize();
            App.scene.add(directionalLight);

            App.renderer.setPixelRatio(window.devicePixelRatio);
            App.renderer.setSize(window.innerWidth, window.innerHeight);
            //
            DomTopic.addDomEventListener(DomTopic.resize, this.onWindowResize, this)

            Animate.addRenderRunFunction(this.animate, this)

        }

        private onWindowResize() {
            var aspect = window.innerWidth / window.innerHeight;

            App.camera.left = -this.frustumSize * aspect / 2;
            App.camera.right = this.frustumSize * aspect / 2;
            App.camera.top = this.frustumSize / 2;
            App.camera.bottom = -this.frustumSize / 2;

            App.camera.updateProjectionMatrix();

            App.renderer.setSize(window.innerWidth, window.innerHeight);
        }

        public removeSelf() {
            var allChildren = App.scene.children;
            for (var obj of App.scene.children) {
                App.scene.remove(obj)
            }
			this.frustumSize = undefined
            //App.scene.remove()
        }

        private animate() {
            //this.stats.begin();
            var timer = Date.now() * 0.0001;
            App.camera.position.x = Math.cos(timer) * 800;
            App.camera.position.z = Math.sin(timer) * 800;
            App.camera.lookAt(App.scene.position);
            //this.stats.end();
        }

    }
}