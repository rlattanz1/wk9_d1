
class MovingObject {

    constructor(movement) {
        this.pos = movement.pos;
        this.vel = movement.vel;
        this.radius = movement.radius;
        this.color = movement.color;
    };

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    };

    draw(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
        ctx.stroke();
        ctx.fill();
        ctx.fillStyle = this.color;
        // ctx.fillStyle()
    };

    collidedWith(Object) {

    };

};

export default MovingObject;
