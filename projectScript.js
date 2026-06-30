//Objects declare
let ballA = {
    x: 0,
    y: 850,
    vx: 0,
    vy: 0,
    ax: 0,
    ay: 980 
};
let hold = false;

let threshold = 0;

//Object connect to html
let ball1 = document.querySelector(".o1");

//Time
let lastTime = performance.now();
let accumulator = 0;
const fixedDt = 0.016; // 60 FPS

function fX(){
    let a = 0;
    return a;
}
function fY(){
    let b = 850;
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
    const floor = 850;

    if(ballA.y >= floor) {
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
    if(ballA.x + radius >= wallR) {
        ballA.x = wallR - radius;
        ballA.vx *= -1;
    }

    // Left
    if(ballA.x - radius <= wallL) {
        ballA.x = wallL + radius;
        ballA.vx *= -1;
    }

    //Project Rectangles
    if((ballA.x >= 1000) && (ballA.x <= 1200)){
        if((((ballA.y >= 490) && (ballA.y <= 690)) || ((ballA.y >= 110) && (ballA.y <= 310)))){
            ballA.vx *= -.95;
        }
    }
    if(ballA.x >= 1050){
        ballA.vx *= .9;
        ballA.vy *= .6;
        
        if(ballA.x >=1150){
            if(ballA.y>=700){
                threshold = 1; // 1 is Playlist Project
            }
            else if(ballA.y>=320){
                threshold = 2; // 2 is CYOA Project
            }
            else{
                threshold = 3; // 3 is Change Project
            }
            console.log(threshold);
        }

        if(ballA.vy <= 50){
            ballA.vy = 0;
            ballA.ay = 0;
        }
    }

    // Render
    ball1.style.top = `${ballA.y}px`;
    ball1.style.left = `${ballA.x}px`;

    // Tells me math works
    console.log(
        "x:", ballA.x.toFixed(2),
        "y:", ballA.y.toFixed(2),
    );

    let p = document.querySelector("p");
    let a = document.querySelector(".project-link");


    if(threshold === 1){
        p.innerHTML = "<h2>Playlist Project<h2> <br> A project I did on my own where I focused on creating <br> a nice playlist where you can just compile songs and with a nice <br> design. Testing my abilities in HTML, javascript and CSS.";
        a.innerHTML = "Visit Project!";
        a.href = "PlaylistProject-main/index.html";
    }
    else if(threshold === 2){
        p.innerHTML = "<h2>CYOA Project<h2> <br> A project testing my abilities in javascript which I demonstrated <br> mathematical capabilities and adventure related to ducks while <br> also utilizing HTML and CSS.";
        a.innerHTML = "Visit Project!";
        a.href = "CYOA-main/index.html";
    }
    else if(threshold === 3){
        p.innerHTML = "<h2>Playlist Project<h2> <br> A project testing my abilities in HTML and CSS and I also <br> incorporated accessibility options for different languages. This <br> project also has the good message that food waste is bad";
        a.innerHTML = "Visit Project!";
        a.href = "ChangeProject-main/indexEN.html";
    }
    else{
        p.innerHTML = "Shoot towards the different items to see my projects!";
        a.innerHTML = "";
        a.href = "";
    }
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
    threshold = 0;
    
    ballA.x = 0;
    ballA.y = 850;
    ballA.ay = 980;

    let angle = input.value;
    angle *= Math.PI;
    angle /= 180;

    let sin = Math.sin(angle);
    let cos = Math.cos(angle);

    console.log(sin);
    console.log(cos);

    let v = 1500;
    ballA.vy =  (-1 * (v * sin));
    ballA.vx = (v * cos);


    click = true;
});