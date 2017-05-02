// var frase = jQuery(".frase");
var frase = $ (".frase").text();
var numPalavras = frase.split(" ").length;
console.log(frase);
console.log(numPalavras);
var tamanhoFrase = $("#tamanho-frase").text(numPalavras);
console.log(tamanhoFrase);


//evento de input no campo, porém não reconhece quando o cursor entra no campo através do TAB
var campo = $(".campo-digitacao");
campo.on("input", function(){
      var conteudo = campo.val();
      var quantidadePalavras = conteudo.split(/\S+/).length - 1;
      $("#contador-palavras").text(quantidadePalavras);
      var quantidadeCaracteres = conteudo.length;
      $("#contador-caracteres").text(quantidadeCaracteres);
});

//evento focus, reconhece quando o cursor entra no campo, independente de como ele chegar click, TAB e etc...
var tempoRestante = $("#tempo-digitacao").text();
campo.one("focus",function(){//one executa apenas uma única vez, diferente do on que executa toda vez que ele for chamado
       var cronometroID = setInterval(function(){ // cronometroID é o id do setInterval, todo setInterval possui seu proprio ID, para pega-lo basta receber a função
        tempoRestante--;
        $("#tempo-digitacao").text(tempoRestante);
        if(tempoRestante < 1){
          campo.attr("disabled",true);
          clearInterval(cronometroID);
        }
      }, 1000);
});
