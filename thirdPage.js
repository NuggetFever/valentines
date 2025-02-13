document.addEventListener("DOMContentLoaded", function () {
    let princessImg = document.getElementById("princess-img");
    let heartAnimationLeft = document.getElementById("heart-animation-left");
    let heartAnimationRight = document.getElementById("heart-animation-right");
    let flashEffect = document.getElementById("flash-effect");
    let message = document.getElementById("message");
    let scale = 1; // Initial scale
    let evolved = false; // Check if evolution happened

    // Load Lottie Animations
    let animationLeft = lottie.loadAnimation({
        container: heartAnimationLeft,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "images/heart.json" // Replace with your Lottie JSON file
    });

    let animationRight = lottie.loadAnimation({
        container: heartAnimationRight,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "images/heart.json" // Replace with your Lottie JSON file
    });

    // Set animation speed (faster)
    animationLeft.setSpeed(2); // 2x speed
    animationRight.setSpeed(2); // 2x speed

    princessImg.addEventListener("click", function () {
        if (!evolved) {
            scale += 0.2; // Increase size
            princessImg.style.transform = `scale(${scale})`;

            // Show heart animations
            heartAnimationLeft.style.display = "block";
            heartAnimationRight.style.display = "block";
            animationLeft.goToAndPlay(0, true); // Play left animation
            animationRight.goToAndPlay(0, true); // Play right animation

            // Update positions of heart animations as the image grows
            heartAnimationLeft.style.left = `${-80 * scale}px`; // Adjust left position
            heartAnimationRight.style.right = `${-80 * scale}px`; // Adjust right position

            // Evolution trigger
            if (scale >= 2) {
                evolved = true; // Set evolution state
                flashEffect.classList.add("flash"); // Trigger flash effect

                setTimeout(() => {
                    flashEffect.classList.remove("flash"); // Remove flash after effect
                    princessImg.src = "my-big-image.png"; // Change to evolved image
                    princessImg.classList.add("evolved"); // Apply smaller size
                }, 500); // Flash duration

                setTimeout(() => {
                    message.style.display = "block"; // Show message

                    // Redirect after 3 seconds
                    setTimeout(() => {
                        window.location.href = "firstPage.html"; // Redirect to next page
                    }, 3000);
                }, 1000);
            }
        }
    });
});