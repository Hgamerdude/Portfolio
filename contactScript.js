//Objects declare
let ballA = {
    x: fX(),
    y: fY(),
    vx: fVX(),
    vy: fVY(),
    ax: 0,
    ay: 0 
};
let bY = 400;
let bVY = Math.random() * 1000;
let ballB = {
    x: fX(),
    y: bY,
    vx: fVX(),
    vy: bVY,
    ax: 0,
    ay: 0 
};
let ballC = {
    x: fX(),
    y: fY(),
    vx: fVX(),
    vy: fVY(),
    ax: 0,
    ay: 0 
}
let ballD = {
    x: fX(),
    y: fY(),
    vx: fVX(),
    vy: fVY(),
    ax: 0,
    ay: 0
}


let hold = false;
//Object connect to html
let ball1 = document.querySelector(".o1");
let ball2 = document.querySelector(".o2");
let ball3 = document.querySelector(".o3");
let ball4 = document.querySelector(".o4");

//Time
let lastTime = performance.now();
let accumulator = 0;
const fixedDt = 0.016; // 60 FPS

function fX(){
    let a = (Math.random() * 1000) + 10;
    return a;
}
function fY(){
    let b = (Math.random() * 1000) + 10;
    return b;
}
function fVX(){
    let aa = (Math.random() * 3000) - 1500;
    return aa;
}
function fVY(){
    let bb = (Math.random() * 2000);
    return bb;
}


function update(dt) {
    //MATH

    // Velocity
    if(!hold){
    ballA.vx += ballA.ax * dt;
    ballA.vy += ballA.ay * dt;
    ballB.vx += ballB.ax * dt;
    ballB.vy += ballB.ay * dt;
    ballC.vx += ballC.ax * dt;
    ballC.vy += ballC.ay * dt;
    ballD.vx += ballD.ax * dt;
    ballD.vy += ballD.ay * dt;
    }


    // Position
    ballA.x += ballA.vx * dt;
    ballA.y += ballA.vy * dt;
    ballB.x += ballB.vx * dt;
    ballB.y += ballB.vy * dt;    
    ballC.x += ballC.vx * dt;
    ballC.y += ballC.vy * dt;
    ballD.x += ballD.vx * dt;
    ballD.y += ballD.vy * dt;   

    // Floor
    const floor = window.innerHeight - 209;

    if (ballA.y >= floor) {
        ballA.y = floor;
        ballA.vy *= -.75;
        // friction
        ballA.vx *= 0.95;
        if (Math.abs(ballA.vx) < 0.1) {
            ballA.vx = 0;
        }
    }
    if (ballB.y >= floor) {
        ballB.y = floor;
        ballB.vy *= -.75;
        // friction
        ballB.vx *= 0.95;
        if (Math.abs(ballB.vx) < 0.1) {
            ballB.vx = 0;
        }
    }
    if (ballC.y >= floor) {
        ballC.y = floor;
        ballC.vy *= -.75;
        // friction
        ballC.vx *= 0.95;
        if (Math.abs(ballC.vx) < 0.1) {
            ballC.vx = 0;
        }
    }
    if (ballD.y >= floor) {
        ballD.y = floor;
        ballD.vy *= -.75;
        // friction
        ballD.vx *= 0.95;
        if (Math.abs(ballD.vx) < 0.1) {
            ballD.vx = 0;
        }
    }

    //Walls
    let wallL = -100;
    let wallR = 1540;
    let radius = 75;

    // Right
    if(ballA.x + radius >= wallR) {
        ballA.x = wallR - radius;
        ballA.vx *= -1;
    }
    if(ballB.x + radius >= wallR) {
        ballB.x = wallR - radius;
        ballB.vx *= -1;
    }
    if(ballC.x + radius >= wallR) {
        ballC.x = wallR - radius;
        ballC.vx *= -1;
    }
    if(ballD.x + radius >= wallR) {
        ballD.x = wallR - radius;
        ballD.vx *= -1;
    }

    // Left
    if(ballA.x - radius <= wallL) {
        ballA.x = wallL + radius;
        ballA.vx *= -1;
    }
    if(ballB.x - radius <= wallL) {
        ballB.x = wallL + radius;
        ballB.vx *= -1;
    }
    if(ballC.x - radius <= wallL) {
        ballC.x = wallL + radius;
        ballC.vx *= -1;
    }
    if(ballD.x - radius <= wallL) {
        ballD.x = wallL + radius;
        ballD.vx *= -1;
    }

    //Roof
    if(ballA.y <= 0){
        ballA.y = 0;
        ballA.vy *= -.95;
    }
    if(ballB.y <= 0){
        ballB.y = 0;
        ballB.vy *= -.95;
    }
    if(ballC.y <= 0){
        ballC.y = 0;
        ballC.vy *= -.95;
    }
    if(ballD.y <= 0){
        ballD.y = 0;
        ballD.vy *= -.95;
    }


    // Render
    ball1.style.top = `${ballA.y}px`;
    ball1.style.left = `${ballA.x}px`;
    ball2.style.top = `${ballB.y}px`;
    ball2.style.left = `${ballB.x}px`;
    ball3.style.top = `${ballC.y}px`;
    ball3.style.left = `${ballC.x}px`;
    ball4.style.top = `${ballD.y}px`;
    ball4.style.left = `${ballD.x}px`;

    // Tells me math works
    console.log(
        "vxA:", ballA.vx.toFixed(2),
        "vyA:", ballA.vy.toFixed(2),
        "vxB:", ballB.vx.toFixed(2),
        "vyB:", ballB.vy.toFixed(2),
        "vxC:", ballC.vx.toFixed(2),
        "vyC:", ballC.vy.toFixed(2),
        "vxD:", ballD.vx.toFixed(2),
        "vyD:", ballD.vy.toFixed(2),
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

let button = document.querySelector("button");
let input = document.querySelector("input");
let header = document.querySelector("header");
let words = document.querySelector(".text");

button.addEventListener("click", function(){
    words.style.zIndex = "-100";
    words.style.color = "white";

    let temp = Number(input.value);
    let t = Math.max(0, Math.min(temp / 100, 1));

    let ballArray = [ballA, ballB, ballC, ballD];

    ballArray.forEach(function(ball){
        if (t === 0){
            ball.vx = 0;
            ball.vy = 0;
            ball.ay = 0;
            header.style.backgroundColor = "#D6FFFA";
            header.style.color = "black";
            return;
        }
        if(temp >= 100){
            header.style.backgroundColor = "red";
            header.style.color = "black";
            tempH =true;
        }
        if((temp > 0) && (temp < 100)){
            header.style.backgroundColor = "blue"; 
            header.style.color = "white";
        }

        if(temp >= 200){
            t *= 10 * (temp / 100);
        }
        let randomX = (Math.random() - 0.5) * 800 * t;
        let randomY = (Math.random() - 0.5) * 800 * t;

        ball.vx = ball.vx * (0.5 + t) + randomX;
        ball.vy = ball.vy * (0.5 + t) + randomY;

        ball.restitution = 0.2 + (0.8 * t);
    });
});