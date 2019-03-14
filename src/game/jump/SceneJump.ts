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
        tweenA: TWEEN.Tween
        tweenB: TWEEN.Tween
        isCanTouch: boolean

        constructor() {
        }

        initUI() {
            App.camera = new THREE.PerspectiveCamera(36, window.innerWidth / window.innerHeight, 0.25, 16);
            App.camera.position.set(0, 1.5, 5);
            App.scene.background = new THREE.Color(0xffffff);
            this.group = new THREE.Group();
            //盒子
            this.cube = this.createCube()
            window["dddddd"] = this.cube
            this.group.add(this.cube)
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
            this.isCanTouch = true

            App.addAxes()
        }

        public animate() {

            //this.cube.rotation.x += 0.05;
            //this.cube.rotation.y += 0.05;
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
            let self = this
            if (!this.isCanTouch) {
                return
            }

            console.log(e)
            SecTimeCb.unSubscribe(this.onUpTimer, this)
            let time = SecTimeCb.FPS * this.touchTimeStamp
            console.log("点击时间 为 ==> " + time)
            let basex = this.cube.position.x
            let minTime = Math.min(this.touchTimeStamp, 3000)
            this.tweenA = new TWEEN.Tween(this.cube.position).to({
                y: 5 * minTime / 300
            }, 1000).start()

            new TWEEN.Tween(this.cube.rotation).to({
                x: -(5 * minTime / 30000) * 360
            }, 2000).start()

            this.tweenB = new TWEEN.Tween(this.cube.position).to({
                y: 1,
                z: basex + 5 * minTime / 300
            }, 1000).onComplete(() => {
                self.isCanTouch = true
                self.cube.position.z = 0
            })
            //.easing(TWEEN.Easing.Elastic.Out)//.start()
            this.tweenA.chain(this.tweenB) //连接 tween
            this.touchTimeStamp = 0
            this.cube.scale.y = 1
            this.isCanTouch = false
        }

        onUpTimer() {
            this.touchTimeStamp++
            this.cube.scale.y = this.cube.scale.y - 0.001
        }

        onDocumentMouseDown(e) {

            if (this.isCanTouch) {
                console.log(e)
                SecTimeCb.subscribe(this.onUpTimer, this)
            } else {
                console.log("上一个 还没执行完 兄弟 ")
            }
        }

        private createCube() {
            var geometry = new THREE.BoxGeometry(1, 1, 1);
            geometry.translate(-0.5, 0.5, 0.5)//可以 设置锚点
            geometry.center()
            for (var i = 0; i < geometry.faces.length; i += 2) {
                var hex = Math.random() * 0xffffff;
                geometry.faces[i].color.setHex(hex);
                geometry.faces[i + 1].color.setHex(hex);
            }
            var material = new THREE.MeshBasicMaterial({vertexColors: THREE.FaceColors});//, overdraw: 0.5
            let cube = new THREE.Mesh(geometry, material);
            cube.position.y = 1
            return cube
        }

        ground: THREE.Mesh

        /**
         * 每走一步
         */

        private step() {
            // this.ground.geometry.scale()


        }

        private createGrund() {
            var ground = new THREE.Mesh(
                new THREE.PlaneBufferGeometry(9, 9, 1, 1),
                new THREE.MeshPhongMaterial({color: 0xa0adaf, shininess: 150})
            );
            ground.rotation.x = -Math.PI / 2; // rotates X/Y to X/Z
            ground.receiveShadow = true;
            this.ground = ground
            window["grundd"] = ground
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