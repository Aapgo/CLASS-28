class Slingshot{
    constructor(body1,point2){
        var options = {
            bodyA:body1,
            pointB:point2,
            stiffness:0.04,
            lenth:10
        }
        this.pointB = point2
        this.Slingshot = Constraint.create(options)
        World.add(world,this.Slingshot)
    }
    fly(){
        this.Slingshot.bodyA = null;
    }
    display(){
        if(this.Slingshot.bodyA){

        
        var pointA = this.Slingshot.bodyA.position;
        var pointB = this.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}
}