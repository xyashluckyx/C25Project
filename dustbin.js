class Dustbin{
    constructor(x,y){
        var option={
            isStatic:true    
        }
        this.body=Bodies.rectangle(x, y,210,225,option);
        this.width=210;
        this.height=225;
        this.image=loadImage("dustbingreen.png");

        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER)
        angleMode(RADIUS)
        image(this.image,0,0,this.width,this.height);
        pop() 
    }
}