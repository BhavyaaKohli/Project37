class Quiz{
    constructor(){

    }

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }

      start(){
        if(gameState === 0){
          player = new  Contestant;
          player.getCount();
          question = new Question()
         question.display();
        }
      }
    
      play(){

        question.hide();
        textSize(30)
      text("Game Starts ",120,100)
      Player.getPlayerInfo();
    
      if(allPlayers!==undefined){
    
    
          var display_position = 130
            for( var plr in allPlayers){
            var correctAns = "2"
              if(correctAns === allPlayers[plr].answer){
                fill("green");
              }
              else{
                fill("red");
              }
    
              display_position += 20;
              textSize(15);
              text(allPlayers[plr].name + " : " + allPlayers[plr].distance , 120,display_position)
    
            }
    
            
    
          }
        }
    }
    
    

