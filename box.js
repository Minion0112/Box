class Box{
    constructor(x,y,width,height){
        var boption={
            restitution:0.7
            }
            this.body=Bodies.rectangle(x,y,width,height,boption);
            this.width=width;
            this.height=height;
            World.add(myworld,this.body);
            
             
    }
display(){
    var pos=this.body.position
    var angle=this.body.angle
    push();
    translate(pos.x,pos.y);
    rotate(angle)
    fill(255);
    rectMode(CENTER);
rect(0,0,this.width,this.height);
pop();

}



}