const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');

const calendario = setInterval(function time(){
    let tempoData = new Date();
    let diA = tempoData.getDay();
    let meS = tempoData.getMonth();
    let anO = tempoData.getFullYear();

    dia.textContent = diA;
    mes.textContent = meS;
    ano.textContent = anO;
})