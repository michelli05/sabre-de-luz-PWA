let espadaJedi = document.getElementById("espada-jedi");
let botaoJedi = document.getElementById("botao-jedi");
let tela1 = document.getElementById("tela-inicio");

function jedi(){
    if ((espadaJedi.style.display="none") && (tela1.style.display="flex")){
        espadaJedi.style.display="flex";
        tela1.style.display="none";
    }
}

botaoJedi.onclick = jedi;

let botaoSith = document.getElementById("botao-sith"); 
let espadaSith = document.getElementById("espada-sith");
function sith(){
    if ((espadaSith.style.display="none") && (tela1.style.display="flex")){
        espadaSith.style.display="flex";
        tela1.style.display="none";
    }
}

botaoSith.onclick = sith;