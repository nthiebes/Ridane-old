//////////////////////////////////////////////
// Fight animation                          //
//////////////////////////////////////////////
function fight( enemy ){
    // Reset animation
    if( !enemy.sprite.inProgress ){
        enemy.sprite._index = 0;
    }

    // Set stats
    enemy.attacking = true;
    enemy.sprite.speed = enemy.fightAnimationSpeed;
    enemy.sprite.inProgress = true;
    playerInFight = true;

    // Direction
    if( enemy.pos[0] > player.pos[0] ){
        enemy.sprite.pos = [enemy.spriteOffset, enemy.spriteHeight*5];
    } else{
        enemy.sprite.pos = [enemy.spriteOffset, enemy.spriteHeight*4];
    }
    enemy.sprite.frames = [0, 1, 2, 1];

    // Successful hit
    var idx = Math.floor(enemy.sprite._index);
    var frame = enemy.sprite.frames[idx % enemy.sprite.frames.length];

    if( frame === enemy.sprite.frames.length - 2 && enemy.hitPlayer ){
        enemy.hitPlayer = false;
        dealDamageToPlayer( enemy );
    } else if( frame === enemy.sprite.frames.length - 3 ){
        enemy.hitPlayer = true;
    }
}


//////////////////////////////////////////////
// Calculate and deal damage to player      //
//////////////////////////////////////////////
function dealDamageToPlayer( enemy ){
    if( sound ){
        $.mbAudio.play('effectSprite2', 'grunt' + getRandom(1,5));
    }

    player.currentHealth -= enemy.damage;
    innerHp.style.width = (player.currentHealth / player.health) * 100 + '%';
    if( player.currentHealth <= 0 ){
        gameOver();
    }
}


//////////////////////////////////////////////
// Calculate and deal damage to enemy       //
//////////////////////////////////////////////
function dealDamageToEnemy( enemy, index ){
    if( sound ){
        $.mbAudio.play('effectSprite', 'hit' + getRandom(1, 2));
    }

    enemy.currentHealth -= player.damage;
    if( enemy.currentHealth <= 0 ){
        for( var i=0; i<enemies.length; i++ ){
            if( i === index ){
                enemies.splice(i, 1);
                playerInFight = false;
            }
        }
    }
}