// var frase = jQuery(".frase");
var frase = $ (".frase").text();
var numPalavras = frase.split(" ").length;
console.log(frase);
console.log(numPalavras);
var tamanhoFrase = $(".tamanho-frase").text(numPalavras);
console.log(tamanhoFrase);

var campo = $(".campo-digitacao");
campo.on("input", function(){
      var conteudo = campo.val();
      var quantidadePalavras = conteudo.split(/\S+/).length - 1;
      $("#contador-palavras").text(quantidadePalavras);
      var quantidadeCaracteres = conteudo.length;
      $("#contador-caracteres").text(quantidadeCaracteres);
});
