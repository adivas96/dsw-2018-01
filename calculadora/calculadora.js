var ultimoOp = false;
var operacao;
var operando01;


function cliqueBotao(n) {

    var output = document.getElementById("output");

    if (ultimoOp) {
        output.innerHTML = parseFloat(n);
        ultimoOp = false;
    } else {
        output.innerHTML = parseFloat(output.innerHTML + n);
    }

}


function cliqueOperacao(op) {

    operando01 = parseFloat(document.getElementById("output").innerHTML);

    operacao = op;

    ultimoOp = true;
    
}


function cliqueIgual() {

    var output = document.getElementById("output");
    var resultado;

    var operando02 = parseFloat(document.getElementById("output").innerHTML);
    
    switch (operacao) {
    case "soma":
        output.innerHTML = operando01 + operando02;
        break;
    case "sub":
        output.innerHTML = operando01 - operando02;
        break;
    case "mult":
        output.innerHTML = operando01 * operando02;
        break;
    case "div":
        output.innerHTML = operando01 / operando02;
        break;
    default:
        output.innerHTML = "Erro: operação inválida!";
        break;


    }

}
