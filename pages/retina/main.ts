// import { Engine } from "../../Engine.js";
// import { RectangleShape } from "../../renderables/RectangleShape.js";
// import { Fill } from "../../properties/Fill.js";
// import { Color } from "../../styles/Color.js";
// import { EllipseShape } from "../../renderables/EllipseShape.js";
// import { Stroke } from "../../properties/Stroke.js";
// // import { DebuggerBar } from "../../Debugger/DebuggerBar.js";


// const canvasEl = document.getElementById('canvas')! as HTMLCanvasElement;
// const canvasRetinaEl = document.getElementById('canvasRetina')! as HTMLCanvasElement;

// const engine = new Engine(canvasEl, 240, 240);
// engine.gizmoVisibility = true;

// // const bar = new DebuggerBar(engine);

// const engineRetina = new Engine(canvasRetinaEl, 240, 240, window.devicePixelRatio);
// engineRetina.gizmoVisibility = true;


// const bg = new RectangleShape(engine.width, engine.height);
// bg.fill = new Fill(Color.fromHex('#666'));


// const oval = new EllipseShape(200, 200);
// oval.transform.position.x = 20;
// oval.transform.position.y = 20;
// oval.fill = new Fill(Color.yellow());
// oval.stroke = new Stroke(Color.black(), 2);


// engine.loop.addUpdateCallback((tickTime) => {
//     engine.clear();
//     engineRetina.clear();

//     bg.render(engine);
//     bg.render(engineRetina);

//     oval.render(engine);
//     oval.render(engineRetina);
// });

// engine.loop.run();