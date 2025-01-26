var start = true;
var op1 = "";
var controlo = 1;
var op2="";
var operacao = "";
var display = document.getElementById("display");

//--- função de gestão quando é carregado uma tecla numérica
function addNumber(event) {
    var x = event.target.value;
    if (controlo == 1) {
       op1 += x;
    }
    else {
        op2 += x;
    }
    if (start == true) {
        display.value = "";
        start = false;
    }

        display.value += x;
        console.log("op1="+op1, "op2="+op2, "operacao="+operacao, "controlo="+controlo);
}
// --- função de gestão quando é carregado uma tecla de operação
function addOp(operacao) {
    var x = event.target.value;
    if (operacao == "" && op1 != "") {
        operacao= x;
        display.value += x;
        controlo = 2;
    }
    else {
        erro();
    }
    console.log("op1="+op1, "op2="+op2, "operacao="+operacao, "controlo="+controlo);
}
// --- função de gestão quando é carregado a tecla de igual
function result() {
    if (op1 != "" && op2 != "" && operacao != "") {
        var x;
        switch (operacao) {
            case "+":
                x = parseInt(op1) + parseInt(op2);
                break;
            case "-":
                x = parseInt(op1) - parseInt(op2);
                break;
            case "*":
                x = parseInt(op1) * parseIntt(op2);
                break;
            case "/":
                x = parseInt(op1) / parseInt(op2);
                break;
        }
        display.value = x;
        op1 = x.toString();
        op2 = "";
        controlo = 1;
        operacao = "";
        start = true;
    }
    else {
        erro();
    }
    console.log("op1="+op1, "op2="+op2, "operacao="+operacao, "controlo="+controlo);
}
// --- função de gestão quando é carregado a tecla de limpar
function clear() {
    display.value = x;
    op1 = x;
    op2= "";
    operacao = "";
    controlo = 1;
    start = true;
    console.log("op1="+op1, "op2="+op2, "operacao="+operacao, "controlo="+controlo);

}
