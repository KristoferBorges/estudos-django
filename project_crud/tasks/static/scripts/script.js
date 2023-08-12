var links = document.querySelectorAll('.nav-bar a');

// Função de rolagem suave
function scrollSmoothHandler(e) {
  e.preventDefault();
  var target = document.querySelector(this.getAttribute('href'));
  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// Adiciona o evento de clique em cada link de navegação
links.forEach(function(link) {
  link.addEventListener('click', scrollSmoothHandler);
});