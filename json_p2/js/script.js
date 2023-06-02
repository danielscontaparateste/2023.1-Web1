const nomeArquivo = 'dados/dat.json';

function createBox(){
    const box = document.createElement("div");
    

    function extrairDados() {
        fetch(nomeArquivo)
            .then(response => response.json())
            .then(attBox => {
            const largura = attBox.largura + attBox.unidade;
            const altura = attBox.altura + attBox.unidade;
            const cor =  attBox.cor;
            const border = `${attBox.borderWidth}${attBox.unidade} ${attBox.borderStyle} ${attBox.borderColor}`;
{}
            box.style.width = largura;
            box.style.height = altura;
            box.style.backgroundColor = cor;
            box.style.border = border;

            document.body.appendChild(box);
            })
            .catch(error => {
                console.error('Erro ao ler o arquivo JSON:', error);
            });
    } 
    
    extrairDados();


}
  