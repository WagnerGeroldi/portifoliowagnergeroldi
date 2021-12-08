//lidando com o botao leia mais...

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

//fim botao leia mais


