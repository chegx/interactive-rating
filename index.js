for (var i = 0; i < 5; i++) {

  document.querySelectorAll("input")[i].addEventListener("click", function() {
    var number = this.value;
    document.querySelector("span").textContent = number;

      document.querySelector("button").addEventListener("click", function() {
        document.querySelector(".rating-card").classList.add("d-none");
        document.querySelector(".thank-card").classList.remove("d-none");
      });
  });
}
