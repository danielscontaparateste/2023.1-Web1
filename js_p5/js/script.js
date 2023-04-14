function mostrar(){
    const msg = document.getElementById("iptMsg").value;
    const qtd = parseInt(document.getElementById("iptQtd").value);

    var containerMsg = document.getElementById("spnMsg");
    
    var txt = "";
    for (let k = 0; k<qtd; k++){
        // console.log(msg);
        txt = txt + (k+1) +"." + msg + "<br>"
    }

    containerMsg.innerHTML = txt;
}