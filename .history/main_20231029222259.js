document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');

    hamburgerMenu.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const moedasDiv = document.querySelector('.moedas');
    moedasDiv.classList.add('loaded');
  });
  