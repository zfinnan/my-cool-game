// const movementDisplay = document.querySelector('#movement')
const canvasDisplay = document.querySelector('#board')

const computedStyle = getComputedStyle(canvasDisplay)
const height = computedStyle.height
const width = computedStyle.width 
canvasDisplay.height = height.replace('px','')
canvasDisplay.width = width.replace('px','')

const keys = [];

const player = {
    x: 0,
    y: 0,
    width: ???,
    height: ???,
    frameX: 0,
    frameY: 0,
    speed: 9,
    moving: false 
}

const playerSprite = new Image();
playerSprite.src = "...";

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

    setInterval(myTimer, 10000);  
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
}

function myTimer() {
    let computedStyle = getComputedStyle(canvasDisplay)
    let ctx = canvasDisplay.getContext("2d");
    ctx.clearRect(0,0, canvasDisplay.width, canvasDisplay.height);
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

