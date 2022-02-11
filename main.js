const robot = require("robotjs");

function moveMouseSmoothly(x, y) {
    robot.moveMouseSmooth(x, y);
}

function randomMouseMovement() {
    const x = Math.floor(Math.random() * (1920 - 1)) + 1;
    const y = Math.floor(Math.random() * (1080 - 1)) + 1;
    moveMouseSmoothly(x, y);
}


setInterval(function(){
    randomMouseMovement()
}, 5000)