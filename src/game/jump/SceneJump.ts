module game {
    //跳一跳游戏  先不使用 物理引擎
    export class SceneJump { //extends THREE.Scene
        mouseX = 0
        clientX
        mouseY = 0;
        windowHalfY = window.innerHeight / 2;
        windowHalfX = window.innerWidth / 2;
        group: THREE.Group

        constructor() {
        }

        initUI() {
            App.camera.position.z = 5;
            App.scene.background = new THREE.Color(0xffffff);
            var geometry = new THREE.BoxGeometry(100, 100, 100);
            var material = new THREE.MeshNormalMaterial({overdraw: 0.5});

            this.group = new THREE.Group();
            //盒子
            // var mesh = new THREE.Mesh(geometry, material);
            // mesh.position.x =0.5* 2000 - 1000;
            // mesh.position.y =0.5 * 2000 - 1000;
            // mesh.position.z = 0.5 * 2000 - 1000;
            // mesh.rorotatitation.x =0.5 * 2 * Math.PI;
            // mesh.rotation.y = 0.5 * 2 * Math.PI;
            // mesh.matrixAutoUpdate = false;
            // mesh.updateMatrix();
            // this.group.add(mesh);
            window["dddddd"] = this.createCubee()
            // App.scene.add(window["dddddd"])

            App.scene.add(this.group);

            App.renderer.setPixelRatio(window.devicePixelRatio);
            App.renderer.setSize(window.innerWidth, window.innerHeight);


            DomTopic.addDomEventListener('resize', this.onWindowResize, this);
            Animate.addRenderRunFunction(this.animate, this)
            DomTopic.addDomEventListener('mousemove', this.onDocumentMouseMove, this);

            this.windowHalfX = window.innerWidth / 2;
            this.windowHalfY = window.innerHeight / 2;

            App.camera.aspect = window.innerWidth / window.innerHeight;
            App.camera.updateProjectionMatrix();

            App.renderer.setSize(window.innerWidth, window.innerHeight);


        }

        public animate() {
            // App.camera.position.x += (this.mouseX - App.camera.position.x) * .05;
            // App.camera.position.y += (-this.mouseY - App.camera.position.y) * .05;
        }

        public onWindowResize() {
        }

        onDocumentMouseMove(event) {
            // this.mouseX = (event.clientX - this.windowHalfX) * 10;
            // this.mouseY = (event.clientY - this.windowHalfY) * 10;
        }

        private createCubee() {
            var geometry = new THREE.BoxGeometry(1, 1, 1);
            for (var i = 0; i < geometry.faces.length; i += 2) {
                var hex = Math.random() * 0xffffff;
                geometry.faces[i].color.setHex(hex);
                geometry.faces[i + 1].color.setHex(hex);
            }
            var material = new THREE.MeshBasicMaterial({vertexColors: THREE.FaceColors, overdraw: 0.5});
            let cube = new THREE.Mesh(geometry, material);
            cube.rotation.y = 2
            App.scene.add(cube)
            return cube

        }
    }
}