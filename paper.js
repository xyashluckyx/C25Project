class Paper{
    constructor(x,y){
        var option={
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body=Bodies.rectangle(x,y,80,80,option);
        this.width=80;
        this.height=80;
        this.image=loadImage("paper.png");

        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;

        push()
        translate(pos.x, pos.y);
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height);
        if(keyCode===UP_ARROW){
            pos.x=pos.x+0.3;
            pos.y=pos.y-0.8;
    }
        if(pos.y<400){
            pos.y=pos.y+0.5;
        }
        pop()     
    }

}