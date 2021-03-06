class Paper{
    constructor(x,y,radius){
        var options ={
            'isStatic' : false,
            'restitution' : 0.5,
            'friction' : 5.5,
            'density' : 5
        }
        this.body = Bodies.circle(x,y,radius/2,options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("purple");
        strokeWeight(3);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}