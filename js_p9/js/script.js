function gerar(){
    const qtd = parseInt(document.getElementById("iptQtd").value);

    var divBox;
    for(let k=0; k<qtd; k++){
        divBox = document.createElement("div");
        divBox.innerHTML = k;
        divBox.setAttribute("class","box");
        divBox.setAttribute("id",k);

        divBox.addEventListener("click", function(){
            this.style.backgroundColor = "red";
            alert(this.getAttribute("id"));
        });

        document.body.appendChild(divBox);
    }

}