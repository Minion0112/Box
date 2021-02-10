const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld,ground,box1,box2;

function setup () {
createCanvas(400,400);
myengine=Engine.create();
myworld=myengine.world;
//var goptions={
//isStatic:true
//}
//ground=Bodies.rectangle(200,390,400,20,goptions);
//World.add(myworld,ground);
box1=new Box(85,100,50,50)
box2=new Box(100,50,50,70)
ground=new Ground(200,390,400,20)
}




function draw (){
background(0);
Engine.update(myengine);
box1.display()
box2.display()
ground.display()
//ellipseMode(RADIUS);
//ellipse(ball.position.x,ball.position.y,20,20);







}

