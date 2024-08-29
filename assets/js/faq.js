document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-list a[data-bs-toggle="collapse"]');
  
    faqItems.forEach(item => {
      item.addEventListener('click', function (event) {
        const targetId = this.getAttribute('data-bs-target');
        const targetElement = document.querySelector(targetId);
        const parentElement = this.closest('li');
  
        if (targetElement.classList.contains('show')) {
          return; // Se o item já está expandido, não faça nada
        }
  
        setTimeout(() => {
          const offset = -100; // Define o deslocamento desejado (20px extra para cima)
          const elementPosition = parentElement.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition + offset;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 300); // Aguarde a animação de colapso antes de rolar
      });
    });
  });