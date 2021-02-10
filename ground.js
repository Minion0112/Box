class Ground{
    constructor(x,y,width,height){
        var goption={
            isStatic:true
            }
            this.body=Bodies.rectangle(x,y,width,height,goption);
            this.width=width;
            this.height=height;
            World.add(myworld,this.body);
            
             
    }
display(){
    var pos=this.body.position
    fill(255);
    rectMode(CENTER);
rect(pos.x,pos.y,this.width,this.height);
}



}