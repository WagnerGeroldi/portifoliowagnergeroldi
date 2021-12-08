//JS menu responsivo
const btnMobile = document.getElementById("btn-mobile");
const nav = document.getElementById("nav");

function toggleMenu(e) {
  if (e.type === "touchstart") e.preventDefault(); // previne o clique no touch
  nav.classList.toggle("active");

  //melhorar acessibilidade do menu
  const active = nav.classList.contains("active"); // se tiver active é true, senao é falso
  e.currentTarget.setAttribute("aria-expanded", active); // assim ele muda o aria para true e false
  if (active) {
    e.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    e.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

function closeMenuMobile() {
  if (nav.classList.contains("active") === true) {
    nav.classList.remove("active");
  }
}

//escuta de cliques
btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu); //melhora desempenho no touch
