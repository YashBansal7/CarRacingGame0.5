class Game {
  constructor(){}
  
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
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
    text("Game Begin",120,100);
    Player.getplayerinfo();
    if(allplayers!==undefined){
      var displayposition=100;
      for(var plr in allplayers){

      
      displayposition+=20;
      
      text(allplayers[plr].name + "" + allplayers[plr].distance,120,displayposition);
      }
    }
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance+=20;
      player.update();
    }
  }

}
