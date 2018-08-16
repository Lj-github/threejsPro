var game;
(function (game) {
    var loaderType = App.loaderType;
    class Main_webgl_shaders_vector {
        constructor() {
            this.t = false;
            //this.init()
        }
        initUI() {
            App.Loader('three.js-master/examples/fonts/helvetiker_regular.typeface.json', this.onloadFount, this, loaderType.FontLoader);
        }
        onloadFount(font) {
            this.init(font);
            this.animate();
        }
        init(font) {
            App.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
            App.camera.position.set(0, 100, 500);
            this.controls = new THREE.OrbitControls(App.camera);
            this.controls.target.set(0, 100, 0);
            this.controls.update();
            App.scene = new THREE.Scene();
            App.scene.background = new THREE.Color(0xf0f0f0);
            var theText = "88"; // i % & j b 8
            this.group = new THREE.Group();
            App.scene.add(this.group);
            var textMaterial = new THREE.MeshBasicMaterial({
                color: new THREE.Color(0, 0, 1),
                side: THREE.DoubleSide,
                wireframe: true
            });
            var textShapes = font.generateShapes(theText, 180, 2);
            var text3d = new THREE.ShapeGeometry(textShapes);
            text3d.computeBoundingBox();
            var centerOffset = -0.5 * (text3d.boundingBox.max.x - text3d.boundingBox.min.x);
            this.text = new THREE.Mesh(text3d, textMaterial);
            this.text.position.x = centerOffset - 150;
            this.group.add(this.text);
            var vA = new THREE.Vector2();
            var vB = new THREE.Vector2();
            var vDot = new THREE.Vector2();
            function processShape(path, reverse) {
                var pts = []; // bigger area (convex hull)
                var pts2 = []; // smaller area (full solid shapes)
                var beziers = []; // quad bezier points
                var invert = [];
                var z;
                var wind;
                pts.push(path[0].getPoint(0));
                pts2.push(path[0].getPoint(0));
                for (var i = 0; i < path.length; i++) {
                    var curve = path[i];
                    if (curve instanceof THREE.LineCurve) {
                        pts.push(curve.v2);
                        pts2.push(curve.v2);
                    }
                    else if (curve instanceof THREE.QuadraticBezierCurve) {
                        vA = vA.subVectors(curve.v1, curve.v0); // .normalize()
                        vB = vB.subVectors(curve.v2, curve.v1);
                        z = vA.x * vB.y - vA.y * vB.x; // z component of cross Production
                        wind = z < 0; // clockwise/anticlock wind
                        // if (reverse) wind = !wind;
                        // console.log(z, wind , wind ? 'clockwise' : 'anti');
                        if (wind) {
                            pts.push(curve.v1);
                            pts.push(curve.v2);
                            pts2.push(curve.v2);
                        }
                        else {
                            pts.push(curve.v2);
                            pts2.push(curve.v1);
                            pts2.push(curve.v2);
                        }
                        var flip = wind ? 1 : -1;
                        // if (reverse) flip *= -1;
                        invert.push(flip, flip, flip);
                        beziers.push(curve.v0, curve.v1, curve.v2);
                    }
                }
                return {
                    pts: pts,
                    pts2: pts2,
                    beziers: beziers,
                    invert: invert
                };
            }
            var pts, pts2;
            var subshape;
            var convexhullShape;
            var solidShape;
            var convexhullShapeGroup = [];
            var solidShapeGroup = [];
            var beziers = [], invert = [];
            var process;
            var hole;
            for (var s = 0; s < textShapes.length; s++) {
                subshape = textShapes[s];
                process = processShape(subshape.curves);
                pts = process.pts;
                pts2 = process.pts2;
                beziers = beziers.concat(process.beziers);
                invert = invert.concat(process.invert);
                convexhullShape = new THREE.Shape(pts);
                solidShape = new THREE.Shape(pts2);
                convexhullShapeGroup.push(convexhullShape);
                solidShapeGroup.push(solidShape);
                for (var i = 0; i < subshape.holes.length; i++) {
                    hole = subshape.holes[i];
                    // console.log('hole', hole);
                    process = processShape(hole.curves, true);
                    pts = process.pts;
                    pts2 = process.pts2;
                    beziers = beziers.concat(process.beziers);
                    invert = invert.concat(process.invert);
                    convexhullShape.holes.push(new THREE.Shape(pts));
                    solidShape.holes.push(new THREE.Shape(pts2));
                }
            } // end of subshape
            var bezierGeometry = new THREE.Geometry();
            for (var i = 0; i < beziers.length; i++) {
                var p = beziers[i];
                bezierGeometry.vertices.push(new THREE.Vector3(p.x, p.y, 0));
            }
            for (i = 0; i < beziers.length; i += 3) {
                bezierGeometry.faces.push(new THREE.Face3(i, i + 1, i + 2));
                bezierGeometry.faceVertexUvs[0].push([
                    new THREE.Vector2(0, 0),
                    new THREE.Vector2(0.5, 0),
                    new THREE.Vector2(1, 1)
                ]);
            }
            text3d = new THREE.ShapeGeometry(convexhullShapeGroup);
            text3d.computeBoundingBox();
            var centerOffset = -0.5 * (text3d.boundingBox.max.x - text3d.boundingBox.min.x);
            var text1 = new THREE.Mesh(text3d, textMaterial);
            text1.position.x = centerOffset + 150;
            this.group.add(text1);
            text3d = new THREE.ShapeGeometry(solidShapeGroup);
            text3d.computeBoundingBox();
            var centerOffset = -0.5 * (text3d.boundingBox.max.x - text3d.boundingBox.min.x);
            var text2 = new THREE.Mesh(text3d, new THREE.MeshBasicMaterial({ color: new THREE.Color(1, 0, 0), side: THREE.DoubleSide, wireframe: true }));
            text2.position.x = centerOffset + 150;
            this.group.add(text2);
            //
            bezierGeometry.computeBoundingBox();
            bezierGeometry.computeFaceNormals();
            bezierGeometry.computeVertexNormals();
            var bezierGeometryd = new THREE.BufferGeometry().fromGeometry(bezierGeometry);
            bezierGeometryd.addAttribute('invert', new THREE.Float32BufferAttribute(invert, 1));
            var d = 'varying vec2 vUv;' +
                'attribute float invert;' +
                'varying float flip;' +
                'void main() {' +
                'vUv = uv;' +
                'flip = invert;' +
                'vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );' +
                'gl_Position = projectionMatrix * mvPosition;' +
                '}';
            var c = 'varying vec2 vUv;\n' +
                '\t\t\tvarying float flip;\n' +
                '\t\t\tuniform vec3 color;\n' +
                '\n' +
                '\t\t\tfloat inCurve(vec2 uv) {\n' +
                '\t\t\t\treturn uv.x * uv.x - uv.y;\n' +
                '\t\t\t}\n' +
                '\n' +
                '\t\t\tfloat delta = 0.1;\n' +
                '\n' +
                '\t\t\tvoid main() {\n' +
                '\t\t\t\tfloat x = inCurve(vUv);\n' +
                '\n' +
                '\t\t\t\tif (x * flip > 0.) discard;\n' +
                '\t\t\t\tgl_FragColor = vec4(color, 1.);\n' +
                '\t\t\t}';
            var newMaterial = new THREE.ShaderMaterial({
                uniforms: {
                    color: { value: new THREE.Color(0.45 * 0xffffff) }
                },
                vertexShader: d,
                //vertexShader: document.getElementById( 'vs' ).textContent,
                fragmentShader: c,
                side: THREE.DoubleSide
            });
            this.text = new THREE.Mesh(bezierGeometry, newMaterial);
            this.text.position.x = centerOffset;
            this.text.position.y = 0;
            this.text.position.z = 0;
            this.text.rotation.x = 0;
            this.text.rotation.y = Math.PI * 2;
            this.group.add(this.text);
            text3d = new THREE.ShapeGeometry(solidShapeGroup);
            text3d.computeBoundingBox();
            this.text = new THREE.Mesh(text3d, new THREE.MeshBasicMaterial({ color: 0.45 * 0xffffff, side: THREE.DoubleSide }));
            this.text.position.x = centerOffset;
            this.text.position.y = 0;
            this.text.position.z = 0;
            this.text.rotation.x = 0;
            this.text.rotation.y = Math.PI * 2;
            this.group.add(this.text);
            //document.addEventListener( 'mousedown', toggle, false );
            //window.addEventListener( 'resize', this.onWindowResize, false );
        }
        animate() {
        }
        onWindowResize() {
            App.camera.aspect = window.innerWidth / window.innerHeight;
            App.camera.updateProjectionMatrix();
        }
        toggle() {
            if (this.t) {
                // this.text2.visible = 0;
                // this.text1.visible = 1;
            }
            else {
                // this.text2.visible = 1;
                // this.text1.visible = 0;
            }
            this.t = !this.t;
        }
    }
    game.Main_webgl_shaders_vector = Main_webgl_shaders_vector;
})(game || (game = {}));
