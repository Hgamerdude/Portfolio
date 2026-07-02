let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;

document.querySelector(".b1").addEventListener("click", function(){
    if((counter1 % 2) === 0){
        document.querySelector(".b1").innerHTML = "<ul><li>Fundamentos de Programación - Experiencia con Java, Python, JavaScript y HTML/CSS, incluyendo construcción de lógica y POO básica</li><li>Descomposición de Problemas – Capacidad para dividir problemas complejos (código o física) en pasos manejables.</li><li>Pensamiento de Ingeniería – Abordar problemas con sistemas, eficiencia y aplicaciones del mundo real en mente.</li></ul>";
        document.querySelector(".b1").className ="b2";

    };
    if((counter1 % 2) === 1){
        document.querySelector(".b2").innerHTML = "Habilidades Técnicas"
        document.querySelector(".b2").className ="b1";
    }
    counter1 += 1;
    counter();
});
document.querySelector(".b3").addEventListener("click", function(){
    if((counter2 % 2) === 0){
        document.querySelector(".b3").innerHTML = "<ul><li>Conocimiento Avanzado en STEM – Fuerte base de cursos rigurosos IB y AP en matemáticas, física y química.</li><li>Razonamiento Cuantitativo – Capacidad para trabajar con cálculos, fórmulas y problemas basados en datos.</li><li>Investigación y Análisis – Experiencia analizando fuentes, identificando vacíos y formando argumentos estructurados.</li></ul>";
        document.querySelector(".b3").className ="b4";

    };
    if((counter2 % 2) === 1){
        document.querySelector(".b4").innerHTML = "Habilidades Académicas"
        document.querySelector(".b4").className ="b3";
    }
    counter2 += 1;
    counter();
});
document.querySelector(".b5").addEventListener("click", function(){
    if((counter3 % 2) === 0){
        document.querySelector(".b5").innerHTML = "<ul><li>Liderazgo – Presidente del Club Interact con experiencia organizando eventos y liderando iniciativas.</li><li>Comunicación – Capaz de escribir profesionalmente y explicar ideas con claridad.</li><li>Iniciativa – Buscando activamente pasantías, programas y oportunidades para crecer.</li></ul>";
        document.querySelector(".b5").className ="b6";
    };
    if((counter3 % 2) === 1){
        document.querySelector(".b6").innerHTML = "Habilidades Profesionales";
        document.querySelector(".b6").className ="b5";
    }
    counter3 += 1;
    counter();
});
document.querySelector(".b7").addEventListener("click", function(){
    if((counter4 % 2) === 0){
        document.querySelector(".b7").innerHTML = "<ul><li>Ética de Trabajo – Manejo constante de una carga académica altamente rigurosa.</li><li>Mentalidad de Crecimiento – Búsqueda constante de mejora en lo académico, físico y habilidades.</li><li>Adaptabilidad – Capaz de asumir nuevos desafíos y ajustarse rápidamente.</li></ul>";
        document.querySelector(".b7").className ="b8";
    };
    if((counter4 % 2) === 1){
        document.querySelector(".b8").innerHTML = "Fortalezas Personales";
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