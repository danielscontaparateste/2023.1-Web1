function gravar(){
    
    // Captura o texto digitado pelo usuário
    const texto = document.getElementById("iptTexto").value;

    // Gravar no localStorage
    localStorage.setItem('textUser',texto);

    // Mostrar o texto digitado
    document.getElementById("spnTexto").innerHTML = texto;

}

function limpar(){
    localStorage.removeItem('textUser');
    document.getElementById("spnTexto").innerHTML = "";
    document.getElementById("iptTexto").value = "";
}


if (!localStorage.getItem('textUser')){
    document.getElementById("spnTexto").innerHTML = "";
    localStorage.setItem('textUser',"");

    alert("Seja bem-vindo. Esse é seu primeiro acesso. ");

    
}else{
    // Recuperar o texto previamente digitado.
    const texto = localStorage.getItem('textUser');

    // Mostrar o texto digitado
    document.getElementById("spnTexto").innerHTML = texto;
    document.getElementById("iptTexto").value = texto;

}