const canvasDisplay = document.querySelector('#board')
const [fuelBar, healthBar] = document.querySelectorAll('.progress');
console.log(typeof fuelBar.value);
console.log(healthBar);

const computedStyle = getComputedStyle(canvasDisplay)
const height = computedStyle.height
const width = computedStyle.width 
canvasDisplay.height = height.replace('px','')
canvasDisplay.width = width.replace('px','')

var board2 = document.createElement('canvas');
board2.width = width;
board2.height = height;
var board2Context = board2.getContext('2d');

const fuelCanvas = document.querySelector('#fuelCanvas')
const fuelComputedStyle = getComputedStyle(fuelCanvas)
const fuelHeight = fuelComputedStyle.height
const fuelWidth = fuelComputedStyle.width
fuelCanvas.height = fuelHeight.replace('px','')
fuelCanvas.width = fuelHeight.replace('px','')


function openInstructions() {
    let canvasDisplay = document.querySelector('#board')
    canvasDisplay.style.background = 'url(https://image.freepik.com/free-vector/pixel-art-scene-sci-fi-airship_150088-69.jpg)';
    canvasDisplay.style.backgroundRepeat = 'no-repeat';
    canvasDisplay.style.backgroundSize = '100% 100%';

    let computedStyle = getComputedStyle(canvasDisplay)
    let ctx = canvasDisplay.getContext("2d");

    let startButton = document.querySelector('#startBtn')
    let instructionsButton = document.querySelector('#instructionsBtn')
    instructionsButton.remove();
    startButton.style.margin = '220px 0px';

    ctx.font = 'Italic 75px Orbitron';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillStyle = 'red';  // a color name or by using rgb/rgba/hex values
    ctx.fillText('Instructions', 450, 25); // text and position
    
    ctx.font = '25px Orbitron';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'black';  
    ctx.fillText('Your rocket has malfunctioned and it is leaking all its fuel.', 450, 140); 
    
    ctx.font = '25px Orbitron';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'black';  
    ctx.fillText('And darn! There are asteroids coming at you everywhere!', 450, 180); 
    
    ctx.font = '25px Orbitron';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'black';  
    ctx.fillText('Luckily, there are fuel cells floating around.', 450, 260); 
    
    ctx.font = '25px Orbitron';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'black';  
    ctx.fillText('Use the 🆆 🅰 🆂 🅳 keys to collect all the fuel cells and escape!', 450, 300);

    setTimeout(removeStartButton, 10000);  
    setTimeout(playerRender, 10000);
    setTimeout(startGame, 10000);
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

function removeStartButton() {
    let computedStyle = getComputedStyle(canvasDisplay)
    let ctx = canvasDisplay.getContext("2d");
    ctx.clearRect(0,0, canvasDisplay.width, canvasDisplay.height);
    startButton.remove();
  }

function startScene() {
    let canvasDisplay = document.querySelector('#board')
    canvasDisplay.style.background = 'url(https://i.imgur.com/8vF8WR8.gif)';
    canvasDisplay.style.backgroundRepeat = 'no-repeat';
    canvasDisplay.style.backgroundSize = '100% 100%';  
}

function gameMap() {
    let canvasDisplay = document.querySelector('#board')
    canvasDisplay.style.background = 'url(https://i.imgur.com/rovRpgf.gif)';
    canvasDisplay.style.backgroundRepeat = 'no-repeat';
    canvasDisplay.style.backgroundSize = '100% 100%';
}

var sprite = new Image();
var cx = 440;
var cy = 190;
var sx = 65;
var sy = 0;
var swidth = 50;
var sheight = 50;
sprite.src = 'https://opengameart.org/sites/default/files/shipsprite1.png';

const player = {
    sprite,
    cx,
    cy,
    sx,
    sy,
    swidth,
    sheight
}

var asteroid = new Image();
var acx = 0;
var acy = 0;
var asx = 50;
var asy = 50;
var aswidth = 200;
var asheight = 200;
asteroid.src = 'https://i.imgur.com/WfQKE6T.png'

const objectOne = {
    acx,
    acy,
    asx,
    asy,
    aswidth,
    asheight
}



function playerRender() {
    var canvasDisplay = document.getElementById('board');
    var context = canvasDisplay.getContext('2d');
   
    sprite.onload = function() {
        context.drawImage(sprite, sx, sy, swidth, sheight, cx, cy, 50, 50);
    }
    sprite.src = 'https://opengameart.org/sites/default/files/shipsprite1.png';
    movePlayer();
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
  
var asteroidCanvas = document.getElementById('asteroidCanvas');
var context = asteroidCanvas.getContext('2d');
let asteroids = [];

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


var fuel = new Image();
var fcx = 0;
var fcy = 0;
var fsx = 0;
var fsy = 0;
var fswidth = 800;
var fsheight = 400;
fuel.src = 'http://pngimg.com/uploads/jerrycan/jerrycan_PNG43713.png'

const objectTwo = {
    fcx,
    fcy,
    fsx,
    fsy,
    fswidth,
    fsheight,
}

function drawFuel1() {
    var fuelCanvas = document.getElementById('fuelCanvas');
    var context = fuelCanvas.getContext('2d');

    var fcx = 400;
    var fcy = 10;

    setTimeout( () => {
        fuel.onload = function() {
           context.drawImage(fuel, fsx, fsy, fswidth, asheight, fcx, fcy, 20, 20); 
       }
       fuel.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Icons8_flat_charge_battery.svg/600px-Icons8_flat_charge_battery.svg.png';
       }, 0)  
}

function drawFuel2() {
    var fuelCanvas = document.getElementById('fuelCanvas');
    var context = fuelCanvas.getContext('2d');

    var fcx = 30;  
    var fcy = 30;

    setTimeout( () => {
        fuel.onload = function() {
           context.drawImage(fuel, fsx, fsy, fswidth, asheight, fcx, fcy, 20, 20); 
       }
       fuel.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Icons8_flat_charge_battery.svg/600px-Icons8_flat_charge_battery.svg.png';
       }, 0)  
}
function drawFuel3() {
    var fuelCanvas = document.getElementById('fuelCanvas');
    var context = fuelCanvas.getContext('2d');

    var fcx = 325;
    var fcy = 70;

    setTimeout( () => {
        fuel.onload = function() {
           context.drawImage(fuel, fsx, fsy, fswidth, asheight, fcx, fcy, 20, 20); 
       }
       fuel.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Icons8_flat_charge_battery.svg/600px-Icons8_flat_charge_battery.svg.png';
       }, 0)  
}
function drawFuel4() {
    var fuelCanvas = document.getElementById('fuelCanvas');
    var context = fuelCanvas.getContext('2d');

    var fcx = 70;
    var fcy = 100;

    setTimeout( () => {
        fuel.onload = function() {
           context.drawImage(fuel, fsx, fsy, fswidth, asheight, fcx, fcy, 20, 20); 
       }
       fuel.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Icons8_flat_charge_battery.svg/600px-Icons8_flat_charge_battery.svg.png';
       }, 0)  
}
function drawFuel5() {
    var fuelCanvas = document.getElementById('fuelCanvas');
    var context = fuelCanvas.getContext('2d');

    var fcx = 275;
    var fcy = 130;

    setTimeout( () => {
        fuel.onload = function() {
           context.drawImage(fuel, fsx, fsy, fswidth, asheight, fcx, fcy, 20, 20); 
       }
       fuel.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Icons8_flat_charge_battery.svg/600px-Icons8_flat_charge_battery.svg.png';
       }, 0)  
}
function drawFuel6() {
    var fuelCanvas = document.getElementById('fuelCanvas');
    var context = fuelCanvas.getContext('2d');

    var fcx = 420;
    var fcy = 150;

    setTimeout( () => {
        fuel.onload = function() {
           context.drawImage(fuel, fsx, fsy, fswidth, asheight, fcx, fcy, 20, 20); 
       }
       fuel.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Icons8_flat_charge_battery.svg/600px-Icons8_flat_charge_battery.svg.png';
       }, 0)  
}
function drawFuel7() {
    var fuelCanvas = document.getElementById('fuelCanvas');
    var context = fuelCanvas.getContext('2d');

    var fcx = 15;
    var fcy = 170;

    setTimeout( () => {
        fuel.onload = function() {
           context.drawImage(fuel, fsx, fsy, fswidth, asheight, fcx, fcy, 20, 20); 
       }
       fuel.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Icons8_flat_charge_battery.svg/600px-Icons8_flat_charge_battery.svg.png';
       }, 0)  
}
function drawFuel8() {
    var fuelCanvas = document.getElementById('fuelCanvas');
    var context = fuelCanvas.getContext('2d');

    var fcx = 150;
    var fcy = 190;

    setTimeout( () => {
        fuel.onload = function() {
           context.drawImage(fuel, fsx, fsy, fswidth, asheight, fcx, fcy, 20, 20); 
       }
       fuel.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Icons8_flat_charge_battery.svg/600px-Icons8_flat_charge_battery.svg.png';
       }, 0)  
}


function movePlayer() {

    window.addEventListener('keyup', function(e) {
        if (e.key === 'w' && cy > 2) {
            let computedStyle = getComputedStyle(canvasDisplay)
            let ctx = canvasDisplay.getContext("2d");
            ctx.clearRect(0,0, canvasDisplay.width, canvasDisplay.height);
            cy -= 18;
            sx = 0;
            sy = 0;
            sheight = 60;
            boardMovement();      
        } 
    });
    window.addEventListener('keyup', function(e) {
        if (e.key === 'a' && cx > 2) {
            let computedStyle = getComputedStyle(canvasDisplay)
            let ctx = canvasDisplay.getContext("2d");
            ctx.clearRect(0,0, canvasDisplay.width, canvasDisplay.height);
            cx -= 18;
            sy = 325;
            sx = 130;
            boardMovement();   
            
        } 
    });
    window.addEventListener('keyup', function(e) {
        if (e.key === 's' && cy < 425) {
            let computedStyle = getComputedStyle(canvasDisplay)
            let ctx = canvasDisplay.getContext("2d");
            ctx.clearRect(0,0, canvasDisplay.width, canvasDisplay.height);
            cy += 18;
            sx = 130;
            sy = 455;
            sheight = 65;
            boardMovement();  
        }
    });
    window.addEventListener('keyup', function(e) {
        if (e.key === 'd' && cx < 885) {
            let computedStyle = getComputedStyle(canvasDisplay)
            let ctx = canvasDisplay.getContext("2d");
            ctx.clearRect(0,0, canvasDisplay.width, canvasDisplay.height);
            cx += 18;
            sx = 0;
            sy = 130;
            swidth = 65;
            boardMovement();   
        }
    });
}

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


function fuelFill() {
    var fuelCanvas = document.getElementById('fuelCanvas');
    var context = fuelCanvas.getContext('2d');
    if ((cx === 782) && (cy === 10)) {
        fuelBar.value += 10
        context.clearRect(400,10, 410, 20);
    } else if (( cx === 62) && ( cy === 46)) {
        fuelBar.value += 10 
        context.clearRect(30,30, 40, 40);
    } else if (( cx === 620 ) && ( cy === 136 )) {
        fuelBar.value += 10
        context.clearRect(325,70, 335, 80);
    } else if (( cx === 152) && ( cy === 190)) {
        fuelBar.value += 10
        context.clearRect(70,100, 80, 110);
    } else if (( cx === 530 ) && ( cy === 262 )) {
        fuelBar.value += 10
        context.clearRect(275,130, 275, 130);
    } else if (( cx === 818 ) && ( cy === 298 )) {
        fuelBar.value += 10
        context.clearRect(420,150, 430, 160);
    } else if (( cx === 26 ) && ( cy === 334 )) {
        fuelBar.value += 10
        context.clearRect(15,170, 25, 180);
    } else if (( cx === 278 ) && ( cy === 370 )) {
        fuelBar.value += 10
        context.clearRect(150,190, 160, 200);
        console.log(fuelBar.value)
    }
}

function asteroidHit(asteroid) {
        if ((cx - 169 > asteroid.acx - 30 && cx - 169 < asteroid.acx + 20) && (cy - 28 > asteroid.acy - 5 && cy - 28 < asteroid.acy + 5)) {
            healthBar.value -= 5;
    }  
}


function gameWinLose() {
    if (fuelBar.value === 100) {
        canvasDisplay.style.background = 'url(https://i.imgur.com/AurYN11.jpg)'
        canvasDisplay.style.backgroundRepeat = 'no-repeat';
        canvasDisplay.style.backgroundSize = '100% 100%';
        var context = canvasDisplay.getContext('2d');

        context.font = '45px Orbitron';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillStyle = '#1da9cc';  
        context.fillText('You made it home! Play again?', 450, 160); 
        
        context.font = '35px Orbitron';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillStyle = 'black';  
        context.fillText('Click anywhere on screen', 450, 300); 

        fuelCanvas.addEventListener('click', () => {
            location.reload();
        });
    }
    if (healthBar.value === 0) {
        canvasDisplay.style.background = 'url(https://i.imgur.com/SfoYMtN.gif)'
        canvasDisplay.style.backgroundRepeat = 'no-repeat';
        canvasDisplay.style.backgroundSize = '100% 100%';
        var context = canvasDisplay.getContext('2d');

        context.font = '45px Orbitron';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillStyle = '#1da9cc';  
        context.fillText('Mission failed. Try again?', 450, 160); 

        context.font = '35px Orbitron';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillStyle = 'white';  
        context.fillText('Click anywhere on screen', 450, 300); 

        fuelCanvas.addEventListener('click', () => {
            location.reload();
        });
    }
}
