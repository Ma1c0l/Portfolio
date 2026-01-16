document.addEventListener("DOMContentLoaded", function() {
    // Codice da eseguire quando il DOM è completamente caricato
    let button1 = document.getElementById("primario");
    let button2 = document.getElementById("secondario");
    let divFormazione = document.getElementById("formazione");

    if (button1) {
        button1.addEventListener("click", function() {
            window.location.href = "progetti.html";
        });
    }
    if (button2) {
        button2.addEventListener("click", function() {
            window.location.href = "contatti.html";
        });
    }
    
    if (divFormazione) {
        divFormazione.addEventListener("click", function() {
            divFormazione.style.background = "none";
            let h2 = divFormazione.querySelector("h2");
            if (h2) {
                h2.textContent = "Formazione";
            }
            
            let p = divFormazione.querySelector("p");
            if (p) {
                p.textContent = "Il mio viaggio nel mondo dell'Informatica è iniziato con una solida formazione presso l'ITIS Othoca di Oristano, ovviamente indirizzo Informatica e Telecomunicazioni orientato all'Informatica. Qui ho acquisito infatti le basi che mi hanno permesso di comprendere i principi fondamentali della programmazione e dell'architettura dei computer, oltre a farmi appassionare alla programmazione in particolare.";
            }
        });
    }

    let divPassione = document.getElementById("page2-child-child1");
    if (divPassione) {
        divPassione.addEventListener("click", function() {
            divPassione.style.background = "none";
            let h2 = divPassione.querySelector("h2");
            if (h2) {
                h2.textContent = "Passione e innovazione";
            }
            
            let p = divPassione.querySelector("p");
            if (p) {
                p.textContent = "Sono spinto dalla curiosità e dal desiderio di imparare. Mi piace sperimentare nuove tecnologie e idee, cercando sempre di migliorare e innovare.";
            }
        });
    }

    let divSviluppatore = document.getElementById("page2-child-child2");
    if (divSviluppatore) {
        divSviluppatore.addEventListener("click", function() {
            divSviluppatore.style.background = "none";
            let h2 = divSviluppatore.querySelector("h2");
            if (h2) {
                h2.textContent = "Nascita dello sviluppatore";
            }
            
            let p = divSviluppatore.querySelector("p");
            if (p) {
                p.textContent = "Non ho un orientamento specifico però ho un pò di destrezza con lo sviluppo di applicazioni web e sto imparando a creare soluzioni digitali innovative. Vorrei diventare un professionista del settore, contribuendo a creare prodotti digitali che migliorino la vita quotidiana delle persone e ampliare il mio orizzonte professionale per esempio allo sviluppo di software o applicativi mobile.";
            }
        });
    }
});