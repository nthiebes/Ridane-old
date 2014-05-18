(function() {
    var pressedKeys = {};

    function setKey(event, status) {
        var code = event.keyCode;
        var key;

        switch(code) {
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
    });

    document.addEventListener('keyup', function(e) {
        setKey(e, false);
    });

    window.addEventListener('blur', function() {
        pressedKeys = {};
    });

    // Mobile controls touchevents
    document.getElementById('fight').addEventListener('touchstart', function(){
        setKey({keyCode: 32}, true);
    }, false);

    document.getElementById('top').addEventListener('touchstart', function(){
        setKey({keyCode: 38}, true);
    }, false);

    document.getElementById('top-right').addEventListener('touchstart', function(){
        setKey({keyCode: 38}, true);
        setKey({keyCode: 39}, true);
    }, false);

    document.getElementById('right').addEventListener('touchstart', function(){
        setKey({keyCode: 39}, true);
    }, false);

    document.getElementById('bottom-right').addEventListener('touchstart', function(){
        setKey({keyCode: 39}, true);
        setKey({keyCode: 40}, true);
    }, false);

    document.getElementById('bottom').addEventListener('touchstart', function(){
        setKey({keyCode: 40}, true);
    }, false);

    document.getElementById('bottom-left').addEventListener('touchstart', function(){
        setKey({keyCode: 37}, true);
        setKey({keyCode: 40}, true);
    }, false);

    document.getElementById('left').addEventListener('touchstart', function(){
        setKey({keyCode: 37}, true);
    }, false);

    document.getElementById('top-left').addEventListener('touchstart', function(){
        setKey({keyCode: 37}, true);
        setKey({keyCode: 38}, true);
    }, false);

    // Reset input on touchend
    document.getElementsByTagName('body')[0].addEventListener('touchend', function(){
        setKey({keyCode: 32}, false);
        setKey({keyCode: 37}, false);
        setKey({keyCode: 38}, false);
        setKey({keyCode: 39}, false);
        setKey({keyCode: 40}, false);
    }, false);

    window.input = {
        isDown: function(key) {
            return pressedKeys[key.toUpperCase()];
        }
    };
})();