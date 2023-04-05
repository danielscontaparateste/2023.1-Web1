function somar(){
    var inputX = document.querySelector("#iptX");
    var x = parseFloat(inputX.value);

    var inputY = document.getElementById("iptY");
    var y = parseFloat(inputY.value);

    var res = x + y;

    var spnRes = document.getElementById("spnResultado");

    // alert(res);

    // spnRes.innerHTML = res;

    if (res % 2 == 0){
        spnRes.style.color = "green";
    }else{
        spnRes.style.color = "red";
    }

    spnRes.textContent = "O resultado é: "+res;

}