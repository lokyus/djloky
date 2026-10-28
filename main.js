document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

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

  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Proposta enviada com sucesso! Entraremos em contato em breve.');
      bookingForm.reset();
    });
  }
});