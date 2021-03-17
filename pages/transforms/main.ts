import {
    Engine,
    Fill,
    Stroke,
    EllipseShape,
    RectangleShape,
    PolygonShape,
    BezierShape,
    Color,
    BezierPoint,
    RenderingLayer,
} from "../../lib/kreslo/kreslo.js";


const canvasEl = document.getElementById('canvas')! as HTMLCanvasElement;
const engine = new Engine(canvasEl, 800, 600);
// engine.debuggerBar.enable();



const rect1 = new RectangleShape(20, 20);
rect1.fill = new Fill(Color.Red);
rect1.stroke = new Stroke(Color.Black, 2);
rect1.transform.origin.add(rect1.width / 2, rect1.height / 2)
rect1.transform.position.x = 80;
rect1.transform.position.y = 80;
rect1.transform.rotation.degrees = 45;
rect1.transform.scale.set(.5);

const rect2 = new RectangleShape(20, 20);
rect2.fill = new Fill(Color.Yellow);
rect2.stroke = new Stroke(Color.Black, 2);
rect2.transform.origin.add(rect2.width / 2, rect2.height / 2)
rect2.transform.position.x = 100;
rect2.transform.position.y = 0;
rect2.transform.rotation.degrees = -10;
rect2.transform.scale.set(2)
rect2.transform.setParent(rect1.transform);

const rect3 = new RectangleShape(20, 20);
rect3.transform.origin.add(rect3.width / 2, rect3.height / 2)
rect3.transform.position.x = 120;
rect3.transform.position.y = 0;
rect3.transform.rotation.degrees = -30;
rect3.transform.setParent(rect2.transform);
rect3.fill = new Fill(Color.Green);
rect3.stroke = new Stroke(Color.Black, 2);


const last = rect3;

// 
const final = new EllipseShape(18, 18);
final.fill = new Fill(Color.Blue);
final.stroke = new Stroke(Color.Black, 2);
final.transform = last.transform.getComputed();
final.transform.origin.add(final.width / 2, final.height / 2)



function render(rl: RenderingLayer) {
    engine.clear();

    rect1.render(rl)
    rect2.render(rl)
    rect3.render(rl)
    
    final.render(rl)
}

render(engine);