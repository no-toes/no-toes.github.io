window.addEventListener('DOMContentLoaded', () => {
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const navLinks = [].slice.call(document.querySelectorAll('#navbarResponsive .nav-link'));

  navLinks.map(link => {
    link.addEventListener('click', () => {
      if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });
});