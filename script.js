document.addEventListener("DOMContentLoaded", function () {
    const slideshowBtn = document.getElementById("slideshowBtn");
    const photoFrames = document.querySelectorAll(".photoFram");

    let currentIndex = 0;

    // Hide all frames except the first one
    for (let i = 0; i < photoFrames.length; i++) {
        photoFrames[i].style.display = "block";
    }

    slideshowBtn.addEventListener("click", function () {
        // Hide the current photoFram
        photoFrames[currentIndex].style.display = "none";

        // Increment currentIndex or loop back to 0 if it reaches the end
        currentIndex = (currentIndex + 1) % photoFrames.length;

        // Display the next photoFram
        photoFrames[currentIndex].style.display = "block";
        photoFrames[currentIndex].classList.add("active");
    });
});
