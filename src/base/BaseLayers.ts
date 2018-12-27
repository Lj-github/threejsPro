module game {
    export abstract class BaseLayer extends THREE.Layers {
        classsss = 55
        constructor() {
            super()
            this.initUI()
        }


        public removeSelf() {

        }

        public abstract initUI()

    }
}