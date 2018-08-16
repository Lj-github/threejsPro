var game;
(function (game) {
    class BaseLayers extends THREE.Layers {
        constructor() {
            super();
        }
        initUI() {
        }
        removeSelf() {
        }
    }
    game.BaseLayers = BaseLayers;
})(game || (game = {}));
