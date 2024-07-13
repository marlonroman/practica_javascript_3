const restar = document.getElementById("restar");
const restablecer = document.getElementById("restablecer");
const incrementar = document.getElementById("incrementar");
const contador = document.getElementById("contador");

let count = 0;

incrementar.onclick = function(){
    count++;
    contador.textContent = count;
}

restablecer.onclick = function(){
    count = 0;
    contador.textContent = count;
}

restar.onclick = function(){
    count--;
    contador.textContent = count;
}