function myFun() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }



  document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with class name "myBtn"
    var buttons = document.getElementsByClassName("myBtn");
  
    // Loop through each button
    for (var i = 0; i < buttons.length; i++) {
      // Add click event listener to each button
      buttons[i].addEventListener("click", function() {
        // Find the next sibling element with class name "more"
        var moreText = this.nextElementSibling;
  
        // Toggle the display style of the "more" text
        if (moreText.style.display === "none" || moreText.style.display === "") {
          moreText.style.display = "inline";
          this.innerHTML = "Read less";
        } else {
          moreText.style.display = "none";
          this.innerHTML = "Read more";
        }
      });
    }
  });
  