import { BezierPoint, BezierShape, Color, EllipseShape, Engine, Fill, RectangleShape, Stroke } from "../../lib/kreslo/kreslo.js";
const canvasEl = document.getElementById('canvas');
const engine = new Engine(canvasEl, 800, 600);
// engine.debuggerBar.enable();
const rectangle = new RectangleShape(200, 200);
rectangle.transform.position.x = 100;
rectangle.transform.position.y = 100;
rectangle.fill = new Fill(Color.Red);
rectangle.stroke = new Stroke(Color.Black, 2);
const oval = new EllipseShape(200, 200);
oval.transform.position.x = 200;
oval.transform.position.y = 200;
// oval.fill = new Fill(Color.Grey);
oval.fill = new Fill("pink");
oval.stroke = new Stroke(Color.Black, 2);
const points = [
    new BezierPoint({ x: 0, y: 0 }, { x: -80, y: 0 }, { x: 80, y: 0 }),
    new BezierPoint({ x: 100, y: 100 }, { x: 0, y: -80 }, { x: 0, y: 80 }),
    new BezierPoint({ x: 0, y: 200 }, { x: 80, y: 0 }, { x: -80, y: 0 }),
    new BezierPoint({ x: -100, y: 100 }, { x: 0, y: 80 }, { x: 0, y: -80 }),
];
points.forEach(p => p.y -= 100);
const poly = new BezierShape(...points);
poly.transform.position.x = 400;
poly.transform.position.y = 400;
poly.fill = new Fill(Color.Yellow);
poly.stroke = new Stroke(Color.Black, 2);
function render() {
    engine.clear();
    poly.transform.rotation.add(1);
    poly.points.forEach(p => p.startControl.rotate(-1));
    poly.points.forEach(p => p.endControl.rotate(-1));
    rectangle.render(engine);
    oval.render(engine);
    poly.render(engine);
}
engine.loop.addUpdateCallback((tickTime) => {
    render();
});
render();
// engine.loop.start();
