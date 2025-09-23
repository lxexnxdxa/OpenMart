window.onload = function() {
    alert("Olá! Bem-vindo ao meu site.");
};

document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('search-btn');
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.getElementById('search-input');

    searchBtn.addEventListener('click', function() {
        // Adiciona ou remove a classe 'expanded' no contêiner
        searchContainer.classList.toggle('expanded');
        
        // Se a barra de pesquisa for expandida, foca no campo
        if (searchContainer.classList.contains('expanded')) {
            searchInput.focus();
        }
    });

    // O código para a funcionalidade de pesquisa
    searchBtn.addEventListener('click', function() {
        const query = searchInput.value;
        if (searchContainer.classList.contains('expanded') && query.trim() !== '') {
            alert('Você pesquisou por: ' + query);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar-google-play');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const images = card.querySelectorAll('.card-image');
        let currentImage = 0;
        let intervalId;

        // Verifica se há mais de uma imagem para fazer o carrossel
        if (images.length > 1) {
            // Adiciona um evento para quando o mouse entra no cartão
            card.addEventListener('mouseenter', () => {
                // Inicia o carrossel
                intervalId = setInterval(() => {
                    images[currentImage].classList.remove('active');
                    currentImage = (currentImage + 1) % images.length;
                    images[currentImage].classList.add('active');
                }, 3000); // Roda a cada 3 segundos
            });

            // Adiciona um evento para quando o mouse sai do cartão
            card.addEventListener('mouseleave', () => {
                // Para o carrossel
                clearInterval(intervalId);
                
                // Volta para a primeira imagem
                images[currentImage].classList.remove('active');
                currentImage = 0;
                images[currentImage].classList.add('active');
            });
        }
    });
});