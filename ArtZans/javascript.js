

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
