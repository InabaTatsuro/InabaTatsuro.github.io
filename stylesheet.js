const responsive_menu_btn = document.querySelector('.responsive_btn');
responsive_menu_btn.addEventListener('click', menuToggle);
const responsive_header_nav_lists = document.querySelector('.header_nav_lists');
responsive_header_nav_lists.addEventListener('click', menuToggle);

function menuToggle() {
  const header_menu_detail = document.querySelector('.header_nav');
  header_menu_detail.classList.toggle('menu_active');
}
