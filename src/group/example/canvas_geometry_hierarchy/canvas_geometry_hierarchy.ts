module game {
    export class Canvas_geometry_hierarchy {
        mouseX = 0
        clientX
        mouseY = 0;
        windowHalfY = window.innerHeight / 2;
        windowHalfX = window.innerWidth / 2;
        group: THREE.Group
        constructor() {
        }
        initUI() {
            App.camera.position.z = 500;
            App.scene.background = new THREE.Color(0xffffff);
            var geometry = new THREE.BoxGeometry(100, 100, 100);
            var material = new THREE.MeshNormalMaterial({overdraw: 0.5});

            this.group = new THREE.Group();

            for (var i = 0; i < 200; i++) {

                var mesh = new THREE.Mesh(geometry, material);
                mesh.position.x = Math.random() * 2000 - 1000;
                mesh.position.y = Math.random() * 2000 - 1000;
                mesh.position.z = Math.random() * 2000 - 1000;
                mesh.rotation.x = Math.random() * 2 * Math.PI;
                mesh.rotation.y = Math.random() * 2 * Math.PI;
                mesh.matrixAutoUpdate = false;
                mesh.updateMatrix();
                this.group.add(mesh);

            }
            App.scene.add(this.group);

            App.renderer.setPixelRatio(window.devicePixelRatio);
            App.renderer.setSize(window.innerWidth, window.innerHeight);


            DomTopic.addDomEventListener('resize', this.onWindowResize, this);
            Animate.addRenderRunFunction(this.animate, this)
            DomTopic.addDomEventListener('mousemove', this.onDocumentMouseMove, this);


        }

        public animate() {

            App.camera.position.x += (this.mouseX - App.camera.position.x) * .05;
            App.camera.position.y += (-this.mouseY - App.camera.position.y) * .05;
            App.camera.lookAt(App.scene.position);

            var currentSeconds = Date.now();
            this.group.rotation.x = Math.sin(currentSeconds * 0.0007) * 0.5;
            this.group.rotation.y = Math.sin(currentSeconds * 0.0003) * 0.5;
            this.group.rotation.z = Math.sin(currentSeconds * 0.0002) * 0.5;

        }

        public onWindowResize() {
            this.windowHalfX = window.innerWidth / 2;
            this.windowHalfY = window.innerHeight / 2;

            App.camera.aspect = window.innerWidth / window.innerHeight;
            App.camera.updateProjectionMatrix();

            App.renderer.setSize(window.innerWidth, window.innerHeight);
        }

        onDocumentMouseMove(event) {
            this.mouseX = (event.clientX - this.windowHalfX) * 10;
            this.mouseY = (event.clientY - this.windowHalfY) * 10;
        }


    }
}