"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// add styles
// 主函数
//import '../style/style.css'
// three.js
const THREE = require("three");
window["THREE"] = THREE;
const TWEEN = require("@tweenjs/tween.js");
window["TWEEN"] = TWEEN;
require("./com/App");
require("./canvas_geometry_birds/Main_birds");
require("./com/Animate");
require("./com/APPTimeOut");
require("./canvas_geometry_birds/Bird");
// import {App} from "./com/App";
//
// //import App = require("com/App");
// import Asspp = require("./canvas_geometry_birds/Bird");
window["dsa"] = "";
window["aaaaaa"] = "./src/com/App.ts";
exports.admin = {};
window["admin"] = exports.admin;
class Main {
    constructor() { }
    run() { App.run(); }
}
exports.Main = Main;
new Main().run();
window["Main"] = Main;
// requestAnimationFrame(Animate.run)
// function animate(): void {requestAnimationFrame(animate);render()}
// function render(): void {App.renderer.render(App.scene, App.camera)}
// animate()
//# sourceMappingURL=Main.js.map