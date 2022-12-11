for (var i = 0; i < 5; i++) {

  document.querySelectorAll("input")[i].addEventListener("click", function() {
    var number = this.value;
    document.querySelector("span").textContent = number;

    if (number > 0) { //submits only when radio button is clicked
      document.querySelector("button").addEventListener("click", function() {
        document.querySelector(".rating-card").classList.add("d-none");
        document.querySelector(".thank-card").classList.remove("d-none");
      });
    }
  });
}
