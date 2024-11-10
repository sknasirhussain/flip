document.addEventListener("DOMContentLoaded", function() {
    const card = document.getElementById('card');
    const topText = document.getElementById('topText');
    const bottomText = document.getElementById('bottomText');

    card.addEventListener('click', function() {
        card.classList.toggle('flipped');
        
        if (card.classList.contains('flipped')) {
            topText.textContent = "Oh!! It's the Queen of all hearts \u2764\uFE0F\u2764\uFE0F !!!";
            bottomText.style.display = "block"; // Show bottom text
        } else {
            topText.textContent = "There is a card on the screen. I wonder who's behind it...?";
            bottomText.style.display = "none"; // Hide bottom text
        }
    });
});
