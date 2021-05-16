function changeColor(){
    for(var a = 0; a <=19 ; a++){
        if(mouseWentDown("left") && mouseY>bound[0].y && mouseX>bound[5].x && mouseY<bound[10].y && mouseX < bound[15].x){
            for(var d = 0;d <= 19;d++){
                bound[d].shapeColor = "white";
            }
            for(var c = 0;c<=15;c=c+5){
                bound[c].shapeColor = "green";
            }
        }
        if(mouseWentDown("left") && mouseY>bound[1].y && mouseX>bound[6].x && mouseY<bound[11].y && mouseX < bound[16].x){
            for(var d = 0;d <= 19;d++){
                bound[d].shapeColor = "white";
            }
            for(var c = 1;c<=16;c=c+5){
                bound[c].shapeColor = "green";
            }
        }
        if(mouseWentDown("left") && mouseY>bound[2].y && mouseX>bound[7].x && mouseY<bound[12].y && mouseX < bound[17].x){
            for(var d = 0;d <= 19;d++){
                bound[d].shapeColor = "white";
            }
            for(var c = 2;c<=17;c=c+5){
                bound[c].shapeColor = "green";
            }
        }
        if(mouseWentDown("left") && mouseY>bound[3].y && mouseX>bound[8].x && mouseY<bound[13].y && mouseX < bound[18].x){
            for(var d = 0;d <= 19;d++){
                bound[d].shapeColor = "white";
            }
            for(var c = 3;c<=18;c=c+5){
                bound[c].shapeColor = "green";
            }
        }
        if(mouseWentDown("left") && mouseY>bound[4].y && mouseX>bound[9].x && mouseY<bound[14].y && mouseX < bound[19].x){
            for(var d = 0;d <= 19;d++){
                bound[d].shapeColor = "white";
            }
            for(var c = 4;c<=19;c=c+5){
                bound[c].shapeColor = "green";
            }
        }
    }
}