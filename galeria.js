$(document).ready(function(){
 $('header button').click(function(){
    $('form').slideDown()
 })

 $('#botao-cancelar').click(function(){
    $('form').slideUp()
 })

$('form').on('submit', function(e){
    e.preventDefault()
    const enderecoDaNovaImagem = $('#endereco-imagem-nova').val()
    const novoItem = $('<li> </li>')
    $(`<img src="${enderecoDaNovaImagem}"</img>`).appendTo(novoItem);
    $(`
        <div class="overlay-imagem-link">
            <a href="enderecoDaNovaImagem" title="Ver imagem em tamanho real" target="_black">
                Ver imagem em tamanho real
                </a>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#endereco-imagem-nova').val('')


})
})
