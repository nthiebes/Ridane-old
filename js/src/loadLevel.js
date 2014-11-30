//////////////////////////////////////////////
// Reset game and load level                //
//////////////////////////////////////////////
function loadLevel( newLevel ){
	// Reset variables
    currentLevel = 'level' + newLevel;
	ground1 = levels[currentLevel][0];
	ground2 = levels[currentLevel][1];
	top1 = levels[currentLevel][2];
	blockedPositions = levels[currentLevel][3];
	rowTileCount = ground1.length;
	colTileCount = ground1[0].length;
	imageNumTiles = 16;
	tilesetImage;
	mapOffset = 0;
	mapOffset2 = 0;
	lastTime = Date.now();
	pause = false;
	moveRight = false;
	bullets = [];
	enemies = [];
	animations = [];
	blocked = [];
	events = [];
	explosions = [];
	lastFire = Date.now();
	playerInFight = false;
	playerPunching = false;
	playerBlocking = false;
	gameTime = 0;
	raining = levelData[currentLevel].raining;
	hitEnemy = false;
	direction = 'right';
	playerSpeed = 120;
	bulletSpeed = 500;
	collision = false;
	currentStamina = 100;

    animations = levelData[currentLevel].animations;
    events = levelData[currentLevel].events;

	// Blocked fields
    for( var i=0; i<blockedPositions.length; i++ ){
        blocked.push({
            pos: blockedPositions[i],
            sprite: new Sprite(spritePath, [0, 0], [32, 1], 1, [10])
        });
    }

    // Update canvas
    var canvasElements = document.getElementsByTagName('canvas');
    for( var i=0; i < canvasElements.length; i++ ){
        if( canvasElements[i].getAttribute('id') !== 'rain' ){
            canvasElements[i].width = levels[currentLevel][0][0].length * 32;
            canvasElements[i].style.left = 0;
        }
    }

    // Draw layers
    canvas2.width = canvas2.width;
    canvas3.width = canvas3.width;
    drawImage();
    drawImage2();

    // New player character
    player = levelData[currentLevel].player();

    // Reset interface
    if( levelData[currentLevel].lightning ){
    	document.getElementById('lightning').classList.add('active');
    } else{
    	document.getElementById('lightning').classList.remove('active');
    }

    if( raining ){
    	document.getElementById('rain').classList.add('active');
    } else{
    	document.getElementById('rain').classList.remove('active');
    }

    if( levelData[currentLevel].fog ){
    	document.getElementById('fog').classList.add('active');
    } else{
    	document.getElementById('fog').classList.remove('active');
    }
    
    innerHp.style.width = '100%';
    innerStamina.style.width = '100%';
    innerMana.style.width = '100%';
    document.getElementById('game-over-menu').style.display = 'none';
    document.getElementById('level-complete-menu').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';

    // Testmode
    if( testMode ){
		activateTestMode();
	}
}