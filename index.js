for (var i = 0; i < 5; i++) {
  document.querySelectorAll(".rating-btn")[i].addEventListener("click", function() {
    var number = this.innerHTML;
    document.querySelector("span").innerHTML = number;
    this.style.backgroundColor = "var(--orange)";
    this.style.color = "var(--white)";

    if (number > 0) { //submit only when rating button is clicked
      document.querySelector(".submit-btn").addEventListener("click", function() {
        document.querySelector(".rating-card").classList.add("d-none");
        document.querySelector(".thank-card").classList.remove("d-none");
      });
    }
  });
}
