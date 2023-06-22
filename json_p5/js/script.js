const nomeArquivo = 'dados/boxes.json';

function mostrarDados(){
    function extrairDados() {
        fetch(nomeArquivo)
            .then(response => response.json())
            .then(data => {
                const todosRets = data.quadrados;
                for (k = 0; k < todosRets.length; k++){
                    const box = document.createElement('div');
                    box.style.width = todosRets[k].largura+"px";
                    box.style.height = todosRets[k].altura+"px";
                    box.style.backgroundColor = todosRets[k].cor;
                    box.style.border = todosRets[k].borderWidth+todosRets[k].unidade+" "+todosRets[k].borderStyle + " " + todosRets[k].borderColor;
                    
                    document.body.appendChild(box);
                
                }
                
                // const quebraLinha = document.createElement('br');
                // document.body.appendChild(quebraLinha);
                // });
            })
            .catch(error => {
                console.error('Erro ao ler o arquivo JSON:', error);
            });
    } 
    
    extrairDados();
}