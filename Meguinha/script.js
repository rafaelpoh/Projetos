function sortearNumero(){
   var numeroRnd = Math.floor(Math.random() * 60);
   return numeroRnd;
}
function testaNumero(numeroRnd){
        for( var i = 0; i < numerosJogo;i++){
            if(numeroRnd == mega[i]){
            i=0;
            numeroRnd = sortearNumero;
        }else if(numeroRnd != mega[i] && mega[i] == 0){
            mega[i] = numeroRnd;
        }
    }
        
    };
var numerosJogo = prompt('informe quantos numeros deseja jogar na mega');
var mega = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] ;
testaNumero (sortearNumero);
for(i=0; i<numerosJogo; i++){
    console.log(mega[i]);
}
