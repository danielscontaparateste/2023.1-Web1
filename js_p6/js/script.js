function calcular(){

    const iptX = document.getElementById("iptX");
    const x = parseInt(iptX.value);

    const y = parseInt(document.getElementById("iptY").value);

    var txt = "";
    if (x >= y){
        txt = "Faixa de valores inválida. Tente novamente. ";
    }

    var c = "";
    for (let k = x; k <= y; k++ ){
        if (k % 2 ==0){
            c = "par";
        }else{
            c = "impar";
        }

        txt += "<span class='"+c+"'>" + k + "</span> "; // txt = txt + " " + k;

        
    }

    console.log(txt);

    document.getElementById("spnRes").innerHTML = txt;

}

function limpar(){
    document.getElementById("iptX").value = document.getElementById("iptY").value = document.getElementById("spnRes").innerHTML = document.querySelector("#spnCondNum").innerHTML = "";
    document.getElementById("iptX").className = document.getElementById("iptY").className = "iptDefault";
}

function verificarX(){
    const iptX = document.getElementById("iptX");
    const x = iptX.value;   
    // document.getElementById("spnRes").innerHTML = x;
    const spnCondNum = document.querySelector("#spnCondNum");

    // spnCondNum.textContent = "";
    if (x % 2 == 0){
        iptX.className = "iptPar";
        spnCondNum.textContent += " PAR ";
    }else {
        iptX.className = "iptImpar";
        spnCondNum.textContent += " IMPAR ";
    }
}

function verificarY(){
    const iptY = document.getElementById("iptY");
    const y = iptY.value;   
    const spnCondNum = document.querySelector("#spnCondNum");

    
    if (y % 2 == 0){
        iptY.className = " iptPar ";
        spnCondNum.textContent += " PAR ";
    }else {
        iptY.className = " iptImpar ";
        spnCondNum.textContent += " IMPAR ";
    }
}