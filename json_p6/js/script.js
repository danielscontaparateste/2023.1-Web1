const nomeArquivo = 'dados/boxes.json';

function mostrarDados(){
    function extrairDados() {
        fetch(nomeArquivo)
            .then(response => response.json())
            .then(data => {
                const todosRets = data.quadrados;
                for (k = 0; k < todosRets.length; k++){
                    const box = document.createElement('div');
                    box.innerHTML = todosRets[k].label;
                    box.setAttribute("class",todosRets[k].estado);
                    document.body.appendChild(box);
                
                }

            })
            .catch(error => {
                console.error('Erro ao ler o arquivo JSON:', error);
            });
    } 
    
    extrairDados();
}