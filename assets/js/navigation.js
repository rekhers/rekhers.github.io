const home = document.querySelector('.c-navigation__home');
const navItems = document.querySelectorAll(".c-navigation__item");
const projects = document.querySelector('.c-navigation__projects');

if(window.location.pathname === "/") {
  toggleActiveState(home);
} else {
  toggleActiveState(projects);
}

[...navItems].forEach(navItem => {
  navItem.addEventListener("click", e => {
    toggleActiveState(e.target);
  });
});

function toggleActiveState(el) {
  const active = document.querySelector(".active");
  if(active) {
    active.classList.remove('.active');
  }
  el.classList.add("active");
}
