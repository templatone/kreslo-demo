// import { Engine } from "../../lib/kreslo/core/Engine.js";
// import { Fill, Stroke } from "../../lib/kreslo/properties/index.js";
// import { EllipseShape, RectangleShape } from "../../lib/kreslo/renderables/index.js";
// import { Color } from "../../lib/kreslo/styles/Color.js";



// const canvasEl = document.getElementById('canvas')! as HTMLCanvasElement;
// const engine = new Engine(canvasEl, 800, 600);
// // engine.debuggerBar.enable();


// const rectangle = new RectangleShape(200, 200);
// rectangle.transform.position.x = 100;
// rectangle.transform.position.y = 100;
// rectangle.fill = new Fill(Color.red());
// rectangle.stroke = new Stroke(Color.black(), 2);

// const oval = new EllipseShape(200, 200);
// oval.transform.position.x = 200;
// oval.transform.position.y = 200;
// oval.fill = new Fill(Color.blue());
// oval.stroke = new Stroke(Color.red(), 2);





// engine.loop.addUpdateCallback((tickTime) => {
//     engine.clear();

//     rectangle.render(engine);
//     oval.render(engine);
// });

// engine.loop.run();