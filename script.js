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

let sabreJedi = document.getElementById("sabre-jedi");
let sabreSith = document.getElementById("sabre-sith");
let botaoLigar = document.querySelector(".ligar");
let botaoLigarSith = document.querySelector(".sith");
let botaoLigarJedi = document.querySelector(".jedi");

function ligarSabreJedi(){
    if((sabreJedi.style.backgroundColor="green"))
        sabreJedi.style.backgroundColor="rgb(64, 163, 64)";
    else{
        botaoLigar.document.textContent="Desligar";
    }

}

botaoLigarJedi.onclick = ligarSabreJedi;

function ligarSabreSith(){
    if((sabreSith.style.backgroundColor="red"))
        sabreSith.style.backgroundColor="rgb(238, 73, 73)";
    else{
        botaoLigar.document.textContent="Desligar";
    }

}

botaoLigarSith.onclick = ligarSabreSith;
