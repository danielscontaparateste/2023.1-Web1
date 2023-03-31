// function myHello(){
//     // alert("Olá Mundo!");
//     var spn = document.getElementById("spnMsg");

//     spn.innerHTML = "Olá Mundo!";
// }

function escrever(){

    // var iptMsg = document.getElementById("iptMsg");
    // var msg = iptMsg.value;

    var msg = document.getElementById("iptMsg").value;

    var lbl = document.querySelector("#lblMsg");
    lbl.style.color = "black";
    lbl.textContent = msg;
}

function apagar(){
    var lbl = document.querySelector("#lblMsg");
    lbl.textContent = "";
}

function mudarCor(){
    var lbl = document.querySelector("#lblMsg");
    lbl.style.color = "red";
}