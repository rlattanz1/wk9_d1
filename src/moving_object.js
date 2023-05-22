
class MovingObject {

    constructor(movement) {
        this.pos = Object.values(movement)[0];
        this.vel = Object.values(movement)[1];
        this.radius = Object.values(movement)[2];
        this.color = Object.values(movement)[3];
    };

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    };

    draw(ctx) {
        console.log(this, "this")
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
        ctx.stroke();
    };

    collidedWith(Object) {

    };

};

export default MovingObject;
