for (var i = 0; i < 5; i++) {

  document.querySelectorAll(".rating-btn")[i].addEventListener("click", function() {
    var number = Number(this.innerHTML);
    document.querySelector("span").innerHTML = number;

    for (var i = 0; i < 5; i++) { 
      document.querySelectorAll(".rating-btn")[i].classList.remove("selected-btn");
      this.classList.add("selected-btn");
    }

    if (number > 0) { //submits only when rating button is clicked
      document.querySelector(".submit-btn").addEventListener("click", function() {
        document.querySelector(".rating-card").classList.add("d-none");
        document.querySelector(".thank-card").classList.remove("d-none");
      });
    }
  });
}
