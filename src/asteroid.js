import MovingObject from "./moving_object";
import * as Util from "./util.js";
class Asteroid extends MovingObject {
    static RADIUS = 25;
    static COLOR = "yellow"
    constructor(movement) {
        super(movement);
    };


};

export default Asteroid;
