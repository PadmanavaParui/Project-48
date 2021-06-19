// the game class
class Game {
  // the constructor function
          constructor(){
        
          }
        
          // the get state function
          getState(){
            var gameStateRef  = database.ref('gameState');
            gameStateRef.on("value",function(data){
               gameState = data.val();
            })
          }
        
          // the updaqte state function
          update(state){
            database.ref('/').update({
              gameState: state
            });
          }
        
          // the start function
          async start(){
            if(gameState === 0){
              player = new Player();
              var playerCountRef = await database.ref('playerCount').once("value");
              if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
              }
              form = new Form()
              form.display();
            }

            // creating the ships
            ship1 = createSprite(100, 100, 10, 10);
            ship1.addImage("player1", ship1img);

            ship2 = createSprite(200, 200, 10, 10);
            ship2.addImage("player2", ship2img);
            
            ship3 = createSprite(300, 300, 10, 10);
            ship3.addImage("player3", ship3img);
            
            ship4 = createSprite(400, 400, 10, 10);
            ship4.addImage("player4", ship4img);


            // creatin the ship array
            ships = [ship1, ship2, ship3, ship4];
          }
        
          // the play function
          play(){
            form.hide();
        
            Player.getPlayerInfo();
            
            if(allPlayers !== undefined){
              if(keyIsDown("RIGHT_ARROW"))
              {
                xVel+=3;
              }
              if(keyIsDown("LEFT_ARROW"))
              {
                xVel+=3;
              }
              if(keyIsDown("UP_ARROW"))
              {
                yVel-=3;
              }
              if(keyIsDown("DOWN_ARROW"))
              {
                yVel+=3;
              }
              //index of the array
              //var index =0;
        
              //x and y position of the cars
              //var x;
              //var y = 100;
        
             // for(var plr in allPlayers){
                //add 1 to the index for every loop
              //  index = index + 1 ;
              //  x = displayHeight - allPlayers[plr].distance ;
             //   y = 100 + (index * 100) + allPlayers[plr].yPos;

                //position the cars a little away from each other in x direction
               // x = x + 200;
                //use data form the database to display the cars in y direction
              // y = displayHeight - allPlayers[plr].distance;
                
             // ships[index-1].x = x;
             // ships[index-1].y = y;
                //textAlign(CENTER);
                //textSize(20);
                //text(allPlayers[plr].name, ships[index - 1].x, ships[index - 1].y + 75);
                //if (index === player.index){
                 // camera.position.x = displayWidth/2;
                 // camera.position.y = ships[index-1].y
                  // if( ships[index - 1].isTouching(obstacles)){
                                                // s.play();

                    // yVel -= 0.9;

                  // }
               // }
               
              // }
        
            }
        
           
        
          //move the car
          //player.distance += yVel;
          //yVel *= 0.98;
         // player.xPos += xVel;
          //xVel *= 0.985;
          player.update();
          //display sprites
          drawSprites();
        }
}