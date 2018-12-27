
// TODO 不实用物理 引擎
module  game{

    // mesh  方块？？
    // var geometry = new THREE.BoxGeometry(50, 50, 50);
    // var material = new THREE.MeshLambertMaterial({color: 0xffffff, overdraw: 0.5});

    export class BlockCube extends THREE.Mesh{
        constructor(geometry, material){
            super(geometry, material)
        }

        setColor(){
        }

    }
}