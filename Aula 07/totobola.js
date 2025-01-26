var Status1 = document.getElementById('Status1');
var StatusX = document.getElementById('StatusX');
var Status2 = document.getElementById('Status2');
var botao = document.getElementById('botao');

function boxClicked() {
    var apostasValidas = 0;
    var multiplas = 1;
    var selected1 = 0;
    var selectedX = 0;
    var selected2 = 0;

    for (var i = 1; i <= 13; i++) {
        var x = document.getElementById('Jogo' + i + '_1').checked;
        var y = document.getElementById('Jogo' + i + '_x').checked;
        var z = document.getElementById('Jogo' + i + '_2').checked;

        if (x || y || z) apostasValidas += 1;
        if (x) selected1 += 1;
        if (y) selectedX += 1;
        if (z) selected2 += 1;

        var apostaNaLinha = 1;
        if ((x && y) || (x && z) || (y && z)) apostaNaLinha = 2;
        if (x && y && z) apostaNaLinha = 3;

        multiplas *= apostaNaLinha;
    }

    setStatus(selected1, selectedX, selected2, apostasValidas, multiplas);
}

function setStatus(selected1, selectedX, selected2, apostasValidas, multiplas) {
    Status1.innerText = selected1;
    StatusX.innerText = selectedX;
    Status2.innerText = selected2;

    if (apostasValidas === 13 && multiplas >= 1 && multiplas <= 384) {
        if (multiplas === 1) {
            disableAllMultipleBoxes();
        } else {
            var x = document.getElementById('multiplas' + multiplas);
            if (x) x.checked = true; // Verifica se o elemento existe
        }
        botao.disabled = false;
    } else {
        disableAllMultipleBoxes();
        botao.disabled = true;
    }
}

function disableAllMultipleBoxes() {
    var arr = document.getElementsByName('multiplas'); // Obtém todos os botões de rádio pelo nome
    for (var i = 0; i < arr.length; i++) {
        arr[i].checked = false;
    }
}


