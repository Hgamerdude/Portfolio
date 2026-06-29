//Objects declare
let ballA = {
    x: 0,
    y: 634,
    vx: 0,
    vy: 0,
    ax: 0,
    ay: 980 
};
let hold = false;
//Object connect to html
let ball1 = document.querySelector(".o1");

//Time
let lastTime = performance.now();
let accumulator = 0;
const fixedDt = 0.016; // 60 FPS

function fX(){
    let a = 400;
    return a;
}
function fY(){
    let b = 634;
    return b;
}
function fVX(){
    let aa = (Math.random() * 1000) + -510;
    return aa;
}
function fVY(){
    let bb = (Math.random() * 1000) + -510;
    return bb;
}


function update(dt) {
    //MATH

    // Velocity
    if(!hold){
    ballA.vx += ballA.ax * dt;
    ballA.vy += ballA.ay * dt;
    }

    // Position
    ballA.x += ballA.vx * dt;
    ballA.y += ballA.vy * dt; 

    // Floor
    const floor = window.innerHeight - 200;

    if (ballA.y >= floor) {
        ballA.y = floor;
        ballA.vy *= -.75;
        // friction
        ballA.vx *= 0.95;
        if (Math.abs(ballA.vx) < 0.1) {
            ballA.vx = 0;
        }
    }
    // Roof 
    if(ballA.y <= 0){
        ballA.y = 0;
        ballA.vy *= -.95;
    }


    //Walls
    let wallL = -100;
    let wallR = 1550;
    let radius = 75;

    // Right
    if (ballA.x + radius >= wallR) {
        ballA.x = wallR - radius;
        ballA.vx *= -1;
    }

    // Left
    if (ballA.x - radius <= wallL) {
        ballA.x = wallL + radius;
        ballA.vx *= -1;
    }

    // Render
    ball1.style.top = `${ballA.y}px`;
    ball1.style.left = `${ballA.x}px`;

    // Tells me math works
    console.log(
        "x:", ballA.x.toFixed(2),
        "y:", ballA.y.toFixed(2),
    );
}


//Time
function gameLoop(now) {
    let frameTime = (now - lastTime) / 1000;
    lastTime = now;

    frameTime = Math.min(frameTime, 0.05);
    accumulator += frameTime;

    while (accumulator >= fixedDt) {
        update(fixedDt);
        accumulator -= fixedDt;
    }

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

let launch = document.querySelector(".launch");
let input = document.querySelector("input");


launch.addEventListener("click", function(){

    ball1.style.visibility = "visible";
    
    ballA.x = 0;
    ballA.y = 634;

    let angle = input.value;
    angle *= Math.PI;
    angle /= 180;

    console.log("LAUNCH");

    let sin = Math.sin(angle);
    let cos = Math.cos(angle);

    console.log(sin);
    console.log(cos);

    let v = 1500;
    ballA.vy =  (-1 * (v * sin));
    ballA.vx = (v * cos);


    click = true;
});