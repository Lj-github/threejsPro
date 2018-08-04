module game {
    export class Bird extends THREE.Geometry{  //集成  几何模型

        constructor(){
            super()
            // 应该是画图了
            this.v(   5,   0,   0 );
            this.v( - 5, - 2,   1 );
            this.v( - 5,   0,   0 );
            this.v( - 5, - 2, - 1 );
            this.v(   0,   2, - 6 );
            this.v(   0,   2,   6 );
            this.v(   2,   0,   0 );
            this.v( - 3,   0,   0 );
            this.f3( 0, 2, 1 );
            this.f3( 4, 7, 6 );
            this.f3( 5, 6, 7 );
            this.computeFaceNormals();
        }
        private v( x, y, z ){
            this.vertices.push( new THREE.Vector3( x, y, z ) );
        }
        private f3( a, b, c ){
            this.faces.push( new THREE.Face3( a, b, c ) );
        }



    }
}

class aaaaa {
    constructor(){
        console.log(444)
    }
}