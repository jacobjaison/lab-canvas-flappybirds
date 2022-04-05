document.getElementById("start-button").addEventListener("click",startGame);    
const gameIntroElement = document.querySelector(".game-intro");
const gameOverElement = document.querySelector(".game-over");
const restartButton = gameOverElement.querySelector("button").addEventListener("click",startGame);
const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
let background,
     flappy,
     obstacles = [],
     frameCounter = 0,
     moveSpeed = 5,
     score = 0,
     startEvent = false,
     intervalId;

  function startGame() {
    gameIntroElement.classList.add("hidden");
    gameOverElement.classList.add("hidden");
    background = new Background(canvas,ctx,moveSpeed);
    flappy = new Flappybird(canvas,ctx);

    createEventListeners();
    update();
  }

  function update() {
    background.draw();
    background.move();
       
    flappy.gravity = 1; 
    
    flappy.move();  
    
    
    frameCounter++;

    if (frameCounter % 5 === 0) {
      score++;
    }

    if (frameCounter < 30) {
      flappy.draw1();
    }
    else {
      flappy.draw2();
    }
      
    
    if (frameCounter === 60){
      obstacles.push(new Obstacle(canvas,ctx,moveSpeed));
      frameCounter = 0;
    }

    obstacles.forEach((obstacle) => {
        obstacle.drawTop();
        obstacle.moveTop();
        obstacle.drawBottom();
        obstacle.moveBottom();
      })
    drawScore();

   
    if (collisionBetweenFlappyAndObstacle())
    {
      console.log("Collided");
      reset();
      gameOverElement.classList.remove("hidden");
      gameIntroElement.classList.add("hidden");
    }
    else {
      intervalId = requestAnimationFrame(update);
    }    
  }

  function createEventListeners() {
    document.addEventListener("keydown", (e) => {
      console.log('keydown event');
      switch(e.key) {
        case " ":
          console.log('inside keydown');
          flappy.gravity = -35;
          flappy.move();     
          break;
        case "ArrowDown":
          flappy.gravity = 5;
          flappy.move();
          break;
        case "ArrowUp":
          console.log('inside Arrow up')
          flappy.gravity = -25;
          flappy.move();
          break;
        default:
          break;
      }      
    });
    document.addEventListener("keyup", (e) => {
      console.log ('Key up event', e.key);
      switch(e.key) {
        case " ":
          flappy.gravity = 1;
          flappy.move()
          break;
        default:
          break;
      }      
    });
  }

  function collisionBetweenFlappyAndObstacle() {
    let hasCollidedBottom = false,
        hasCollidedTop = false;
    for (let i = 0; i < obstacles.length;i++){
      const obstacle = obstacles[i];
      const withinXBottom = flappy.x + flappy.width > obstacle.xBottom && flappy.x < obstacle.xBottom + obstacle.widthBottom;
      const withinYBottom = obstacle.yBottom + obstacle.heightBottom > flappy.y && obstacle.yBottom < flappy.y + flappy.height;
      const withinXTop = flappy.x + flappy.width > obstacle.xTop && flappy.x < obstacle.xTop + obstacle.widthTop;
      const withinYTop = obstacle.yTop + obstacle.heightTop > flappy.y && obstacle.yTop < flappy.y + flappy.height;
      hasCollidedBottom = withinXBottom && withinYBottom;
      hasCollidedTop = withinXTop && withinYTop;
      if (hasCollidedBottom || hasCollidedTop) {
        break;
      }      
    }    
    return hasCollidedBottom || hasCollidedTop;
  }

  function reset() {
    background = null;
    flappy = null;
    obstacles = [];
    moveSpeed = 5,
    frameCounter = 0;
    score = 0;    
    clearInterval(intervalId);
  }

  function drawScore() {
    ctx.fillStyle = "black";
    ctx.font = "32px sans-serif";
    ctx.fillText(`Score: ${score}`, 20, 50);
    ctx.fillText(`Player: Jaison J`, 20, 90)
  }
