
var index = 1;
showImage(index);

function addSlide(slide) {
    index = index + slide;
    console.log("index value", index);
    showImage(index);
}

function showImage(n) {
    var allSlides = document.querySelectorAll(".slides");
    var allDots = document.querySelectorAll(".number");

    if (n > allSlides.length) {
        index = 1;
    }

    if (n < 1) {
        index = allSlides.length;
    }

    for (var i = 0; i < allSlides.length; i++) {
        allSlides[i].style.display = "none";
    }

    for (var i = 0; i < allDots.length; i++) {
        allDots[i].style.backgroundColor = "black";
    }

    allSlides[index - 1].style.display = "block";
    allDots[index - 1].style.backgroundColor = "red";
}

 // Automatic sliding
 function autoSlide() {
    addSlide(1); // Move to the next slide
    setTimeout(autoSlide, 2000); // Call autoSlide function again after 2 seconds
}
autoSlide(); // Start the automatic sliding
</script>