//////////////////////////////////////////////
// Move enemy to player                     //
//////////////////////////////////////////////
function moveEnemy( enemyPos, i, dt ){
    var playerX = player.pos[0],
        playerY = player.pos[1],
        enemyX = enemyPos[0],
        enemyY = enemyPos[1]
        enemyCollision = false,
        enemySize = [enemies[i].hitbox[1], enemies[i].spriteHeight],
        movement = Math.floor(enemies[i].speed * dt),
        playerPos = [player.pos[0] + player.hitbox[0], player.pos[1]],
        collisionDir = [false, false, false, false],
        movementDir = [false, false, false, false];



    // Movement left
    if( playerX + player.hitbox[1] + 1 < enemyX && enemies[i].alternativeDir !== 'right' ){
        // Object collision
        for( var j=0; j<blocked.length; j++ ){
            if( boxCollides(blocked[j].pos, blocked[j].sprite.size, [ enemyX - movement + enemies[i].hitbox[0], enemyY ], enemySize) ){
                enemyCollision = true;
                collisionDir[1] = true;
            }
        }

        // Enemy collision
        for( var j=0; j<enemies.length; j++ ){
            if( boxCollides([enemies[j].pos[0] + enemies[j].hitbox[0], enemies[j].pos[1]], [enemies[j].hitbox[1] + 5, enemies[j].spriteHeight], [ enemyX - movement + enemies[i].hitbox[0], enemyY ], enemySize) ){
                if( j != i ){
                    enemyCollision = true;
                    //collisionDir[1] = true;
                }
            }
        }

        // Player collision
        if( boxCollides(playerPos, [player.hitbox[1] + 1, player.spriteHeight], [ enemyX - movement + enemies[i].hitbox[0], enemyY ], enemySize) ){
            enemyCollision = true;
            collisionDir[1] = true;
        }

        if( !enemyCollision ){
            enemies[i].pos[0] -= movement;
            movementDir[1] = true;

            // Sprite direction
            enemies[i].sprite.pos = [enemies[i].spriteOffset, enemies[i].spriteHeight*3];
        }

        enemyCollision = false;
    }

    // Movement right
    if( playerX > enemyX + enemies[i].hitbox[1] + 1 && enemies[i].alternativeDir !== 'left' ){
        // Object collision
        for( var j=0; j<blocked.length; j++ ){
            if( boxCollides(blocked[j].pos, blocked[j].sprite.size, [ enemyX + movement + enemies[i].hitbox[0], enemyY ], enemySize) ){
                enemyCollision = true;
                collisionDir[3] = true;
            }
        }

        // Enemy collision
        for( var j=0; j<enemies.length; j++ ){
            if( boxCollides([enemies[j].pos[0] + enemies[j].hitbox[0], enemies[j].pos[1]], [enemies[j].hitbox[1], enemies[j].spriteHeight], [ enemyX + movement + enemies[i].hitbox[0], enemyY ], [enemies[i].hitbox[1] + 5, enemies[i].spriteHeight]) ){
                if( j != i ){
                    enemyCollision = true;
                    //collisionDir[3] = true;
                }
            }
        }

        // Player collision
        if( boxCollides(playerPos, [player.hitbox[1], player.spriteHeight], [ enemyX + movement + enemies[i].hitbox[0], enemyY ], enemySize) ){
            enemyCollision = true;
            collisionDir[3] = true;
        }

        if( !enemyCollision ){
            enemies[i].pos[0] += movement;
            movementDir[3] = true;

            // Sprite direction
            enemies[i].sprite.pos = [enemies[i].spriteOffset, enemies[i].spriteHeight*2];
        }

        enemyCollision = false;
    }

    // Movement top
    if( playerY < enemyY && enemies[i].alternativeDir !== 'down' ){
        // Object collision
        for( var j=0; j<blocked.length; j++ ){
            if( boxCollides(blocked[j].pos, blocked[j].sprite.size, [ enemyX + enemies[i].hitbox[0], enemyY - movement ], enemySize) ){
                enemyCollision = true;
                collisionDir[2] = true;
            }
        }

        // Enemy collision
        for( var j=0; j<enemies.length; j++ ){
            if( boxCollides([enemies[j].pos[0] + enemies[j].hitbox[0], enemies[j].pos[1]], [enemies[j].hitbox[1], enemies[j].spriteHeight + 1], [ enemyX + enemies[i].hitbox[0], enemyY - movement ], enemySize) ){
                if( j != i ){
                    enemyCollision = true;
                    //collisionDir[2] = true;
                }
            }
        }

        // Player collision
        if( boxCollides(playerPos, [player.hitbox[1], player.spriteHeight + 1], [ enemyX + enemies[i].hitbox[0], enemyY - 1 - movement ], enemySize) ){
            enemyCollision = true;
            collisionDir[2] = true;
        }

        if( !enemyCollision ){
            enemies[i].pos[1] -= movement;
            movementDir[2] = true;

            // Sprite direction
            if( enemyX < playerX ){
                enemies[i].sprite.pos = [enemies[i].spriteOffset, enemies[i].spriteHeight*2];
            } else{
                enemies[i].sprite.pos = [enemies[i].spriteOffset, enemies[i].spriteHeight*3];
            }
        }

        enemyCollision = false;
    }

    // Movement down
    if( playerY > enemyY && enemies[i].alternativeDir !== 'up' ){
        // Object collision
        for( var j=0; j<blocked.length; j++ ){
            if( boxCollides(blocked[j].pos, blocked[j].sprite.size, [ enemyX + enemies[i].hitbox[0], enemyY + movement ], enemySize) ){
                enemyCollision = true;
                collisionDir[0] = true;
            }
        }

        // Enemy collision
        for( var j=0; j<enemies.length; j++ ){
            if( boxCollides([enemies[j].pos[0] + enemies[j].hitbox[0], enemies[j].pos[1]], [enemies[j].hitbox[1], enemies[j].spriteHeight + 1], [ enemyX + enemies[i].hitbox[0], enemyY + movement ], enemySize) ){
                if( j != i ){
                    enemyCollision = true;
                    //collisionDir[0] = true;
                }
            }
        }

        // Player collision
        if( boxCollides(playerPos, [player.hitbox[1], player.spriteHeight + 1], [ enemyX + enemies[i].hitbox[0], enemyY + movement ], enemySize) ){
            enemyCollision = true;
            collisionDir[0] = true;
        }

        if( !enemyCollision ){
            enemies[i].pos[1] += movement;
            movementDir[2] = true;

            // Sprite direction
            if( enemyX < playerX ){
                enemies[i].sprite.pos = [enemies[i].spriteOffset, enemies[i].spriteHeight*2];
            } else{
                enemies[i].sprite.pos = [enemies[i].spriteOffset, enemies[i].spriteHeight*3];
            }
        }

        enemyCollision = false;
    }

    // Blocked coming from right side
    if( collisionDir[1] && !movementDir[0] && !movementDir[2] ){
        // Blocked bottom, move up
        if( collisionDir[0] && !collisionDir[2] ){
            enemies[i].alternativeDir = 'up';
        }

        // Blocked top, move down
        if( collisionDir[2] && !collisionDir[0] ){
            enemies[i].alternativeDir = 'down';
        }

        // Blocked left, move up or down
        if( !collisionDir[2] && !collisionDir[0] ){
            if( enemies[i].alternativeDir !== 'up' && enemies[i].alternativeDir !== 'down' ){
                enemies[i].alternativeDir = 'up down';
            }
        }

        // Blocked bottom and top, move right
        if( collisionDir[2] && collisionDir[0] ){
            enemies[i].alternativeDir = 'right';
        }
    }

    // Blocked coming from left side
    if( collisionDir[3] && !movementDir[0] && !movementDir[2] ){
        // Blocked bottom, move up
        if( collisionDir[0] && !collisionDir[2] ){
            enemies[i].alternativeDir = 'up';
        }

        // Blocked top, move down
        if( collisionDir[2] && !collisionDir[0] ){
            enemies[i].alternativeDir = 'down';
        }

        // Blocked left, move up or down
        if( !collisionDir[2] && !collisionDir[0] ){
            if( enemies[i].alternativeDir !== 'up' && enemies[i].alternativeDir !== 'down' ){
                enemies[i].alternativeDir = 'up down';
            }
        }

        // Blocked bottom and top, move left
        if( collisionDir[2] && collisionDir[0] ){
            enemies[i].alternativeDir = 'left';
        }
    }

    // Blocked coming from top
    if( collisionDir[0] && !movementDir[1] && !movementDir[3] ){
        // Blocked left, move right
        if( collisionDir[1] && !collisionDir[3] ){
            enemies[i].alternativeDir = 'right';
        }

        // Blocked right, move left
        if( collisionDir[3] && !collisionDir[1] ){
            enemies[i].alternativeDir = 'left';
        }

        // Blocked bottom, move left or right
        if( !collisionDir[3] && !collisionDir[1] ){
            if( enemies[i].alternativeDir !== 'left' && enemies[i].alternativeDir !== 'right' ){
                enemies[i].alternativeDir = 'left right';
            }
        }

        // Blocked left and right, move up
        if( collisionDir[3] && collisionDir[1] ){
            enemies[i].alternativeDir = 'up';
        }
    }

    // Blocked coming from bottom
    if( collisionDir[2] && !movementDir[1] && !movementDir[3] ){
        // Blocked left, move right
        if( collisionDir[1] && !collisionDir[3] ){
            enemies[i].alternativeDir = 'right';
        }

        // Blocked right, move left
        if( collisionDir[3] && !collisionDir[1] ){
            enemies[i].alternativeDir = 'left';
        }

        // Blocked top, move left or right
        if( !collisionDir[3] && !collisionDir[1] ){
            if( enemies[i].alternativeDir !== 'left' && enemies[i].alternativeDir !== 'right' ){
                enemies[i].alternativeDir = 'left right';
            }
        }

        // Blocked left and right, move down
        if( collisionDir[3] && collisionDir[1] ){
            enemies[i].alternativeDir = 'down';
        }
    }

    // Random direction
    if( enemies[i].alternativeDir === 'left right' ){
        var random = getRandom(0,1);
        if( random === 0 ){
            enemies[i].alternativeDir = 'left';
        } else{
            enemies[i].alternativeDir = 'right';
        }
    }
    if( enemies[i].alternativeDir === 'up down' ){
        var random = getRandom(0,1);
        if( random === 0 ){
            enemies[i].alternativeDir = 'up';
        } else{
            enemies[i].alternativeDir = 'down';
        }
    }

    // Move to right if blocked
    if( enemies[i].alternativeDir === 'right' ){
        // Object collision
        for( var j=0; j<blocked.length; j++ ){
            if( boxCollides(blocked[j].pos, blocked[j].sprite.size, [ enemyX + movement + enemies[i].hitbox[0], enemyY ], enemySize) ){
                collisionDir[3] = true;
            }
        }

        // Enemy collision
        for( var j=0; j<enemies.length; j++ ){
            if( boxCollides([enemies[j].pos[0] + enemies[j].hitbox[0], enemies[j].pos[1]], [enemies[j].hitbox[1], enemies[j].spriteHeight], [ enemyX + movement + enemies[i].hitbox[0], enemyY ], [enemies[i].hitbox[1] + 5, enemies[i].spriteHeight]) ){
                if( j != i ){
                    collisionDir[3] = true;
                }
            }
        }

        // Player collision
        if( boxCollides(playerPos, [player.hitbox[1], player.spriteHeight], [ enemyX + movement + enemies[i].hitbox[0], enemyY ], enemySize) ){
            collisionDir[3] = true;
        }



        // Movement
        if( ( !movementDir[0] && !movementDir[2] && !collisionDir[3] ) ){
            enemies[i].pos[0] += movement;
            movementDir[1] = true;

            // Sprite direction
            enemies[i].sprite.pos = [enemies[i].spriteOffset, enemies[i].spriteHeight*2];
        } else{
            enemies[i].alternativeDir = '';
        }
    }

    // Move to left if blocked
    if( enemies[i].alternativeDir === 'left' ){
        // Object collision
        for( var j=0; j<blocked.length; j++ ){
            if( boxCollides(blocked[j].pos, blocked[j].sprite.size, [ enemyX - movement + enemies[i].hitbox[0], enemyY ], enemySize) ){
                collisionDir[1] = true;
            }
        }

        // Enemy collision
        for( var j=0; j<enemies.length; j++ ){
            if( boxCollides([enemies[j].pos[0] + enemies[j].hitbox[0], enemies[j].pos[1]], [enemies[j].hitbox[1] + 5, enemies[j].spriteHeight], [ enemyX - movement + enemies[i].hitbox[0], enemyY ], enemySize) ){
                if( j != i ){
                    collisionDir[1] = true;
                }
            }
        }

        // Player collision
        if( boxCollides(playerPos, [player.hitbox[1] + 1, player.spriteHeight], [ enemyX - movement + enemies[i].hitbox[0], enemyY ], enemySize) ){
            collisionDir[1] = true;
        }
        
        // Movement
        if( ( !movementDir[0] && !movementDir[2] && !collisionDir[1] ) ){
            enemies[i].pos[0] -= movement;
            movementDir[3] = true;

            // Sprite direction
            enemies[i].sprite.pos = [enemies[i].spriteOffset, enemies[i].spriteHeight*3];
        } else{
            enemies[i].alternativeDir = '';
        }
    }

    // Move up if blocked
    if( enemies[i].alternativeDir === 'up' ){
        // Object collision
        for( var j=0; j<blocked.length; j++ ){
            if( boxCollides(blocked[j].pos, blocked[j].sprite.size, [ enemyX + enemies[i].hitbox[0], enemyY - movement ], enemySize) ){
                collisionDir[2] = true;
            }
        }

        // Enemy collision
        for( var j=0; j<enemies.length; j++ ){
            if( boxCollides([enemies[j].pos[0] + enemies[j].hitbox[0], enemies[j].pos[1]], [enemies[j].hitbox[1], enemies[j].spriteHeight + 5], [ enemyX + enemies[i].hitbox[0], enemyY - movement ], enemySize) ){
                if( j != i ){
                    collisionDir[2] = true;
                }
            }
        }

        // Player collision
        if( boxCollides(playerPos, [player.hitbox[1], player.spriteHeight + 1], [ enemyX + enemies[i].hitbox[0], enemyY - movement ], enemySize) ){
            collisionDir[2] = true;
        }

        // Movement
        if( !movementDir[1] && !movementDir[3] && !collisionDir[2] ){
            enemies[i].pos[1] -= movement;
            movementDir[0] = true;

            // Sprite direction
            if( enemyX < playerX ){
                enemies[i].sprite.pos = [enemies[i].spriteOffset, enemies[i].spriteHeight*2];
            } else{
                enemies[i].sprite.pos = [enemies[i].spriteOffset, enemies[i].spriteHeight*3];
            }
        } else{
            enemies[i].alternativeDir = '';
        }
    }

    // Move down if blocked
    if( enemies[i].alternativeDir === 'down' ){
        // Object collision
        for( var j=0; j<blocked.length; j++ ){
            if( boxCollides(blocked[j].pos, blocked[j].sprite.size, [ enemyX + enemies[i].hitbox[0], enemyY + movement ], enemySize) ){
                collisionDir[0] = true;
            }
        }

        // Enemy collision
        for( var j=0; j<enemies.length; j++ ){
            if( boxCollides([enemies[j].pos[0] + enemies[j].hitbox[0], enemies[j].pos[1]], [enemies[j].hitbox[1], enemies[j].spriteHeight], [ enemyX + enemies[i].hitbox[0], enemyY + movement ], enemySize + 5) ){
                if( j != i ){
                    collisionDir[0] = true;
                }
            }
        }

        // Player collision
        if( boxCollides(playerPos, [player.hitbox[1], player.spriteHeight], [ enemyX + enemies[i].hitbox[0], enemyY + movement ], enemySize + 1) ){
            collisionDir[0] = true;
        }

        // Movement
        if( !movementDir[1] && !movementDir[3] && !collisionDir[0] ){
            enemies[i].pos[1] += movement;
            movementDir[2] = true;

            // Sprite direction
            if( enemyX < playerX ){
                enemies[i].sprite.pos = [enemies[i].spriteOffset, enemies[i].spriteHeight*2];
            } else{
                enemies[i].sprite.pos = [enemies[i].spriteOffset, enemies[i].spriteHeight*3];
            }
        } else{
            enemies[i].alternativeDir = '';
        }
    }



    // Start fight if not moving and in range
    if( !movementDir[0] && !movementDir[1] && !movementDir[2] && !movementDir[3] && enemyY === playerY ){ // && enemyX >= playerX - playerSize[0][0] - 3 && enemyX <= playerX + playerSize[0][0] + 3
        
        if( enemyX >= playerX - player.hitbox[1] - 3 && enemyX <= playerX + player.hitbox[1] + 3 ){
            fight( enemies[i] );
        } else{
            // Reset sprite
            enemies[i].sprite.frames = [0];
            if( enemyX < playerX ){
                enemies[i].sprite.pos = [enemies[i].spriteOffset, 0];
            } else{
                enemies[i].sprite.pos = [enemies[i].spriteOffset, enemies[i].spriteHeight];
            }
        }

    } else{
        // No combat
        enemies[i].sprite.frames = [0, 1, 2, 3];
        enemies[i].sprite.speed = enemies[i].walkAnimationSpeed;
        enemies[i].sprite.inProgress = false;
        enemies[i].attacking = false;
        playerInFight = false;
    }

    // Reset
    collisionDir = [false, false, false, false];
    movementDir = [false, false, false, false];
}