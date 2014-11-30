(function() {
    var pressedKeys = {};

    function setKey(event, status) {
        var code = event.keyCode;
        var key;

        switch(code){
        case 17:
            key = 'CMD'; break;
        case 32:
            key = 'SPACE'; break;
        case 37:
            key = 'LEFT'; break;
        case 38:
            key = 'UP'; break;
        case 39:
            key = 'RIGHT'; break;
        case 40:
            key = 'DOWN'; break;
        default:
            // Convert ASCII codes to letters
            key = String.fromCharCode(code);
        }

        pressedKeys[key] = status;
    }

    document.addEventListener('keydown', function(e) {
        setKey(e, true);

        // Switch between levels
        if( testMode ){
            if( e.keyCode === 102 ){
                currentLevelInt++;
                loadLevel(currentLevelInt);
            } else if( e.keyCode === 100 ){
                currentLevelInt--;
                loadLevel(currentLevelInt);
            }
        }

        if( e.keyCode === 80 ){
            console.log( player.pos[0] + player.hitbox[0] + mapOffset, player.pos[1] + mapOffset2 );
        }
    });

    document.addEventListener('keyup', function(e) {
        setKey(e, false);
    });

    window.addEventListener('blur', function() {
        pressedKeys = {};
    });

    window.input = {
        isDown: function(key) {
            return pressedKeys[key.toUpperCase()];
        }
    };
})();