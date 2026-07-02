let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;

document.querySelector(".b1").addEventListener("click", function(){
    if((counter1 % 2) === 0){
        document.querySelector(".b1").innerHTML = "<ul><li>Grundlagen der Programmierung - Erfahrung mit Java, Python, JavaScript und HTML/CSS, einschließlich Logikaufbau und grundlegender OOP</li><li>Problemanalyse – Fähigkeit, komplexe Probleme (Code oder Physik) in überschaubare Schritte zu zerlegen.</li><li>Ingenieurdenken – Probleme mit Systemdenken, Effizienz und realer Anwendung angehen.</li></ul>";
        document.querySelector(".b1").className ="b2";

    };
    if((counter1 % 2) === 1){
        document.querySelector(".b2").innerHTML = "Technische Fähigkeiten"
        document.querySelector(".b2").className ="b1";
    }
    counter1 += 1;
    counter();
});

document.querySelector(".b3").addEventListener("click", function(){
    if((counter2 % 2) === 0){
        document.querySelector(".b3").innerHTML = "<ul><li>Fortgeschrittene MINT-Kenntnisse – Starke Grundlage durch anspruchsvolle IB- und AP-Kurse in Mathematik, Physik und Chemie.</li><li>Quantitatives Denken – Fähigkeit, mit Berechnungen, Formeln und datenbasierten Problemen zu arbeiten.</li><li>Forschung & Analyse – Erfahrung im Analysieren von Quellen, Erkennen von Lücken und Erstellen strukturierter Argumente.</li></ul>";
        document.querySelector(".b3").className ="b4";

    };
    if((counter2 % 2) === 1){
        document.querySelector(".b4").innerHTML = "Akademische Fähigkeiten"
        document.querySelector(".b4").className ="b3";
    }
    counter2 += 1;
    counter();
});

document.querySelector(".b5").addEventListener("click", function(){
    if((counter3 % 2) === 0){
        document.querySelector(".b5").innerHTML = "<ul><li>Führung – Präsident des Interact Clubs mit Erfahrung in Eventorganisation und Leitung von Initiativen.</li><li>Kommunikation – Fähigkeit, professionell zu schreiben und Ideen klar zu erklären.</li><li>Eigeninitiative – Aktives Streben nach Praktika, Programmen und Entwicklungsmöglichkeiten.</li></ul>";
        document.querySelector(".b5").className ="b6";
    };
    if((counter3 % 2) === 1){
        document.querySelector(".b6").innerHTML = "Berufliche Fähigkeiten";
        document.querySelector(".b6").className ="b5";
    }
    counter3 += 1;
    counter();
});

document.querySelector(".b7").addEventListener("click", function(){
    if((counter4 % 2) === 0){
        document.querySelector(".b7").innerHTML = "<ul><li>Arbeitsmoral – Umgang mit einem sehr anspruchsvollen akademischen Zeitplan mit Konstanz.</li><li>Wachstumsmentalität – Ständiges Streben nach Verbesserung in Schule, Fitness und Fähigkeiten.</li><li>Anpassungsfähigkeit – Fähigkeit, neue Herausforderungen anzunehmen und sich schnell anzupassen.</li></ul>";
        document.querySelector(".b7").className ="b8";
    };
    if((counter4 % 2) === 1){
        document.querySelector(".b8").innerHTML = "Persönliche Stärken";
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