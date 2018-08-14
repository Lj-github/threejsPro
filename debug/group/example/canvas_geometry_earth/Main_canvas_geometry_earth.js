var game;
(function (game) {
    class Main_canvas_geometry_earth {
        constructor() {
            this.mouseX = 0;
            this.mouseY = 0;
            this.windowHalfY = window.innerHeight / 2;
            this.windowHalfX = window.innerWidth / 2;
        }
        initUI() {
            //App.camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 2000 );
            App.camera.position.z = 500;
            App.camera.position.x = 0;
            App.camera.position.y = 0;
            App.scene.background = new THREE.Color(0xffffff);
            var group = new THREE.Group();
            App.scene.add(group);
            this.group = group;
            // earth
            var loader = new THREE.TextureLoader();
            loader.load('three.js-master/examples/textures/land_ocean_ice_cloud_2048.jpg', function (texture) {
                var geometry = new THREE.SphereGeometry(200, 20, 20);
                var material = new THREE.MeshBasicMaterial({ map: texture, overdraw: 0.5 });
                var mesh = new THREE.Mesh(geometry, material);
                group.add(mesh);
            });
            // shadow
            var canvas = document.createElement('canvas');
            canvas.width = 128;
            canvas.height = 128;
            var context = canvas.getContext('2d');
            var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
            gradient.addColorStop(0.1, 'rgba(210,210,210,1)');
            gradient.addColorStop(1, 'rgba(255,255,255,1)');
            context.fillStyle = gradient;
            context.fillRect(0, 0, canvas.width, canvas.height);
            var texture = new THREE.CanvasTexture(canvas);
            var geometry = new THREE.PlaneBufferGeometry(300, 300, 3, 3);
            var material = new THREE.MeshBasicMaterial({ map: texture, overdraw: 0.5 });
            var mesh = new THREE.Mesh(geometry, material);
            mesh.position.y = -250;
            mesh.rotation.x = -Math.PI / 2;
            group.add(mesh);
            App.renderer.setPixelRatio(window.devicePixelRatio);
            App.renderer.setSize(window.innerWidth, window.innerHeight);
            DomTopic.addDomEventListener('mousemove', this.onDocumentMouseMove, this);
            DomTopic.addDomEventListener('resize', this.onWindowResize, this);
            Animate.addRenderRunFunction(this.animate, this);
        }
        removeSelf() {
        }
        onWindowResize() {
            this.windowHalfX = window.innerWidth / 2;
            this.windowHalfY = window.innerHeight / 2;
            App.camera.aspect = window.innerWidth / window.innerHeight;
            App.camera.updateProjectionMatrix();
            App.renderer.setSize(window.innerWidth, window.innerHeight);
        }
        onDocumentMouseMove(event) {
            this.mouseX = (event.clientX - this.windowHalfX);
            this.mouseY = (event.clientY - this.windowHalfY);
        }
        animate() {
            App.camera.position.x += (this.mouseX - App.camera.position.x) * 0.05;
            App.camera.position.y += (-this.mouseY - App.camera.position.y) * 0.05;
            App.camera.lookAt(App.scene.position);
            this.group.rotation.y -= 0.005;
            App.renderer.render(App.scene, App.camera);
        }
    }
    game.Main_canvas_geometry_earth = Main_canvas_geometry_earth;
})(game || (game = {}));
