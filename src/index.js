
import MovingObject from "./moving_object"; 
// import Asteroid from "./asteroid";
// import Ship from "./ship";
// import Laser from "./laser";

// window.MovingObject = MovingObject;
const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = 800;
    canvasEl.height = 800;
    const ctx = canvasEl.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(0,0,500,800);
    const mo = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 5,
        color: "white"
    });
    mo.draw(ctx);
