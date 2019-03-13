module game {
    //跳一跳游戏  先不使用 物理引擎
    export class SceneJump { //extends THREE.Scene
        mouseX = 0
        clientX
        mouseY = 0;
        windowHalfY = window.innerHeight / 2;
        windowHalfX = window.innerWidth / 2;
        group: THREE.Group
        cube: THREE.Mesh
        touchTimeStamp = 0 //点击的时间

        constructor() {
        }

        initUI() {
            App.camera = new THREE.PerspectiveCamera(36, window.innerWidth / window.innerHeight, 0.25, 16);
            App.camera.position.set(0, 1.3, 3);
            App.scene.background = new THREE.Color(0xffffff);
            this.group = new THREE.Group();
            //盒子
            this.cube = this.createCube()
            window["dddddd"] = this.cube
            App.scene.add(this.cube)
            App.scene.add(new THREE.AmbientLight(0x505050));//漫反射
            var spotLight = new THREE.SpotLight(0xffffff); //点光源
            spotLight.angle = Math.PI / 5;
            spotLight.penumbra = 0.2;
            spotLight.position.set(2, 3, 3);
            spotLight.castShadow = true;
            spotLight.shadow.camera.near = 3;
            spotLight.shadow.camera.far = 10;
            spotLight.shadow.mapSize.width = 1024;
            spotLight.shadow.mapSize.height = 1024;
            App.scene.add(spotLight);
            this.createGrund()
            App.scene.add(this.group);
            App.renderer.setPixelRatio(window.devicePixelRatio);
            App.renderer.setSize(window.innerWidth, window.innerHeight);
            DomTopic.addDomEventListener('resize', this.onWindowResize, this);
            Animate.addRenderRunFunction(this.animate, this)
            DomTopic.addDomEventListener(DomTopic.event.mousemove, this.onDocumentMouseMove, this);
            this.windowHalfX = window.innerWidth / 2;
            this.windowHalfY = window.innerHeight / 2;
            App.camera.aspect = window.innerWidth / window.innerHeight;
            App.camera.updateProjectionMatrix();
            App.renderer.setSize(window.innerWidth, window.innerHeight);
            this.setControl()
            this.initTouchEvent()
        }

        public animate() {
        }

        public onWindowResize() {
        }

        onDocumentMouseMove(event) {
        }

        private initTouchEvent() {
            //首先获取点击的位置，然后转换成3d的坐标，使用raycaster 向坐标发射一个射线，如果击中了表示点击成功
            DomTopic.addDomEventListener(DomTopic.event.mousedown, this.onDocumentMouseDown, this);
            DomTopic.addDomEventListener(DomTopic.event.mouseup, this.onDocumentMouseUp, this);
        }

        onDocumentMouseUp(e) {
            console.log(e)

            this.touchTimeStamp

        }

        onDocumentMouseDown(e) {
            console.log(e)

        }


        private createCube() {
            var geometry = new THREE.BoxGeometry(1, 1, 1);
            for (var i = 0; i < geometry.faces.length; i += 2) {
                var hex = Math.random() * 0xffffff;
                geometry.faces[i].color.setHex(hex);
                geometry.faces[i + 1].color.setHex(hex);
            }
            var material = new THREE.MeshBasicMaterial({vertexColors: THREE.FaceColors, overdraw: 0.5});
            let cube = new THREE.Mesh(geometry, material);
            cube.rotation.y = 2
            return cube
        }

        private createGrund() {
            var ground = new THREE.Mesh(
                new THREE.PlaneBufferGeometry(9, 9, 1, 1),
                new THREE.MeshPhongMaterial({color: 0xa0adaf, shininess: 150})
            );
            ground.rotation.x = -Math.PI / 2; // rotates X/Y to X/Z
            ground.receiveShadow = true;
            App.scene.add(ground);
        }

        /**
         *  鼠标  控制 场景 整体 位置
         */
        private setControl() {
            // Controls
            var controls = new THREE.OrbitControls(App.camera, App.renderer.domElement);
            controls.target.set(0, 1, 0);
            controls.update();
        }
    }
}