document.addEventListener("DOMContentLoaded", function() {
    const card = document.getElementById('card');
    const topText = document.getElementById('topText');
    const bottomText = document.getElementById('bottomText');

    card.addEventListener('click', toggleFlip);
    card.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') toggleFlip();
    });

    function toggleFlip() {
        card.classList.toggle('flipped');

        // Toggle text based on the card's flipped state
        if (card.classList.contains('flipped')) {
            topText.textContent = "Check Out the Back!";
            bottomText.classList.remove('hidden');
        } else {
            topText.textContent = "Welcome to the Card Flip!";
            bottomText.classList.add('hidden');
        }
    }
});
