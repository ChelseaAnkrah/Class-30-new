class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("spirtes/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly() {
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

    display() {
        image(this.sling1, 200, 20);
        image(this.sling2, 168, 20);
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48, 22, 8);

            if (pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 25, pointA.y, pointB.x, pointB.y);
                line(pointA.x - 25, pointA.y, pointB.x + 40, pointB.y);
                image(this.sling3, 100, 100, 50,50);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 40, pointB.y);
                image(this.sling3, pointA.x + 25, pointA.y, 25, 30);

            }
        }
    }

}