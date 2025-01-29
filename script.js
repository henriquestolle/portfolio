function toggleMenu() {
  const menu = document.getElementById("menu");
  const menuIcon = document.querySelector(".menu-icon");

  menu.classList.toggle("show");
  menuIcon.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  elements.forEach((el) => observer.observe(el));
});

document.querySelectorAll(".menu-content a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link

    const targetId = link.getAttribute("href"); // Obtém o ID do link clicado (ex: #section-quem-sou)
    const targetSection = document.querySelector(targetId); // Seleciona a seção correspondente

    if (targetSection) {
      const startPosition = window.pageYOffset; // Posição inicial da rolagem
      const targetPosition = targetSection.offsetTop - 50; // Posição final (ajustada para o cabeçalho)
      const distance = targetPosition - startPosition; // Distância a percorrer
      const duration = 700; // Tempo total de 0.7 segundos (700ms)
      let startTime = null;

      // Função de animação de rolagem
      function scrollAnimation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime; // Tempo decorrido
        const progress = Math.min(timeElapsed / duration, 1); // Progresso da animação (máximo 1)

        // Aplique a rolagem (posição final: startPosition + distância a percorrer)
        window.scrollTo(0, startPosition + distance * progress);

        if (timeElapsed < duration) {
          requestAnimationFrame(scrollAnimation); // Chama a função novamente até terminar
        }
      }

      // Inicia a animação de rolagem
      requestAnimationFrame(scrollAnimation);

      // Fecha o menu hambúrguer após o clique
      document.getElementById("menu").classList.remove("show");
      document.querySelector(".menu-icon").classList.remove("active");
    }
  });
});
