module game {


    export class Ocean_Sky {
        constructor() {

        }

        initUI() {
            //animate();

            App.scene = new THREE.Scene();
            let scene = App.scene
            App.camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 20000);
            let camera = App.camera
            camera.position.set(30, 30, 100);

            let light = new THREE.DirectionalLight(0xffffff, 0.8);
            scene.add(light);

            // Water

            var waterGeometry = new THREE.PlaneBufferGeometry(10000, 10000);

            let water = new THREE.Water(
                waterGeometry,
                {
                    textureWidth: 512,
                    textureHeight: 512,
                    waterNormals: new THREE.TextureLoader().load('three.js-master/examples/textures/waternormals.jpg', function (texture) {
                        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                    }),
                    alpha: 1.0,
                    sunDirection: light.position.clone().normalize(),
                    sunColor: 0xffffff,
                    waterColor: 0x001e0f,
                    distortionScale: 3.7,
                    fog: scene.fog !== undefined
                }
            );
            this.water = water

            water.rotation.x = -Math.PI / 2;

            scene.add(water);

            // Skybox

            var sky = new THREE.Sky();
            sky.scale.setScalar(10000);
            scene.add(sky);

            var uniforms = sky.material.uniforms;

            uniforms.turbidity.value = 10;
            uniforms.rayleigh.value = 2;
            uniforms.luminance.value = 1;
            uniforms.mieCoefficient.value = 0.005;
            uniforms.mieDirectionalG.value = 0.8;

            var parameters = {
                distance: 400,
                inclination: 0.49,
                azimuth: 0.205
            };

            var cubeCamera = new THREE.CubeCamera(1, 20000, 256);
            cubeCamera.renderTarget.texture.minFilter = THREE.LinearMipMapLinearFilter;

            function updateSun() {

                var theta = Math.PI * (parameters.inclination - 0.5);
                var phi = 2 * Math.PI * (parameters.azimuth - 0.5);

                light.position.x = parameters.distance * Math.cos(phi);
                light.position.y = parameters.distance * Math.sin(phi) * Math.sin(theta);
                light.position.z = parameters.distance * Math.sin(phi) * Math.cos(theta);

                sky.material.uniforms.sunPosition.value = light.position.copy(light.position);
                water.material.uniforms.sunDirection.value.copy(light.position).normalize();

                cubeCamera.update(App.renderer, App.scene);

            }

            updateSun();

            //

            var geometry = new THREE.IcosahedronGeometry(20, 1);

            for (var i = 0, j = geometry.faces.length; i < j; i++) {

                geometry.faces[i].color.setHex(Math.random() * 0xffffff);

            }

            var material = new THREE.MeshStandardMaterial({
                vertexColors: THREE.FaceColors,
                roughness: 0.0,
                flatShading: true,
                envMap: cubeCamera.renderTarget.texture,
                side: THREE.DoubleSide
            });

            let sphere = new THREE.Mesh(geometry, material);
            scene.add(sphere);
            this.sphere = sphere
            window["sphere"] = sphere

            //

            // let controls = new THREE.OrbitControls(camera, App.renderer.domElement);
            // controls.maxPolarAngle = Math.PI * 0.495;
            // controls.target.set(0, 10, 0);
            // controls.panningMode = THREE.HorizontalPanning;
            // controls.minDistance = 40.0;
            // controls.maxDistance = 200.0;
            // camera.lookAt(controls.target);

            //

            let stats = new Stats();
            document.getElementsByTagName("body")[0].appendChild(stats.dom);
            this.stats = stats
            // GUI

            var gui = new dat.GUI();

            var folder = gui.addFolder('Sky');
            folder.add(parameters, 'inclination', 0, 0.5, 0.0001).onChange(updateSun);
            folder.add(parameters, 'azimuth', 0, 1, 0.0001).onChange(updateSun);
            folder.open();

            var uniforms = water.material.uniforms;

            var folder = gui.addFolder('Water');
            folder.add(uniforms.distortionScale, 'value', 0, 8, 0.1).name('distortionScale');
            folder.add(uniforms.size, 'value', 0.1, 10, 0.1).name('size');
            folder.add(uniforms.alpha, 'value', 0.9, 1, .001).name('alpha');
            folder.open();
            DomTopic.addDomEventListener(DomTopic.event.resize, this.onWindowResize, this);
            Animate.addRenderRunFunction(this.animate, this)
            KeyControlMgr.addKeyUpEventListener(KeyControlMgr.Key.LEFT, this.control, this)
            KeyControlMgr.addKeyUpEventListener(KeyControlMgr.Key.RIGHT, this.control1, this)
            KeyControlMgr.addKeyUpEventListener(KeyControlMgr.Key.UP, this.control2, this)
            KeyControlMgr.addKeyUpEventListener(KeyControlMgr.Key.DOWN, this.control13, this)
        }

        speed = 0.3

        control2() {
            //应该是用 tween  设置  移动缓冲 池
            this.sphere.position.z = this.sphere.position.z - this.speed
        }

        control13() {
            this.sphere.position.z = this.sphere.position.z + this.speed
        }

        control(keyCode: number) {
            this.sphere.position.x = this.sphere.position.x + this.speed
        }

        control1(keyCode: number) {
            this.sphere.position.x = this.sphere.position.x - this.speed
        }

        stats
        sphere
        water

        onWindowResize() {
            App.camera.aspect = window.innerWidth / window.innerHeight;
            App.camera.updateProjectionMatrix();
            App.renderer.setSize(window.innerWidth, window.innerHeight);

        }

        animate() {


            this.stats.update();
            var time = performance.now() * 0.001;

            this.sphere.position.y = Math.sin(time) * 20 + 5;
            this.sphere.rotation.x = time * 0.5;
            this.sphere.rotation.z = time * 0.51;

            this.water.material.uniforms.time.value += 1.0 / 60.0;
        }


    }
}