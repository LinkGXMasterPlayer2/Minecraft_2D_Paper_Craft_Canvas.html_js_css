var canvas = new fabric.Canvas("myCanvas");

block_img_width = 30;
block_img_height = 30;

playerX = 10;
playerY = 10;

var player_object = "";

function player_update(){

    fabric.Image.fromURL("player.png", function (Img){

        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playerY,
            left:playerX
            
        });
        canvas.add(player_object);

    });
}
function new_img(get_image){

    fabric.Image.fromURL(get_image, function (Img){

        block_image_object = Img;

        block_image_object.scaleToWidth(block_img_width);
        block_image_object.scaleToHeight(block_img_height);
        block_image_object.set({
            top:playerY,
            left:playerX
            
        });
        canvas.add(block_image_object);

    });
}


window.addEventListener("keydown",myKeydown);

function myKeydown(e){

    keypress = e.keyCode;

    console.log(keypress);

    if(e.shiftKey == true && keypress == '80'){

        console.log("P + Shift Are Pressed Together");
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;

    }
    if(e.shiftKey == true && keypress == '77'){

        console.log("M + Shift Are Pressed Together");
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;

    }
    if(keypress == '38'){

        up();
        console.log("up");
    }
    if(keypress == '40'){

        down();
        console.log("down");
    }
    if(keypress == '37'){

        left();
        console.log("left");
    }
    if(keypress == '39'){

        right();
        console.log("right");
    }
    if(keypress == '84'){

        new_img("trunk.jpg");
        console.log("t");
    }
    if(keypress == '68'){

        new_img("dark_green.png");
        console.log("d");
    }
    if(keypress == '76'){

        new_img("light_green.png");
        console.log("l");
    }
    if(keypress == '71'){

        new_img("ground.png");
        console.log("g");
    }
    if(keypress == '87'){

        new_img("wall.jpg");
        console.log("w");
    }
    if(keypress == '89'){

        new_img("yellow_wall.png");
        console.log("y");
    }
    if(keypress == '82'){

        new_img("roof.jpg");
        console.log("r");
    }
    if(keypress == '67'){

        new_img("cloud.jpg");
        console.log("c");
    }
    if(keypress == '85'){

        new_img("unique.png");
        console.log("u");
    }


}
function up(){

    if( playerY >=0 ){

        playerY = playerY - block_img_height;
        console.log("block Image Height = " + block_img_height);
        console.log("when up arrow key is pressed, X = " + playerX + " ,Y = " + playerY);
        canvas.remove(player_object);
        player_update();

    }
}
function left(){

    if( playerX >=0 ){

        playerX = playerX - block_img_width;
        console.log("block Image width = " + block_img_width);
        console.log("when left arrow key is pressed, X = " + playerX + " ,Y = " + playerY);
        canvas.remove(player_object);
        player_update();
        
    }
}
function down(){

    if( playerY <=500 ){

        playerY = playerY + block_img_height;
        console.log("block Image Height = " + block_img_height);
        console.log("when down arrow key is pressed, X = " + playerX + " ,Y = " + playerY);
        canvas.remove(player_object);
        player_update();
        
    }
}
function right(){

    if( playerX <=850 ){

        playerX = playerX + block_img_width;
        console.log("block Image Width = " + block_img_width);
        console.log("when right arrow key is pressed, X = " + playerX + " ,Y = " + playerY);
        canvas.remove(player_object);
        player_update();
        
    }
}