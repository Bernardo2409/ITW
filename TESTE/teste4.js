//--- TODO
function limpar() {
    //--- TODO: escrever o código em falta aqui...
    document.getElementById("produtos").innerText = "0"
    document.getElementById("total").innerText = "0.00"
    document.getElementById("quantidades").innerText = "0"
    for (var i=1; i<=4; i++ ){
        var x = document.getElementById("produto"+i);
        x.value = "0";
    
    }
    console.log("CALL: limpar()");
    

}

function validar() {
    var retVal = true;
    
    var produtos_diferentes = parseFloat(document.getElementById("produtos").innerHTML);


    if (produtos_diferentes<3){
        retVal = false;
        alert("Tem que comprar pelo menos três produtos diferentes.")
    
    }
    
    //--- TODO: escrever o código em falta aqui...
    //--- Se a função retornar true o formulário será enviado; 
    //--- Se a função retornar false, o formulário não será enviaddo.
    console.log("CALL: validar()");
    return retVal;

}

function comprar(number) {
    //--- TODO: escrever o código em falta aqui...
    var produto= document.getElementById("produto" + number);
    var x = parseFloat(produto.value) + 1;
    produto.value = x.toString();

    calcular()
    console.log("CALL: comprar()");

}

function calcular() {
    //--- TODO: escrever o código em falta aqui...
        var produto1 = parseInt(document.getElementById('produto1').value);
        var produto2 = parseInt(document.getElementById('produto2').value);
        var produto3 = parseInt(document.getElementById('produto3').value);
        var produto4 = parseInt(document.getElementById('produto4').value);
        var produto5 = parseInt(document.getElementById('produto5').value);
        var produto6 = parseInt(document.getElementById('produto6').value);
        var produto7 = parseInt(document.getElementById('produto7').value);
        var produto8 = parseInt(document.getElementById('produto8').value);
        
        var precoproduto1 = parseFloat(document.getElementById('precoproduto1').value);
        var precoproduto2 = parseFloat(document.getElementById('precoproduto2').value);
        var precoproduto3 = parseFloat(document.getElementById('precoproduto3').value);
        var precoproduto4 = parseFloat(document.getElementById('precoproduto4').value);
        var precoproduto5 = parseFloat(document.getElementById('precoproduto5').value);
        var precoproduto6 = parseFloat(document.getElementById('precoproduto6').value);
        var precoproduto7 = parseFloat(document.getElementById('precoproduto7').value);
        var precoproduto8 = parseFloat(document.getElementById('precoproduto8').value);

        
    
        var somaprodutos = produto1 + produto2 + produto3 + produto4 + produto5 +  produto6 + produto7 + produto8;
        
        var precoTotalInicial = produto1 * precoproduto1 + produto2 * precoproduto2 + produto3 * precoproduto3 + produto4 * precoproduto4 + produto5 * precoproduto5 + produto6 * precoproduto6 +produto7 * precoproduto7 + produto8 * precoproduto8; 
        var precoTotal = 0;
        if (somaprodutos >= 5){
            var desconto1 = 0.05*precoTotalInicial;
            precoTotal = precoTotalInicial - desconto1;
        }else{
            precoTotal = precoTotalInicial;
        }
    
        if (precoTotalInicial>50){
            var desconto2 = 0.05*precoTotal;
            precoTotal = precoTotal - desconto2;
        }
        var produtosDiferentes = 0;
        var produtos = [produto1, produto2, produto3, produto4, produto5, produto6, produto7, produto8];
        for (var i = 0; i < produtos.length; i++) {
            if (produtos[i] > 0) {
                produtosDiferentes++;
            }
        }
    
        
        document.getElementById("quantidades").innerText = somaprodutos;
        document.getElementById("total").innerText = precoTotal.toFixed(2);
        document.getElementById("produtos").innerText = produtosDiferentes;
        
        
        
    
    }
    calcular()

    var contagem=0;
    var lst = [produto1 , produto2 , produto3 , produto4 , produto5 ,  produto6, produto7, produto8]
    console.log("CALL: calcular()");




// FÓRMULAS
// ----------------------------------------------------------------
// new Date("2019-11-09").getDate();        //--- Devolverá 9
// new Date("2019-11-09").getMonth();       //--- Devolverá 11
// new Date("2019-11-09").getFullYear();    //--- Devolverá 2019
//
// document.getElementById("myCheck").checked //--- testa se uma checkbox/radiobox está checked
// document.getElementById("field_1")       //--- devolve o elemento com id field_1
// document.getElementByName("field_1")     //--- devolve o elemento com nome field_1
