class Launcher{
constructor(body,anchor){
    var options={
    bodyA: body,
    pointB: anchor,
    stiffness: 0.004,
    length:1
    }
this.bodyA=body;
this.pointB=anchor;
this.launcher = Constraint.create(options);
World.add(world,this.launcher);
}
attach(body){
    this.launcher.bodyA=body;
}
fly(){
    this.launcher.bodyA=null;
}
display(){
    if(this.launcher.bodyA){
    strokeWeight(2);
    line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y);
    }
}
}