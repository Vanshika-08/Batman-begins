class Drops{
    constructor(x, y, r){
        var options = {
            friction : 0.1          
        }
        this.body = Bodies.circle(x, y, r, options);
        this.radius = r;
        World.add(MyWorld, this.body);
    }  
    }
    display(){
        var maxDrops = 100;var pos = this.body.position;
        var angle = this.body.angle;
         for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0, 400), random(0, 400)));
            super.display();
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            ellipseMode(RADIUS);
            fill("DarkBlue");
            stroke("white");
            strokeWeight(5);
            ellipse(0, 0, this.radius, this.radius);
            pop();
        }
    }
}