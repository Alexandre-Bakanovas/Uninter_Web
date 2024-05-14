// Código JavaScript atualizado
function mostrarConteudo(conteudo) {
    // Oculta a página inicial
    document.getElementById('inicio').style.display = 'none';

    // Oculta todos os conteúdos
    var conteudos = document.querySelectorAll('.conteudo');
    conteudos.forEach(function(element) {
        element.style.display = 'none';
    });

    // Mostra apenas o conteúdo correspondente ao link clicado
    document.getElementById(conteudo).style.display = 'block';

    // Remove a classe 'active' de todos os links
    var links = document.querySelectorAll('a');
    links.forEach(function(link) {
        link.classList.remove('active');
    });

    // Adiciona a classe 'active' ao link clicado
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            e.target.classList.add('active');
        }
    });
}

// Adiciona evento de clique aos cabeçalhos dos tópicos para alternar a visibilidade do conteúdo
var topics = document.querySelectorAll('.topic');
topics.forEach(function(topic) {
    var header = topic.querySelector('.topic-header');
    var content = topic.querySelector('.topic-content');
    header.addEventListener('click', function() {
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});