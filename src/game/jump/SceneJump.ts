module game{
    export class SceneJump extends THREE.Scene{
        container
        stats
        textureLoader: THREE.TextureLoader
        clock = new THREE.Clock();
        // Physics variables
        gravityConstant = -9.8;
        physicsWorld
        rigidBodies = [];
        margin = 0.05;
        hinge
        cloth
        transformAux1 = new Ammo.btTransform();
        time = 0;
        static armMovement = 0;
        controls
        constructor(){
            super()
            this.initPhysics()
            this.initUI()
        }

        initPhysics() {
            // Physics configuration
            let collisionConfiguration = new Ammo.btSoftBodyRigidBodyCollisionConfiguration();
            let dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration);
            let broadphase = new Ammo.btDbvtBroadphase();
            let solver = new Ammo.btSequentialImpulseConstraintSolver();
            let softBodySolver = new Ammo.btDefaultSoftBodySolver();
            this.physicsWorld = new Ammo.btSoftRigidDynamicsWorld(dispatcher, broadphase, solver, collisionConfiguration, softBodySolver);
            this.physicsWorld.setGravity(new Ammo.btVector3(0, this.gravityConstant, 0));
            this.physicsWorld.getWorldInfo().set_m_gravity(new Ammo.btVector3(0, this.gravityConstant, 0));
        }

        private  initUI(){
            this.container = document.getElementById('container');
            App.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.2, 2000);
            App.scene = new THREE.Scene();
            App.scene.background = new THREE.Color(0xbfd1e5);
            App.camera.position.set(-12, 7, 4);
            this.controls = new THREE.OrbitControls(App.camera);
            this.controls.target.set(0, 2, 0);
            this.controls.update();
            App.renderer = new THREE.WebGLRenderer();
            App.renderer.setPixelRatio(window.devicePixelRatio);
            App.renderer.setSize(window.innerWidth, window.innerHeight);
            App.renderer.shadowMap.enabled = true;
            this.textureLoader = new THREE.TextureLoader();
            let ambientLight = new THREE.AmbientLight(0x404040);
            let scene = App.scene
            scene.add(ambientLight);
            let light = new THREE.DirectionalLight(0xffffff, 1);
            light.position.set(-7, 10, 15);
            light.castShadow = true;
            let d = 10;
            light.shadow.camera.left = -d;
            light.shadow.camera.right = d;
            light.shadow.camera.top = d;
            light.shadow.camera.bottom = -d;
            light.shadow.camera.near = 2;
            light.shadow.camera.far = 50;
            light.shadow.mapSize.x = 1024;
            light.shadow.mapSize.y = 1024;
            light.shadow.bias = -0.003;
            scene.add(light);
            this.container.innerHTML = "";
            this.container.appendChild(App.renderer.domElement);
            this.stats = new Stats();
            this.stats.domElement.style.position = 'absolute';
            this.stats.domElement.style.top = '0px';
            this.container.appendChild(this.stats.domElement);
            DomTopic.addDomEventListener('resize', this.onWindowResize, this);
            Animate.addRenderRunFunction(this.animate, this)

        }
        animate(){

        }
        onWindowResize(){

        }

        private createBox(){










        }

         createParalellepiped(sx, sy, sz, mass, pos, quat, material) {
            let threeObject = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz, 1, 1, 1), material);
            let shape = new Ammo.btBoxShape(new Ammo.btVector3(sx * 0.5, sy * 0.5, sz * 0.5));
            shape.setMargin(this.margin);
            this.createRigidBody(threeObject, shape, mass, pos, quat);
            return threeObject;
        }


        createRigidBody(threeObject, physicsShape, mass, pos, quat) {
            threeObject.position.copy(pos);
            threeObject.quaternion.copy(quat);
            let transform = new Ammo.btTransform();
            transform.setIdentity();
            transform.setOrigin(new Ammo.btVector3(pos.x, pos.y, pos.z));
            transform.setRotation(new Ammo.btQuaternion(quat.x, quat.y, quat.z, quat.w));
            let motionState = new Ammo.btDefaultMotionState(transform);
            let localInertia = new Ammo.btVector3(0, 0, 0);
            physicsShape.calculateLocalInertia(mass, localInertia);
            let rbInfo = new Ammo.btRigidBodyConstructionInfo(mass, motionState, physicsShape, localInertia);
            let body = new Ammo.btRigidBody(rbInfo);
            threeObject.userData.physicsBody = body;
            App.scene.add(threeObject);
            if (mass > 0) {
                this.rigidBodies.push(threeObject);
                // Disable deactivation
                body.setActivationState(4);
            }
            this.physicsWorld.addRigidBody(body);
        }




    }
}