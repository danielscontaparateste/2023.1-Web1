function verResposta(){

    var respostas = "";

    // Questão 1
    const ops = document.getElementsByName("inst");
    const lbsOps = document.getElementsByName("lblInst");
    
    for (let k=0; k < ops.length; k++){
        if (ops[k].checked == true){

            respostas += "1a. Questão: "+lbsOps[k].innerHTML;

            // console.log(lbsOps[k].innerHTML);
            break;
        }
        
    }   

    // Questão 2
    const slcEstado = document.getElementById("slcEstado");
    // console.log();
    
    respostas += "<br><br>";
    respostas += "2a. Questão: "+slcEstado.options[slcEstado.selectedIndex].innerHTML; 


    // Questão 3
    const textArea = document.getElementById("ttobs");

    respostas += "<br><br>";
    respostas += "3a. Questão: "+textArea.value;

    // Exibir as respostas na tela
    const spnRes = document.getElementById("spnRes");

    spnRes.innerHTML = respostas;

}

let maxCaracteres = 20;
let comecou = false;
let intervalo;

function contagem(obs,idStatus,idContagem){
    const rotuloStatus = '#'+idStatus;
    const rotuloContagem = '#'+idContagem;
    const barraStatus = document.querySelector(rotuloStatus);
    lbl = document.querySelector(rotuloContagem);
    
    barraStatus.value = obs.value.length;

    if (!comecou){
        comecou = true;
        intervalo = setInterval(progride, 600);
    }
        
    if (barraStatus.value >= maxCaracteres){
        obs.readOnly = true;
        window.clearInterval(intervalo);
    }
    
    lbl.textContent = `Caracteres: ${obs.value.length}`;
    
}

function progride(){
    const barraProgresso = document.querySelector("#progresso");
    barraProgresso.value = barraProgresso.value + 1;

    if (barraProgresso.value >= 100){
        const obs = document.querySelector("#ttobs");
        obs.readOnly = true;
        window.clearInterval(intervalo);
    }

}