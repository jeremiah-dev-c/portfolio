const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

document.querySelectorAll('.nav_links a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});
