document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navIcon = document.getElementById('navIcon');
  const navLinks = document.querySelectorAll('.nav-menu a');

  // Alternar Menu Mobile (Abrir / Fechar)
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');

      // Troca o ícone de hambúrguer por 'X' quando aberto (se o ícone existir)
      if (navIcon) {
        if (navMenu.classList.contains('active')) {
          navIcon.classList.remove('fa-bars');
          navIcon.classList.add('fa-xmark');
        } else {
          navIcon.classList.remove('fa-xmark');
          navIcon.classList.add('fa-bars');
        }
      }
    });
  }

  // Fechar o menu automaticamente ao clicar em qualquer link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (navIcon) {
          navIcon.classList.remove('fa-xmark');
          navIcon.classList.add('fa-bars');
        }
      }
    });
  });

  // Lógica do Player de Áudio
  const playButtons = document.querySelectorAll('.play-btn');
  let currentAudio = null;

  playButtons.forEach(button => {
    button.addEventListener('click', () => {
      const audioSrc = button.getAttribute('data-src');
      if (!audioSrc) {
        alert('Áudio em breve!');
        return;
      }

      if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        button.innerHTML = '<i class="fa-solid fa-play"></i>';
      } else {
        if (currentAudio) currentAudio.pause();
        currentAudio = new Audio(audioSrc);
        currentAudio.play();
        button.innerHTML = '<i class="fa-solid fa-pause"></i>';
        currentAudio.onended = () => {
          button.innerHTML = '<i class="fa-solid fa-play"></i>';
        };
      }
    });
  });

  // Envio do Formulário de Contato / Proposta direto para o WhatsApp
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const inputs = bookingForm.querySelectorAll('input, textarea');
      const name = inputs[0].value;
      const email = inputs[1].value;
      const eventType = inputs[2].value;
      const details = inputs[3].value;

      const message = `Olá DJ Loky, meu nome é *${name}* (${email}).%0A%0A*Tipo de Evento:* ${eventType}%0A*Detalhes:* ${details}`;
      const whatsappUrl = `https://wa.me/5582993693146?text=${message}`;

      window.open(whatsappUrl, '_blank');
      bookingForm.reset();
    });
  }
});