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