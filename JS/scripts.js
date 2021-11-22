//JS menu responsivo
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(e) {
  if (e.type === "touchstart") e.preventDefault(); // previne o clique no touch
  const nav = document.getElementById("nav");
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

//escuta de cliques
btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu); //melhora desempenho no touch
// fim menu responsivo

//funcao typewriter
function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 75 * i);
  });
}


const titulo = document.querySelector('h1');
typeWriter(titulo);
