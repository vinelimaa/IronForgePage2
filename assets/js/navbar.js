const toggleButton = document.querySelector('.mobile-nav-toggle');
const navbar = document.querySelector('#header');

// Evento para alternar o menu mobile
toggleButton.addEventListener('click', function () {
  navbar.classList.toggle('navbar-mobile-active');
});

// Fecha o dropdown se clicar fora dele
document.addEventListener('click', function (event) {
  if (!navbar.contains(event.target) && navbar.classList.contains('navbar-mobile-active')) {
    navbar.classList.remove('navbar-mobile-active');
    toggleButton.classList.remove('bi-x');
    toggleButton.classList.add('bi-list');
  }
});

// Fecha o dropdown e muda o ícone ao clicar em um item da lista
const navLinks = document.querySelectorAll('#navbar ul li a');
navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    // Fecha o dropdown
    navbar.classList.remove('navbar-mobile-active');
    // Muda o ícone de volta para os três pontos
    toggleButton.classList.remove('bi-x');
    toggleButton.classList.add('bi-list');
  });
});
