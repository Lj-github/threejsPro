export class CinematicCamera {
    constructor(fov: any, aspect: any, near: any, far: any);

    type: string;
    postprocessing: { enabled: boolean };
    shaderSettings: {
        rings: number,
        samples: number
    };

    material_depth: any;

    setLens(focalLength: any, filmGauge: any, fNumber: any, coc: any);

    initPostProcessing(): any

    linearize(depth: any): any

    smoothstep(near, far, depth): any

    saturate(x): any

    focusAt(focusDistance): any

    initPostProcessing(): any

    renderCinematic(scene, renderer): any

}