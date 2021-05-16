function stateChange(){
    var img;
    for(var a=0;a<=19;a++){
        if(bound[0].shapeColor == "green" && mousePressedOver(play)){
            bound[a].destroy();
            img = loadImage("images/paper ball.png");
            for(var x = 0;x<=4;x++){
                b[x].visible = false;
            }
            state = 2;
            ball1 = new Paper(100,165,img);
        }
        if(bound[1].shapeColor == "green" && mousePressedOver(play)){
            bound[a].destroy();
            img = loadImage("images/soda can.png");
            for(var x = 0;x<=4;x++){
                b[x].visible = false;
            }
            state = 2;
            ball1 = new Paper(100,200,img);
        }
        if(bound[2].shapeColor == "green" && mousePressedOver(play)){
            bound[a].destroy();
            img = loadImage("images/water bottle.png");
            for(var x = 0;x<=4;x++){
                b[x].visible = false;
            }
            state = 2;
            ball1 = new Paper(100,165,img);
        }
        if(bound[3].shapeColor == "green" && mousePressedOver(play)){
            bound[a].destroy();
            img = loadImage("images/rotten tomato.png");
            for(var x = 0;x<=4;x++){
                b[x].visible = false;
            }
            state = 2;
            ball1 = new Paper(100,165,img);
        }
        if(bound[4].shapeColor == "green" && mousePressedOver(play)){
            bound[a].destroy();
            img = loadImage("images/rotten egg.png");
            for(var x = 0;x<=4;x++){
                b[x].visible = false;
            }
            state = 2;
            ball1 = new Paper(100,165,img);
        }
    }
}