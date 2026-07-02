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
        p.style.fontSize = "20px";
        p.innerHTML = "<h2>Playlist-Projekt<h2> <br> Ein Projekt, das ich selbst gemacht habe, bei dem ich mich darauf konzentriert habe, <br> eine schöne Playlist zu erstellen, in der man einfach Songs sammeln kann, mit einem schönen <br> Design. Es testet meine Fähigkeiten in HTML, JavaScript und CSS.";
        a.innerHTML = "Projekt ansehen!";
        a.href = "https://hgamerdude.github.io/flw1-playlist-22-23-starter/";
    }
    else if(threshold === 2){
        p.style.fontSize = "20px";
        p.innerHTML = "<h2>CYOA-Projekt<h2> <br> Ein Projekt, das meine JavaScript-Fähigkeiten testet, bei dem ich <br> mathematische Fähigkeiten und ein Enten-Abenteuer demonstriert habe, während ich <br> HTML und CSS genutzt habe.";
        a.innerHTML = "Projekt ansehen!";
        a.href = "https://hgamerdude.github.io/int-u3-project-starter-code/";
    }
    else if(threshold === 3){
        p.style.fontSize = "20px";
        p.innerHTML = "<h2>Change-Projekt<h2> <br> Ein Projekt, das meine Fähigkeiten in HTML und CSS testet und bei dem ich <br> auch Barrierefreiheitsoptionen für verschiedene Sprachen integriert habe. Dieses <br> Projekt vermittelt außerdem die Botschaft, dass Lebensmittelverschwendung schlecht ist.";
        a.innerHTML = "Projekt ansehen!";
        a.href = "https://hgamerdude.github.io/ChangeProject/indexEN.html";
    }
    else{
        p.style.fontSize = "30px";
        p.innerHTML = "Schieße auf die verschiedenen Objekte, um meine Projekte zu sehen!";
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