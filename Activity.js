class Activity {
    constructor(a)
    {
      this.a = a;
    }
    display()
    {
      if(a===0)
      {
        astronaut.changeAnimation("sleeping",sleep);
        astronaut.x = 300;
        astronaut.y = 230;
        astronaut.velocityX = 0;
        astronaut.velocityY = 0;
      }    
      
      if(a===1){
        astronaut.addAnimation("gymming", gym);
        astronaut.changeAnimation("gymming");
        astronaut.y = 350;
        astronaut.velocityX = 0;
        astronaut.velocityY = 0;
    }
    if(a===2){
        astronaut.addAnimation("eating", eat);
        astronaut.changeAnimation("eating");
        astronaut.x = 150;
        astronaut.y = 350;
        astronaut.velocityX = 0.5;
        astronaut.velocityY = 0.5;
      }
      if(a===3)
      {
        astronaut.addAnimation("bathing", bath);
        astronaut.changeAnimation("bathing");
        astronaut.x = 300;
        astronaut.velocityX = 0;
        astronaut.velocityY = 0;
      }
    
      if(a===4){
        astronaut.addAnimation("moving", move);
        astronaut.changeAnimation("moving");
        astronaut.velocityX = 2;
        astronaut.velocityY = 2;
      }
      if(a===6){
        astronaut.addAnimation("moving", move);
        astronaut.changeAnimation("moving");
        astronaut.velocityX = -2;
        astronaut.velocityY = -2;
      }
      if(a===5){
        astronaut.addAnimation("moving", move);
        astronaut.changeAnimation("moving");
        astronaut.velocityX = -2;
        astronaut.velocityY = 2;
      }
      if(a===7){
        astronaut.addAnimation("moving", move);
        astronaut.changeAnimation("moving");
        astronaut.velocityX = 2;
        astronaut.velocityY = -2;
      }
    
    
    }
  };




