module game {
    export class ElsfkMap {
        //行 Row 列 Column
        row = 18
        column = 10
        //宽度  长宽高 都是一样
        width = 50


        private _map: Array<THREE.Vector3> = []  //顶点坐标

        public initMap() {
            //假设 是  左下 为0
            // let row = this.row / 2
            // let column = this.column / 2
            // for (let i = -row; i < row; i++) {
            //     for (let j = -column; j < column; j++) {
            //         let x = j * this.width
            //         let y = this.width
            //         let z = i * this.width
            //         let vec = new THREE.Vector3(x, y, z)
            //         this._map.push(vec)
            //     }
            // }

            for (let i = 0; i < this.row; i++) {
                for (let j = 0; j < this.column; j++) {
                    let x = j * this.width
                    let y = this.width
                    let z = i * this.width
                    let vec = new THREE.Vector3(x, y, z)
                    this._map.push(vec)
                }
            }

        }

        get map() {
            return this._map
        }


    }


}