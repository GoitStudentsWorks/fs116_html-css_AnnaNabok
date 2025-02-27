(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-mobile-menu-open]'),
    closeMenuBtn: document.querySelector('[data-mobile-menu-close]'),
    menu: document.querySelector('[data-mobile-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }

  document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.mobile-menu-link');
    const targetDiv = document.querySelector('.mobile-menu');

    menuLinks.forEach(link => {
      link.addEventListener('click', function () {
        targetDiv.classList.remove('is-open');
      });
    });
  });
})();
