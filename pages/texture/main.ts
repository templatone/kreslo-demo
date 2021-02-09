import { Engine } from "../../lib/kreslo/core/Engine.js";
import { Fill, Stroke } from "../../lib/kreslo/properties/index.js";
import { EllipseShape, RectangleShape, PolygonShape, BezierShape } from "../../lib/kreslo/renderables/index.js";
import { Color } from "../../lib/kreslo/styles/Color.js";
import { WorleyNoise } from "../../lib/kreslo/textures/WorleyNoise.js";
import { BezierPoint } from "../../lib/kreslo/units/BezierPoint.js";
import { Vector } from "../../__source/units/Vector.js";

async function init() {
    const canvasEl = document.getElementById('canvas')! as HTMLCanvasElement;
    const engine = new Engine(canvasEl, 500, 500);
    // engine.debuggerBar.enable();

    const rectangle = new RectangleShape(10, 10);
    rectangle.fill = new Fill(Color.Red);


    const texture = new WorleyNoise(200, 200);
    texture.points = WorleyNoise.getRandomPoints(texture.width, texture.height, 7);
    texture.transform.position.x = 50;
    texture.transform.position.y = 50;
    texture.transform.rotation.degrees += 30;

    engine.loop.addUpdateCallback((tickTime) => {
        engine.clear();

        texture.render(engine);
        rectangle.render(engine);
    });


    console.log("run");
    engine.loop.start();
    texture.generate(engine);

}

init();
// texture.render(engine);