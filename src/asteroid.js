import MovingObject from "./moving_object";
import * as Util from "./util.js";
class Asteroid extends MovingObject {
    static RADIUS = 25;
    static COLOR = "yellow"
    constructor(movement,ctx) {
        super(movement);
        this.ctx = ctx;
    };

    looop(){
        while(true){
            this.move();
            this.draw(this.ctx);
        }
    }


};

export default Asteroid;
