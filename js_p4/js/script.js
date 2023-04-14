// function calcular(){
//     const x = parseInt(document.getElementById("iptX").value);
//     const y = parseInt(document.getElementById("iptY").value);

//     const op = parseInt(document.getElementById("iptOp").value);

//     // Mostrar no console do javascript.
//     console.log("x: "+x);
//     console.log("y: "+y);
//     console.log("operação: "+op);

//     var res;
//     if (op==1){
//         res = x + y;
//     }else if (op==2){
//         res = x - y;
//     }else if (op==3){
//         res = x * y;
//     }else if (op==4){
//         res = x / y;
//     }else if (op==5){
//         if (x % y == 0) {
//             res = "x é divisível por y.";
//         }else{
//             res = "x NÃO é divisível por y.";
//         }
//     }else{
//         res = "O valor da operação é inválido";
//     }

//     document.getElementById("spRes").textContent = "Resultado: "+res; 

//     console.log(res);

// }


function calcular(){
    const x = parseInt(document.getElementById("iptX").value);
    const y = parseInt(document.getElementById("iptY").value);
    const op = parseInt(document.getElementById("iptOp").value);

    // Mostrar no console do javascript.
    console.log("x: "+x);
    console.log("y: "+y);
    console.log("operação: "+op);

    var res;    
    switch(op){
        case 1:
        case 10:
            res = x + y;
        break;
        case 2:
            res = x - y;
        break;
        case 3:
            res = x * y;
        break;
        case 4:
            res = x / y;
        break;
        case 5:

            // res = (x % y == 0)?"x é divisível por y.":"x NÃO é divisível por y.";
            res = !(x % y)?"x é divisível por y.":"x NÃO é divisível por y.";

            // if (x % y == 0) {
            //     res = "x é divisível por y.";
            // }else{
            //     res = "x NÃO é divisível por y.";
            // }
        break;                
        default:
            res = "O valor da operação é inválido";
    }

    document.getElementById("spRes").textContent = "Resultado: "+res; 

    console.log(res);

}