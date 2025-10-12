// Inicializa a lógica de rolagem suave e o clique no logotipo.
// - Calcula offset do cabeçalho para que o alvo não fique escondido.
// - Trata links âncora e o clique na marca para rolar ao topo.
export default function initScrollModule() {
  const header = document.querySelector('header');
  const offset = () => (header ? header.offsetHeight + 8 : 0);

  // Links âncora: previne comportamento padrão e faz scroll compensado.
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const hash = a.getAttribute('href');
      const target = document.querySelector(hash);

      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - offset();
        window.scrollTo({ top, behavior: 'smooth' });
        try { history.replaceState(null, '', hash); } catch (err) {}
      } else if (hash === '#home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        try { history.replaceState(null, '', hash); } catch (err) {}
      }
    });
  });

  // Clique na marca: rola ao topo da página
  document.querySelectorAll('.brand, .brand img').forEach(el => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      try { history.replaceState(null, '', '#home'); } catch (err) {}
    });
  });

  // Se houver hash ao carregar, rola imediatamente para o destino (ajustado pelo header).
  if (location.hash) {
    const target = document.querySelector(location.hash);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - offset();
      window.scrollTo({ top, behavior: 'auto' });
    }
  }
}

// Auto-inicializa ao importar.
initScrollModule();
