
import Asteroid from "./asteroid";
import * as Util from "./util.js";
class GameView {
    constructor(ctx) {
        this.ctx = ctx;
        this.asteros = [];
    };

    addAsteroids(){
        const ast = new Asteroid(
            {pos: [Util.getRandomInt(500),Util.getRandomInt(800)],
                vel: [Util.getRandomInt(10),Util.getRandomInt(10)],
                radius: Util.getRandomInt(20),
                color: "grey"
            },this.ctx
            );
        this.asteros.push(ast);
        ast.draw(this.ctx);
    }

};
export default GameView;
