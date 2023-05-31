let arrowLeft = document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');
let cards = document.getElementsByClassName('card');
let currentIndex = 0;

arrowLeft.addEventListener('click', function() {
    if (currentIndex >= 0) {
        cards[currentIndex]?.focus();
        if(currentIndex != 0)currentIndex--;
    }
});

arrowRight.addEventListener('click', function() {
    if (currentIndex <= 3) {
        cards[currentIndex]?.focus();
        if(currentIndex != 3)currentIndex++;
    }
});
