import { Engine } from "../../lib/kreslo/kreslo.js";
import { Numbers } from "../../lib/kreslo/lib/utils/Numbers.js";
import { Oscillators } from "../../lib/kreslo/lib/utils/Oscillators.js";
const size = 200;
const canvasEl = document.getElementById('canvas');
const engine = new Engine(canvasEl, size, size);
// engine.debuggerBar.enable();
const dot = 2;
const ctx = engine.getRenderingContext();
const count = 100;
for (let i = -count; i <= count; i++) {
    const x = Numbers.remap(i, -count, count, 0, size);
    (function () {
        const y = Numbers.remap(i, -count, count, size, 0);
        ctx.fillStyle = "blue";
        ctx.fillRect(x - dot / 2, y - dot / 2, dot, dot);
    })();
    setTimeout(() => {
        (function () {
            const y = Oscillators.sawtooth(i, 50, size * 3 / 4, size * 1 / 4);
            ctx.fillStyle = "red";
            ctx.fillRect(x - dot / 2, y - dot / 2, dot, dot);
        })();
    }, 10 * (i + count));
    setTimeout(() => {
        (function () {
            const y = Oscillators.cosinus(i, 50, size * 3 / 4, size * 1 / 4);
            ctx.fillStyle = "black";
            ctx.fillRect(x - dot / 2, y - dot / 2, dot, dot);
        })();
    }, 10 * (i + count * 2));
    setTimeout(() => {
        (function () {
            const y = Oscillators.linear(i, 50, size * 3 / 4, size * 1 / 4);
            ctx.fillStyle = "green";
            ctx.fillRect(x - dot / 2, y - dot / 2, dot, dot);
        })();
    }, 10 * (i + count * 3));
}
// render();
engine.loop.start();
