import { Engine } from "../../lib/kreslo/core/Engine.js";
import { Fill, FontFeatures, Stroke } from "../../lib/kreslo/properties/index.js";
import { EllipseShape, RectangleShape, PolygonShape, BezierShape } from "../../lib/kreslo/renderables/index.js";
import { Color } from "../../lib/kreslo/styles/Color.js";
import { BezierPoint } from "../../lib/kreslo/units/BezierPoint.js";
import { Font } from "../../lib/kreslo/properties/Font.js";
import { TextObject } from "../../lib/kreslo/renderables/TextObject.js";
import { Vector } from "../../lib/kreslo/units/Vector.js";



const canvasEl = document.getElementById('canvas')! as HTMLCanvasElement;
const engine = new Engine(canvasEl, 800, 600);
// engine.debuggerBar.enable();




const rectangle = new RectangleShape(200, 200);
rectangle.transform.position.x = 100;
rectangle.transform.position.y = 100;
rectangle.fill = new Fill(Color.Red);
rectangle.stroke = new Stroke(Color.Black, 2);


const font = new Font(42, "Roboto");
font.weight = 800;
font.letterSpacing = 20;
font.features.push(FontFeatures.SmallSaps)

const text = new TextObject("Ahoj jak se vede?");
text.font = font;


function render() {
    engine.clear();

    rectangle.render(engine);
    text.render(engine);
    
    console.log(engine.getRenderingContext().font);
    
}


engine.loop.addUpdateCallback((tickTime) => {
    render();
});



render();
// engine.loop.start();