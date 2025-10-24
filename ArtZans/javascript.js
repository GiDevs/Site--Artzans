

document.addEventListener('DOMContentLoaded', () => {

  const coverPage = document.querySelector('.cover-page');
  const springPage = document.querySelector('.spring-page');
  const arrow = document.getElementById('nextArrow');

  if (!coverPage || !springPage) {
    console.error('Um ou mais elementos do livro não foram encontrados (Capa ou Primavera).');
    return;
  }
  if (!arrow) {
    console.error('Elemento #nextArrow não encontrado no DOM. Verifique o ID da seta no HTML.');
    return;
  }
springPage.addEventListener('click', () => {
    window.open('primavera.html', '_blank');
  });
  let currentPage = 0;

  arrow.addEventListener('click', () => {
    if (currentPage >= 2) return;
    currentPage++;
    if (currentPage === 1) {
      coverPage.classList.add('flip-forward');
      
    } else if (currentPage === 2) {
      springPage.classList.add('flip-forward');
      arrow.style.display = 'none';
    }
  });
});

// Coloca as seções num array
const sections = document.querySelectorAll('.about-section, .products-section, .hive-section');

// Percorre o array e adiciona o filtro e animação em cada seção
sections.forEach(s => {
  s.style.filter = 'blur(10px)';
  s.style.transition = 'filter 800ms';
  s.style.willChange = 'filter';
});

// Verifica se a section está no campo de visão
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const el = entry.target;
    el.style.filter = entry.isIntersecting ? 'blur(0px)' : 'blur(10px)';
  });
}, { threshold: 0.12 });

// Observa cada seção
sections.forEach(s => observer.observe(s));

