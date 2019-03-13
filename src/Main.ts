class Main {
    constructor() {
    }

    public run() {
        if (!Detector.webgl) {
            Detector.addGetWebGLMessage(null);
        } else {
            App.run()

            App.viewOther(ExpConfig.Game_SceneJump)
        }

    }
}










