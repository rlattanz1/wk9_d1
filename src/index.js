
import MovingObject from "./moving_object";
import Asteroid from "./asteroid";
import * as Util from "./util.js";
import GameView from "./game_view";

// import Ship from "./ship";
// import Laser from "./laser";

// window.MovingObject = MovingObject;
const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = 800;
    canvasEl.height = 800;
    const ctx = canvasEl.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,500,800);
    const mo = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 5,
        color: "white"
    });
    mo.draw(ctx);

    const ast = new Asteroid({
        pos: [50, 50],
        vel: [20, 20],
        radius: Util.getRandomInt(50),
        color: "grey"
    },ctx);

   
    // ast.looop();
    // ast.draw(ctx);

    const gameview = new GameView(ctx);
    
    gameview.addAsteroids();
    gameview.addAsteroids();
    gameview.addAsteroids();
    gameview.addAsteroids();
    gameview.addAsteroids();
    gameview.addAsteroids();
    gameview.addAsteroids();
    gameview.addAsteroids();
    gameview.addAsteroids();
    gameview.addAsteroids();
    gameview.addAsteroids();
    gameview.addAsteroids();
    // setInterval(gameview.asteros.forEach(as => as.draw(ctx)),300);
    
    setInterval(
    gameview.asteros.forEach(ast => {
        ast.move();
        ast.draw(ctx);
    }),90);


  
    

