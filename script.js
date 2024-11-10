document.addEventListener("DOMContentLoaded", function() {
    const card = document.getElementById('card');
    const topText = document.getElementById('topText');
    const bottomText = document.getElementById('bottomText');

    card.addEventListener('click', function() {
        card.classList.toggle('flipped');
        
        if (card.classList.contains('flipped')) {
            topText.textContent = "Check Out the Back!";
            bottomText.style.display = "block"; // Show bottom text
        } else {
            topText.textContent = "Welcome to the Card Flip!";
            bottomText.style.display = "none"; // Hide bottom text
        }
    });
});
