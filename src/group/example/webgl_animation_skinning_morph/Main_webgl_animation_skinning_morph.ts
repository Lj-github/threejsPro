module game {
	export class Main_webgl_animation_skinning_morph {
	    SCREEN_WIDTH = window.innerWidth;
        SCREEN_HEIGHT = window.innerHeight;
        FLOOR = -250;
        container;
        stats;
        camera;
        scene;
        renderer;
        mesh;
        mesh2;
        helper;
        mixer;
        facesClip;
        bonesClip;
        mouseX = 0;
        mouseY = 0;
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        clock = new THREE.Clock();
        domMemInfo = document.getElementById( 'meminfo' );
        showMemInfo = false;
		constructor() { }
		public initUI() {
			App.camera = undefined
			App.camera = new THREE.PerspectiveCamera( 30, this.SCREEN_WIDTH / this.SCREEN_HEIGHT, 1, 10000 );

			App.scene = undefined
			App.scene = new THREE.Scene();

			App.camera.position.z = 2200;

			//App.scene.background = new THREE.Color(0xffffff);

			App.scene.fog = new THREE.Fog(0xffffff, 2000, 10000);
			// GROUND
			var geometry = new THREE.PlaneBufferGeometry(16000, 16000);
			var material = new THREE.MeshPhongMaterial({ emissive: 0x888888 });
			var ground = new THREE.Mesh(geometry, material);
			ground.position.set(0, this.FLOOR, 0);
			ground.rotation.x = -Math.PI / 2;
			App.scene.add(ground);
			ground.receiveShadow = true;
			// LIGHTS

			App.scene.add(new THREE.HemisphereLight(0x111111, 0x444444));
			var light = new THREE.DirectionalLight(0xebf3ff, 1.5);
			light.position.set(0, 140, 500).multiplyScalar(1.1);
			App.scene.add(light);
			light.castShadow = true;
			light.shadow.mapSize.width = 1024;
			light.shadow.mapSize.height = 1024;
			var d = 390;
			light.shadow.camera.left = -d;
			light.shadow.camera.right = d;
			light.shadow.camera.top = d * 1.5;
			light.shadow.camera.bottom = -d;
			light.shadow.camera.far = 3500;
			// RENDERER
			App.renderer.setPixelRatio(window.devicePixelRatio);
			App.renderer.setSize(this.SCREEN_WIDTH, this.SCREEN_HEIGHT);
			App.renderer.domElement.style.position = "relative";
			App.renderer.gammaInput = true;
			App.renderer.gammaOutput = true;
			App.renderer.shadowMap.enabled = true;
			// STATS
			//
			App.Loader("three.js-master/examples/models/skinned/knight.js",this.loadSuccess,this)
			// var loader = new THREE.JSONLoader();
			// loader.load( this.loadSuccess);
			//
			DomTopic.addDomEventListener('resize', this.onWindowResize, this);
			Animate.addRenderRunFunction(this.animate, this)
		}

		public loadSuccess(geometry, materials){
			this.createScene(geometry, materials, 0, this.FLOOR, -300, 60);
			// GUI
			this.initGUI();
		}
		onWindowResize() {
			this.windowHalfX = window.innerWidth / 2;
			this.windowHalfY = window.innerHeight / 2;
			App.camera.aspect = window.innerWidth / window.innerHeight;
			App.camera.updateProjectionMatrix();
			App.renderer.setSize(window.innerWidth, window.innerHeight);
		}

		createScene(geometry, materials, x, y, z, s) {
			//ensureLoop( geometry.animation );
			geometry.computeBoundingBox();
			var bb = geometry.boundingBox;
			// var path = "three.js-master/examples/textures/cube/Park2/";
			// var format = '.jpg';
			// var urls = [
			// 	path + 'posx' + format, path + 'negx' + format,
			// 	path + 'posy' + format, path + 'negy' + format,
			// 	path + 'posz' + format, path + 'negz' + format
			// ];

			for (var i = 0; i < materials.length; i++) {

				var m = materials[i];
				m.skinning = true;
				m.morphTargets = true;

				m.specular.setHSL(0, 0, 0.1);

				m.color.setHSL(0.6, 0, 0.6);

				//m.map = map;
				//m.envMap = envMap;
				//m.bumpMap = bumpMap;
				//m.bumpScale = 2;

				//m.combine = THREE.MixOperation;
				//m.reflectivity = 0.75;

			}

			this.mesh = new THREE.SkinnedMesh(geometry, materials);
			this.mesh.name = "Knight Mesh";
			this.mesh.position.set(x, y - bb.min.y * s, z);
			this.mesh.scale.set(s, s, s);
			App.scene.add(this.mesh);
			this.mesh.castShadow = true;
			this.mesh.receiveShadow = true;

			this.mesh2 = new THREE.SkinnedMesh(geometry, materials);
			this.mesh2.name = "Lil' Bro Mesh";
			this.mesh2.position.set(x - 240, y - bb.min.y * s, z + 500);
			this.mesh2.scale.set(s / 2, s / 2, s / 2);
			this.mesh2.rotation.y = THREE.Math.degToRad(60);
			//this.mesh2.visible = false;
			this.mesh2.castShadow = true;
			this.mesh2.receiveShadow = true;
			App.scene.add(this.mesh2);

			this.helper = new THREE.SkeletonHelper(this.mesh);
			this.helper.material.linewidth = 3;
			//this.helper.visible = false;
			App.scene.add(this.helper);

			this.mixer = new THREE.AnimationMixer(this.mesh);

			this.bonesClip = geometry.animations[0];
			this.facesClip = THREE.AnimationClip.CreateFromMorphTargetSequence('facialExpressions', this.mesh.geometry.morphTargets, 3,false);
		}




		onDocumentMouseMove(event) {

			this.mouseX = (event.clientX - this.windowHalfX);
			this.mouseY = (event.clientY - this.windowHalfY);

		}
		animate() {
			var delta = 0.75 * this.clock.getDelta();
			App.camera.position.x += (this.mouseX - App.camera.position.x) * .05;
			App.camera.position.y = THREE.Math.clamp(App.camera.position.y + (- this.mouseY - App.camera.position.y) * .05, 0, 1000);
			App.camera.lookAt(App.scene.position);
			if (this.mixer) {
				this.mixer.update(delta);
			}
		}



		initGUI() {
			var _it  =  this
			var API = {
				'show model': true,
				'show skeleton': false,
				'show 2nd model': false,
				'show mem. info': false
			};

			var gui = new dat.GUI();

			gui.add(API, 'show model').onChange(function () {
				_it.mesh.visible = API['show model'];
			});

			gui.add(API, 'show skeleton').onChange(function () {
				_it.helper.visible = API['show skeleton'];
			});

			gui.add(API, 'show 2nd model').onChange(function () {
				_it.mesh2.visible = API['show 2nd model'];
			});
			gui.add(API, 'show mem. info').onChange(function () {

				_it.showMemInfo = API['show mem. info'];
				// _it.domMemInfo.style.display = _it.showMemInfo ? 'block' : 'none';
			});

			// utility function used for drop-down options lists in the GUI
			var objectNames = function (objects) {
				var result = [];

				for (var i = 0, n = objects.length; i !== n; ++i) {

					var obj = objects[i];
					result.push(obj && obj.name || '&lt;null&gt;');
				}
				return result;
			};
			// creates gui folder with tests / examples for the action API
			var clipControl = function clipControl(gui, mixer, clip, rootObjects) {

				var folder = gui.addFolder("Clip '" + clip.name + "'"),
					rootNames = objectNames(rootObjects),
					rootName = rootNames[0],
					root = rootObjects[0],

					action = null,

					API = {

						'play()': function play() {

							action = _it.mixer.clipAction(clip, root);
							action.play();

						},

						'stop()': function () {

							action = _it.mixer.clipAction(clip, root);
							action.stop();

						},

						'reset()': function () {

							action = _it.mixer.clipAction(clip, root);
							action.reset();

						},

						get 'time ='() {

							return action !== null ? action.time : 0;

						},

						set 'time ='(value) {

							action = _it.mixer.clipAction(clip, root);
							action.time = value;

						},

						get 'paused ='() {

							return action !== null && action.paused;

						},

						set 'paused ='(value) {

							action = _it.mixer.clipAction(clip, root);
							action.paused = value;

						},

						get 'enabled ='() {

							return action !== null && action.enabled;

						},

						set 'enabled ='(value) {

							action = _it.mixer.clipAction(clip, root);
							action.enabled = value;

						},

						get 'clamp ='() {

							return action !== null ? action.clampWhenFinished : false;

						},

						set 'clamp ='(value) {

							action = _it.mixer.clipAction(clip, root);
							action.clampWhenFinished = value;

						},

						get 'isRunning() ='() {

							return action !== null && action.isRunning();

						},

						set 'isRunning() ='(value) {

							alert("Read only - this is the result of a method.");

						},

						'play delayed': function () {

							action = _it.mixer.clipAction(clip, root);
							action.startAt(_it.mixer.time + 0.5).play();

						},

						get 'weight ='() {

							return action !== null ? action.weight : 1;

						},

						set 'weight ='(value) {

							action = _it.mixer.clipAction(clip, root);
							action.weight = value;

						},

						get 'eff. weight'() {

							return action !== null ? action.getEffectiveWeight() : 1;

						},

						set 'eff. weight'(value) {

							action = _it.mixer.clipAction(clip, root);
							action.setEffectiveWeight(value);

						},

						'fade in': function () {

							action = _it.mixer.clipAction(clip, root);
							action.reset().fadeIn(0.25).play();

						},

						'fade out': function () {

							action = _it.mixer.clipAction(clip, root);
							action.fadeOut(0.25).play();

						},

						get 'timeScale ='() {

							return (action !== null) ? action.timeScale : 1;

						},

						set 'timeScale ='(value) {

							action = _it.mixer.clipAction(clip, root);
							action.timeScale = value;

						},

						get 'eff.T.Scale'() {

							return (action !== null) ? action.getEffectiveTimeScale() : 1;

						},

						set 'eff.T.Scale'(value) {

							action = _it.mixer.clipAction(clip, root);
							action.setEffectiveTimeScale(value);

						},

						'time warp': function () {

							action = _it.mixer.clipAction(clip, root);
							var timeScaleNow = action.getEffectiveTimeScale();
							var destTimeScale = timeScaleNow > 0 ? -1 : 1;
							action.warp(timeScaleNow, destTimeScale, 4).play();

						},

						get 'loop mode'() {

							return action !== null ? action.loop : THREE.LoopRepeat;

						},

						set 'loop mode'(value) {

							action = _it.mixer.clipAction(clip, root);
							action.loop = + value;

						},

						get 'repetitions'() {

							return action !== null ? action.repetitions : Infinity;

						},

						set 'repetitions'(value) {

							action = _it.mixer.clipAction(clip, root);
							action.repetitions = + value;

						},

						get 'local root'() { return rootName; },

						set 'local root'(value) {

							rootName = value;
							root = rootObjects[rootNames.indexOf(rootName)];
							action = _it.mixer.clipAction(clip, root);

						}

					};

				folder.add(API, 'play()');
				folder.add(API, 'stop()');
				folder.add(API, 'reset()');
				folder.add(API, 'time =', 0, clip.duration).listen();
				folder.add(API, 'paused =').listen();
				folder.add(API, 'enabled =').listen();
				folder.add(API, 'clamp =');
				folder.add(API, 'isRunning() =').listen();
				folder.add(API, 'play delayed');
				folder.add(API, 'weight =', 0, 1).listen();
				folder.add(API, 'eff. weight', 0, 1).listen();
				folder.add(API, 'fade in');
				folder.add(API, 'fade out');
				folder.add(API, 'timeScale =', -2, 2).listen();
				folder.add(API, 'eff.T.Scale', -2, 2).listen();
				folder.add(API, 'time warp');
				folder.add(API, 'loop mode', {
					"LoopOnce": THREE.LoopOnce,
					"LoopRepeat": THREE.LoopRepeat,
					"LoopPingPong": THREE.LoopPingPong
				});
				folder.add(API, 'repetitions', 0, Infinity);
				folder.add(API, 'local root', rootNames);
				API['play()']();

			}; // function clipControl

			// one folder per clip
			clipControl(gui, this.mixer, this.bonesClip, [null, this.mesh, this.mesh2]);
			clipControl(gui, this.mixer, this.facesClip, [null, this.mesh, this.mesh2]);

			var memoryControl = function (gui, mixer, clips, rootObjects) {

				var clipNames = objectNames(clips),
					rootNames = objectNames(rootObjects);

				var folder = gui.addFolder("Memory Management"),

					clipName = clipNames[0],
					clip = clips[0],

					rootName = rootNames[0],
					root = rootObjects[0],
					API = {

						get 'clip'() { return clipName; },

						set 'clip'(value) {

							clipName = value;
							clip = clips[clipNames.indexOf(clipName)];

						},

						get 'root'() { return rootName; },

						set 'root'(value) {

							rootName = value;
							root = rootObjects[rootNames.indexOf(rootName)];

						},

						'uncache clip': function () {

							_it.mixer.uncacheClip(clip);

						},

						'uncache root': function () {

							_it.mixer.uncacheRoot(root);

						},

						'uncache action': function () {

							_it.mixer.uncacheAction(clip, root);
						}
					};

				folder.add(API, 'clip', clipNames);
				folder.add(API, 'root', rootNames);
				folder.add(API, 'uncache root');
				folder.add(API, 'uncache clip');
				folder.add(API, 'uncache action');

			};

			memoryControl(gui, this.mixer,
				[this.bonesClip, this.facesClip], [this.mesh, this.mesh2]);
		}


	}
}