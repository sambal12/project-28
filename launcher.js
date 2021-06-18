class Launcher{
    constructor(bodyA,ptB){
        var options = {
         bodyA: bodyA,
         pointB: ptB,
         stiffness:0.01,
         length:30
        }
       this.pointB = ptB
        this.chain = Constraint.create(options);
        World.add(world,this.chain)
    }
    fly(){
        this.chain.bodyA=null;
    }
    attach(bodyA){
        this.chain.bodyA = bodyA
    }
    
    display(){
        if (this.chain.bodyA){
        var pointA = this.chain.bodyA.position
        var pointB = this.pointB
        strokeWeight(5);
       // fill("yellow")
        line (pointA.x,pointA.y,pointB.x,pointB.y)
    }
}
}