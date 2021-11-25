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

// ajustes funcionamento keen slider
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

//fim keen slider

const btnReadMore = document.querySelector("#read-more");
const showText = document.querySelector(".hidden");

function showTextAbout() {
  showText.classList.remove("hidden");
  btnReadMore.classList.add("hidden");
}
btnReadMore.addEventListener("click", showTextAbout);

const btnHiddenText = document.querySelector(".button-hidden");

function hiddenTextAbout() {
  showText.classList.add("hidden");
  btnReadMore.classList.remove("hidden");
}
btnHiddenText.addEventListener("click", hiddenTextAbout);


//botao subir

$(document).ready(function () {
  // Exibe ou oculta o botão
  $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
          $('.voltar-ao-topo').fadeIn(200);
      } else {
          $('.voltar-ao-topo').fadeOut(200);
      }
  });

  // Faz animação para subir
  $('.voltar-ao-topo').click(function (event) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 300);
  })
});