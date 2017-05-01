// var frase = jQuery(".frase");
var frase = $ (".frase").text();
var numPalavras = frase.split(" ").length;
console.log(frase);
console.log(numPalavras);
var tamanhoFrase = $(".tamanho-frase").text(numPalavras);
console.log(tamanhoFrase);
