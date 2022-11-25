for (var i = 0; i < 5; i++) {

  document.querySelectorAll(".rating-btn")[i].addEventListener("click", function() {
    var number = Number(this.innerHTML);
    document.querySelector("span").innerHTML = number;

    for (var i = 0; i < 5; i++) { //changes all the buttons to grey and then changes the clicked button to orange
      document.querySelectorAll(".rating-btn")[i].style.backgroundColor = "hsl(216, 12%, 25%)";
      document.querySelectorAll(".rating-btn")[i].style.color = "var(--light-grey)";
      this.style.backgroundColor = "var(--orange)";
      this.style.color = "var(--white)";
    }

    if (number > 0) { //submits only when rating button is clicked
      document.querySelector(".submit-btn").addEventListener("click", function() {
        document.querySelector(".rating-card").classList.add("d-none");
        document.querySelector(".thank-card").classList.remove("d-none");
      });
    }
  });
}
