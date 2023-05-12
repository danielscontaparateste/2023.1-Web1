function verResposta(){

    var respostas = "";

    // Questão 1
    const ops = document.getElementsByName("inst");
    const lbsOps = document.getElementsByName("lblInst");
    
    for (let k=0; k < ops.length; k++){
        if (ops[k].checked == true){

            // Busca o elemento HTML onde será escrito a resposta
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


    // Exibir as respostas na tela
    const spnRes = document.getElementById("spnRes");

    spnRes.innerHTML = respostas;

}