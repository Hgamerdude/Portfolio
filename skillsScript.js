let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;

document.querySelector(".b1").addEventListener("click", function(){
    if((counter1 % 2) === 0){
        document.querySelector(".b1").innerHTML = "<ul><li>Programming Fundamentals - Experience with Java, Python, JavaScript, and HTML/CSS, including logic building and basic OOP</li><li>Problem Decomposition – Ability to break complex problems (coding or physics) into manageable steps.</li><li>Engineering Thinking – Approaching problems with systems, efficiency, and real-world application in mind.</li></ul>";
        document.querySelector(".b1").className ="b2";

    };
    if((counter1 % 2) === 1){
        document.querySelector(".b2").innerHTML = "Technical Skills"
        document.querySelector(".b2").className ="b1";
    }
    counter1 += 1;
    counter();
});
document.querySelector(".b3").addEventListener("click", function(){
    if((counter2 % 2) === 0){
        document.querySelector(".b3").innerHTML = "<ul><li>Advanced STEM Knowledge – Strong foundation from rigorous IB and AP coursework in math, physics, and chemistry.</li><li>Quantitative Reasoning – Ability to work through calculations, formulas, and data-driven problems.</li><li>Research & Analysis – Experience analyzing sources, identifying gaps, and forming structured arguments.</li></ul>";
        document.querySelector(".b3").className ="b4";

    };
    if((counter2 % 2) === 1){
        document.querySelector(".b4").innerHTML = "Academic Skills"
        document.querySelector(".b4").className ="b3";
    }
    counter2 += 1;
    counter();
});
document.querySelector(".b5").addEventListener("click", function(){
    if((counter3 % 2) === 0){
        document.querySelector(".b5").innerHTML = "<ul><li>Leadership – President of Interact Club with experience organizing events and leading initiatives.</li><li>Communication – Able to write professionally and explain ideas clearly.</li><li>Initiative – Actively pursuing internships, programs, and opportunities to grow.</li></ul>";
        document.querySelector(".b5").className ="b6";
    };
    if((counter3 % 2) === 1){
        document.querySelector(".b6").innerHTML = "Professional Skills";
        document.querySelector(".b6").className ="b5";
    }
    counter3 += 1;
    counter();
});
document.querySelector(".b7").addEventListener("click", function(){
    if((counter4 % 2) === 0){
        document.querySelector(".b7").innerHTML = "<ul><li>Work Ethic – Managing a highly rigorous academic schedule with consistency.</li><li>Growth Mindset – Constantly seeking improvement in academics, fitness, and skills.</li><li>Adaptability – Able to take on new challenges and adjust quickly.</li></ul>";
        document.querySelector(".b7").className ="b8";
    };
    if((counter4 % 2) === 1){
        document.querySelector(".b8").innerHTML = "Personal Strenghts";
        document.querySelector(".b8").className ="b7";
    }
        counter4 += 1;
});


function counter(){
    if((counter5 % 2) === 0){
        document.querySelector(".header1").className ="header2";
        document.querySelector(".navbar").className ="navbar2";
    };
    if((counter5 % 2) === 1){
        document.querySelector(".header2").className ="header1";
        document.querySelector(".navbar2").className ="navbar";
    }
    counter5++;

}