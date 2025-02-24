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
<script>
  document.querySelector(".menu-toggle").addEventListener("click", function(){" "}
  {document.querySelector(".top-nav").classList.toggle("show")});
</script>;
window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("preloader").style.display = "none";
  }, 1000); // Прелоадер зникне через 1 секунду після завантаження сторінки
});

