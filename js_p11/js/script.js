function verResposta(){

    const ops = document.getElementsByName("inst");

    for (let k=0; k < ops.length; k++){
        if (ops[k].checked == true){
            console.log(ops[k].value);
        }
        
    }    


}