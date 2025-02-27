document.addEventListener("DOMContentLoaded", function () {
  let scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function () {
    console.log("Прокрутка:", window.scrollY);
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function () {
    console.log("Прокрутка:", window.scrollY);
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("show");
      console.log("Кнопка з'явилась");
    } else {
      scrollToTopBtn.classList.remove("show");
      console.log("Кнопка схована");
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
