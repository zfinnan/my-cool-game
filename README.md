## Steps to install on local computer

1. Go to [repo](https://github.com/zfinnan/my-cool-game) on Github profile
2. `fork` and `clone` repo
3. Clone to local machine
```text
git clone https://github.com/zfinnan/my-cool-game.git
```
4. Go to `my-cool-game` directory
5. Open `index.html` in browser

## Technologies used, approach taken, and unsolved problems

This project was made using HTML, CSS and Vanilla Javascript. My approach was to essentially work through the project in the order that the user would be interfacing with it ie. Making the home page and instructions first before creating the actual gameplay. 

As for the gameplay itself, my approach was to find a sprite sheet on the internet and write a function using event listeners that would change the player icon's coordinates and the image on the sprite sheet in order to see some form of animation. This was done without a constructor function. The next order of business was to be able to spawn moving asteroids across the screen. This was done, however, with a constructor function. I initially did it another way and it ended up creating convoluted loops and bugging out. Finally, for fuel cells. I wrote a function for each fuel cell and created the collision detection by matching the spaceship coordinates with each fuel cell coordinate. 

The game win/loss logic was done by creating progress bars in the HTML. With those progress bars, I wrote functions to update their values with collision detection. Each fuel cell had a value of 10 and each collision from an asteroid had a value of 5. When the Health bar hits zero, it triggers the loss screen and when the fuel bar hits 100, it triggers the win screen. 

There are just a couple of unsolved problems - more or less bugs. The start button in the instructions screen doesn't trigger the functions it is supposed to. The other bug is the collision detection for the asteroids isn't completely accurate due to some underlying canvas pixel issues. I had to stack mulitple canvases so when you clear one layer, the other isn't affected. 

## Javascript 

| Functions           | Description |
| -----------         | ----------- |
| `boardMovement()()`       | Moves player sprite and determines game progress|
| `startGame()` | Starts game and triggers multiple other functions |
| `Asteroid`           | Constructor for asteroid sprites |
| `spawnAsteroid()`        | Renders asteroid onto screen |
| `updateCanvas()`        | Moves asteroid across screen |

```javascript

function boardMovement() {
    var canvasDisplay = document.getElementById('board');
    var context = canvasDisplay.getContext('2d');
   
    sprite.onload = function() {
        context.drawImage(sprite, sx, sy, swidth, sheight, cx, cy, 50, 50);
    }
    sprite.src = 'https://opengameart.org/sites/default/files/shipsprite1.png';
    // sprite.style.zIndex = '1';
    
    fuelFill();
    gameWinLose();
}

function startGame() {  
    let canvasDisplay = document.querySelector('#board')
    canvasDisplay.style.background = 'url(https://i.imgur.com/rovRpgf.gif)';
    canvasDisplay.style.backgroundRepeat = 'no-repeat';
    canvasDisplay.style.backgroundSize = '100% 100%';
    
    
    // setTimeout(startScene, 0); will add back in once game play is functional

    // setTimeout(gameMap, 15000); will add back in once game play is functional

    let startButton = document.querySelector('#startBtn')
    let instructionsButton = document.querySelector('#instructionsBtn')
    startButton.remove();
    instructionsButton.remove();

    playerRender(); 
    setTimeout(drawFuel1, 0);
    setTimeout(drawFuel2, 5000);
    setTimeout(drawFuel3, 10000);
    setTimeout(drawFuel4, 15000);
    setTimeout(drawFuel5, 20000);
    setTimeout(drawFuel6, 25000);
    setTimeout(drawFuel7, 30000);
    setTimeout(drawFuel8, 35000);
    setInterval(spawnAsteroid, 2000);
    setInterval(updateCanvas, 25);
    spawnAsteroid();
}

Asteroid = function() {
    this.acx = Math.floor(Math.random() * 200);
    this.acy = Math.floor(Math.random() * 10);
  
    this.image = new Image();
    this.image.onload = function(e) {
      this.loaded = true;
      this.aswidth = 200;
      this.asheight = 200;
    }
    this.image.src = 'https://i.imgur.com/WfQKE6T.png';
  }

function spawnAsteroid() {
    asteroids.push(new Asteroid());
    console.log('a x:' + asteroids[0].acx)
    console.log('a y:' + asteroids[0].acy)
}

function updateCanvas() {
context.clearRect(0, 0, asteroidCanvas.width, asteroidCanvas.height);
let asteroid;
for (let a = 0; a < asteroids.length; a++) {
    asteroid = asteroids[a];
    if (asteroid.image.loaded) {

    context.drawImage(asteroid.image, 0, 0, asteroid.image.aswidth, asteroid.image.asheight, asteroid.acx, asteroid.acy, 20, 20);
    asteroid.acx += 3;
    asteroid.acy += 3;
    }
    asteroidHit(asteroid);
}
if (fuelBar.value === 100){
    return updateCanvas();
}
}
```

```css

#board {
    background: url(https://i.imgur.com/3iaaaMp.png);
    background-size: 100% 100%;
    width: 70%;
    height: 80;
    border: 2px solid #1da9cc;
    position: absolute;
    justify-content: center;
    z-index: 0;
    margin-left: 15%;
}
#asteroidCanvas {
    width: 70%;
    height: 80;
    margin-left: 15%;
    z-index: 1;
}

#fuelCanvas {
    width: 70%;
    height: 80;
    margin-left: 15%;
    z-index: 2;
}
``` 

```html 

 <div class="container"></div>
            <div id="placeholder"></div>
            <canvas id="asteroidCanvas"></canvas>
            <canvas id="board"></canvas>
            <canvas id="fuelCanvas"></canvas>
            <!-- <canvas id="board2"></canvas> -->
        <div class="hud">
            <label for="Fuel">Fuel:</label>
            <progress class="progress" id="fuel" max="100" value="20" name="Fuel" ></progress>
            <label for="Health">Health:</label>
            <progress class="progress" id="Health" max="100" value="100" name="Health"></progress>
        </div>
``` 


