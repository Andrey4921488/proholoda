document.addEventListener("DOMContentLoaded", function () {
  let elements = document.querySelectorAll(".hidden");

  function checkPosition() {
    let windowHeight = window.innerHeight;
    elements.forEach((el) => {
      let positionFromTop = el.getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", checkPosition);
  checkPosition();
});
