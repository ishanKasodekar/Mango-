class Tree{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.TreeWidth=450;
        this.TreeHeight=600;
        this.TreeThickness=10;
        this.image=loadImage("images/tree.png");
        this.body=Bodies.rectangle(this.x,this.y,this.TreeWidth,this.TreeThickness,{isStatic:true});
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y+10);
        fill(255);
        imageMode(CENTER);
        image(this.image,0,-this.TreeHeight/2,this.TreeWidth,this.TreeHeight);
        pop();
    }
}