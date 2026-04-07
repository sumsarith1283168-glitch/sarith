function toggleMenu(){
    document.getElementById("menu").classList.toggle("show");
}

  let slider = document.getElementById("slider");
  let index = 0;
  let total = 4;

  function nextSlide() {
    let width = slider.clientWidth;
    index = (index + 1) % total;

    slider.scrollTo({
      left: width * index,
      behavior: "smooth"
    });
  }

  function prevSlide() {
    let width = slider.clientWidth;
    index = (index - 1 + total) % total;

    slider.scrollTo({
      left: width * index,
      behavior: "smooth"
    });
  }

  // auto slide
  setInterval(() => {
    nextSlide();
  }, 3000);