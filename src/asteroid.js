import MovingObject from "./moving_object";
import * as Util from "./util.js";
class Asteroid extends MovingObject {
    static RADIUS = 25;
    static COLOR = "yellow"
    constructor() {
        super({pos: [0,0],
                vel:[1,1],
                radius: this.RADIUS,
                color: this.COLOR
        })
    };


};

export default Asteroid;
