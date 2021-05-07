class Stone{
    constructor(x,y,diameter){

        var options ={
        isStatic:false,
        restitution :0,
        friction :1,
        density :1.2
        }
        this.x=x;
        this.y=y;
        this.diameter=diameter;
        this.image=loadImage("images/stone.png");
        this.body = Bodies.circle(this.x,this.y,this.diameter/2,options);      
        World.add(world,this.body);
}
 
display()
{
    push();
    translate(this.body.position.x,this.body.position.y);
    imageMode(CENTER);
    image(this.image,0,0,this.diameter*2,this.diameter*2);
    pop();
}
}