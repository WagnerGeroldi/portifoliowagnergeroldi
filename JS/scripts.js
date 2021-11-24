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

// fim menu responsivo

//funcao typewriter
function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 75 * i);
  });
}

const titulo = document.querySelector("h1");
typeWriter(titulo);
//fim typewriter

var slider = new KeenSlider("#my-keen-slider", {
  slidesPerView: 3,
  mode: "free-snap",
  spacing: 15,
  loop: true,
});

window.addEventListener("resize", function () {
  let largura = window.innerWidth;

  if (largura < 750)
    slider = new KeenSlider("#my-keen-slider", {
      slidesPerView: 2,
      mode: "free-snap",
      spacing: 15,
      loop: true,
    });
});

const buttonleiamais = document.querySelector("#leia-mais");
const classemostrar = document.querySelector(".hidden");

function mostraritem() {
  classemostrar.classList.remove("hidden");
  buttonleiamais.classList.add("hidden");
}
buttonleiamais.addEventListener("click", mostraritem);

const buttonesconder = document.querySelector(".button-esconder");

function escondeitem() {
  classemostrar.classList.add("hidden");
  buttonleiamais.classList.remove("hidden");
}
buttonesconder.addEventListener("click", escondeitem);
