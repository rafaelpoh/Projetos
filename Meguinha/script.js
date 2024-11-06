function sortearNumero() {
    return Math.floor(Math.random() * 60);
}

function testaNumero(numeroRnd, mega) {
    for (var i = 0; i < mega.length; i++) {
        if (numeroRnd == mega[i]) {
            return sortearNumero();
        }
    }
    return numeroRnd;
}
var numerosJogo = parseInt(prompt('Informe quantos números deseja jogar na mega (max 20)'));
var mega = new Array(numerosJogo).fill(0);

for (i = 0; i < numerosJogo; i++) {
    mega[i] = testaNumero(sortearNumero(), mega);
}
alert(mega);