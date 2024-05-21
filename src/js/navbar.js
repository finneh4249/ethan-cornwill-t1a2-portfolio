export function toggleNav() {
  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector("#nav-panel");
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

export function navInit() {
  const hamburger = document.querySelector("#hamburger");
  hamburger.addEventListener("click", toggleNav);
}

