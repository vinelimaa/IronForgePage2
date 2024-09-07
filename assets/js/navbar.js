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

window.onscroll = function() {
  var header = document.getElementById("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(0, 0, 0, 1)";
  } else {
    header.style.background = "rgba(0, 0, 0, 0)";
  }
};

document.addEventListener('DOMContentLoaded', function () {
  var videos = [
    document.getElementById('video1'),
    document.getElementById('video2'),
    document.getElementById('video3'),
    document.getElementById('video4')
  ];

  function playNextVideo(index) {
    var currentVideo = videos[index];
    var nextIndex = (index + 1) % videos.length;
    var nextVideo = videos[nextIndex];

    currentVideo.onended = function() {
      currentVideo.style.display = 'none';
      nextVideo.style.display = 'block';
      nextVideo.play();
      playNextVideo(nextIndex);
    };
  }

  playNextVideo(0);
});

