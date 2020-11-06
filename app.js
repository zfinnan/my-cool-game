// const movementDisplay = document.querySelector('#movement')
const canvasDisplay = document.querySelector('#board')

const computedStyle = getComputedStyle(canvasDisplay)
const height = computedStyle.height
const width = computedStyle.width 
canvasDisplay.height = height.replace('px','')
canvasDisplay.width = width.replace('px','')


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
    // startButton.onclick = setTimeout(myTimer, 0);  
    setTimeout(playerRender, 10000);
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

    // setTimeout(playerRender, 0); 
    playerRender();
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
sprite.style.zIndex = '1';
const totalMovement = [cx + cy + sx + sy];

function playerRender() {
    var canvasDisplay = document.getElementById('board');
    var context = canvasDisplay.getContext('2d');
   
    sprite.onload = function() {
        context.drawImage(sprite, sx, sy, swidth, sheight, cx, cy, 50, 50);
    }
    sprite.src = 'https://opengameart.org/sites/default/files/shipsprite1.png';
    sprite.style.zIndex = '1';
    
    // setTimeout(movePlayer, 0);
    
    
    movePlayer();
}

function boardMovement() {
    var canvasDisplay = document.getElementById('board');
    var context = canvasDisplay.getContext('2d');
   
    sprite.onload = function() {
        context.drawImage(sprite, sx, sy, swidth, sheight, cx, cy, 50, 50);
    }
    sprite.src = 'https://opengameart.org/sites/default/files/shipsprite1.png';
    sprite.style.zIndex = '1';
}


function movePlayer() {
    window.addEventListener('keyup', function(e) {
        if (e.key === 'w' && cy > 2) {
            let computedStyle = getComputedStyle(canvasDisplay)
            let ctx = canvasDisplay.getContext("2d");
            ctx.clearRect(0,0, canvasDisplay.width, canvasDisplay.height);
            cy -= 15;
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
            cx -= 15;
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
            cy += 15
            sx = 130;
            sy = 455;
            sheight = 65;
            // cy = [];
            boardMovement();  
        }
    });
    window.addEventListener('keyup', function(e) {
        if (e.key === 'd' && cx < 885) {
            let computedStyle = getComputedStyle(canvasDisplay)
            let ctx = canvasDisplay.getContext("2d");
            ctx.clearRect(0,0, canvasDisplay.width, canvasDisplay.height);
            cx += 15
            sx = 0;
            sy = 130;
            swidth = 65;
            boardMovement();   
        }
    });
}

    // allows you to hold buttons down for movement
    // const keys = [];

    // window.addEventListener('keydown', function(e) {
    //     keys[e.key] = true;
    //     console.log(keys);
    // });
    // window.addEventListener('keyup', function(e) {
    //     delete keys[e.key];
    // });dddd

// function detectHit() {
//     // hit coming in from the right
//     if (sprite < asteroid.x + asteroid.width 
//         && hero.x + hero.width > ogre.x 
//         && hero.y < ogre.y + ogre.height
//         && hero.y + hero.height > ogre.y) {
//             ogre.alive = false
//         }
//     }
