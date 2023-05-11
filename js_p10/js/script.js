function gerar(){
    const qtd = parseInt(document.getElementById("iptQtd").value);

    var divBox;
    for(let k=0; k<qtd; k++){
        divBox = document.createElement("div");
        divBox.innerHTML = k;
        divBox.setAttribute("class","box");
        divBox.setAttribute("id",k);

        var f;
        if (qtd % 2 == 0){
            f = function(){
                this.style.backgroundColor = "red";
                // alert(this.getAttribute("id"));
            }
        }else{
            f = function(){
                // this.style.backgroundColor = "green";
                this.remove();
                // alert(this.getAttribute("id"));
            }
        }    

        divBox.addEventListener("click", f);

        document.body.appendChild(divBox);
    }

}