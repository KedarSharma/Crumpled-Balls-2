const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b1x , b1y;
var state = 0;

var xcoord1 = 80;
var bound = [];
bound.length = 2;

var b = [];

function preload(){
	playb = loadImage("images/play button.jpg");

	paper = loadImage("images/paper ball.png");
	soda = loadImage("images/soda can.png");
	bottle = loadImage("images/water bottle.png");
	tomato = loadImage("images/rotten tomato.png");
	egg = loadImage("images/rotten egg.png");
}

function setup() {
	createCanvas(800, 400);

	play = createSprite(400,320);
	play.addImage(playb);
	play.scale = 1/15;
	play.visible = false;

	//paper,trash can,bottles,tomato,eggs

	for(var a = 0;a<=4;a++){
		b[a] = createSprite(80+ 160*a,180);
		b[a].visible = false;
	}

	b[0].addImage(paper);
	b[0].scale = 0.1;

	b[1].addImage(soda);
	b[1].scale = 0.1;

	b[2].addImage(bottle);
	b[2].scale = 0.1;
	
	b[3].addImage(tomato);
	b[3].scale = 0.1;

	b[4].addImage(egg);
	b[4].scale = 0.1;

	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(400,-500,1000,1000);
	ground2 = new Ground(-500,200,1000,500);
	ground3 = new Ground(400,900,1000,1000);
	ground4 = new Ground(1300,200,1000,500);

	wall1 = new Wall(600,355,10,90);
	wall2 = new Wall(650,395,110,10);
	wall3 = new Wall(700,355,10,90);

	for(var a = 0;a<=19;a++){
		var x,y,w,h;
		if(a <= 4){
			x = 80 + 160*a;
			y = 140;
			w = 80;
			h = 5;
		}
		if(a <= 9 && a > 4){
			x = 40 + 160*(a-5);
			y = 180;
			w = 5;
			h = 80;
		}
		if(a <= 14 && a > 9){
			x = 80 + 160*(a-10);
			y = 220;
			w = 80;
			h = 5;
		}
		if(a <= 19 && a > 14){
			x = 120 + 160*(a-15);
			y = 180;
			w = 5;
			h = 80;
		}
		bound[a] = createSprite(x,y,w,h);
		bound[a].shapeColor = "white";
		bound[a].visible = false;
	}

	Engine.run(engine);
  
}


function draw() {

	background("cyan");

	if(state == 0){
		background(0);
		textSize(60);
		fill("blue");
		stroke("red");
		strokeWeight(2);
		text("CRUMPLED BALLS",100,60);

		line(97,70,655,70);

		textSize(30);
		fill("white");
		stroke("white");
		strokeWeight(1);
		text("Use the right and left arrow keys on the keyboard to direct \n                        the ball into the basket.",10,110);
		
		fill("magenta");
		stroke("magenta");
		text("Press the space bar to start.",180,250)

		if(keyCode == 32){
			state =1;
			for(var a = 0;a<=19;a++){
				bound[a].visible = true;
			}
		}
	}

	if(state == 1){
		background("cyan");
		for(var a = 0;a<=19;a++){
			bound[a].visible = true;
		}
		for(var a = 0;a<=4;a++){
			b[a].visible = true;
		}
		play.visible = true;
		changeColor();
		stateChange();
	}

	if(state == 2){

		play.visible = false;

		for(var a = 0;a<=19;a++){
			bound[a].visible = true;
		}

		ball1.display();

		b1x = ball1.body.position.x;
		b1y = ball1.body.position.y;

		ground1.display();
		ground2.display();
		ground3.display();
		ground4.display();

		wall1.display();
		wall3.display();
		wall2.display();

		if(keyWentDown(LEFT_ARROW)){
			Matter.Body.applyForce(ball1.body,ball1.body.position,{x: -45,y:-10})
		}
		if(keyWentDown(RIGHT_ARROW)){
			Matter.Body.applyForce(ball1.body,ball1.body.position,{x:45,y:-10})
		}

		if(b1x > 600 && b1x < 700 && b1y - ball1.radius/2 > 305 && b1y < 395){
			state = 3;
		}
	}

	if(state == 3){
		
		background(0);

		textSize(50);
		fill("yellow");
		stroke("red");
		strokeWeight(5);
		text("YOU WIN!!!!!",200,185);
	}

	drawSprites();
}