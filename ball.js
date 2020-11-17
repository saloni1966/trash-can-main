class Ball{
    constructor(x,y,r){

        var options={
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.5

        }
        

        this.body= Bodies.circle(x,y,20,options);
        this.r =20
        World.add(world,this.body);


    }
    display(){

        var pos = this.body.position;
        push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			
            fill(255,0,255)
            ellipseMode(RADIUS);
			ellipse(0,0,this.r, this.r);
			pop()
       
//

    }







}