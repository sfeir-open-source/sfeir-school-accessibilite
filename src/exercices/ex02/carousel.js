let teddyCard = document.getElementById('teddy');
let simbaCard = document.getElementById('simba');
let maxCard = document.getElementById('max');
let buggsCard = document.getElementById('buggs');
let currentCard = maxCard;

teddyCard.addEventListener('click', function() {
    currentCard.classList.remove('selected');
    teddyCard.classList.add('selected');
    currentCard = teddyCard;
});

simbaCard.addEventListener('click', function() {
    currentCard.classList.remove('selected');
    simbaCard.classList.add('selected');
    currentCard = simbaCard;
});

maxCard.addEventListener('click', function() {
    currentCard.classList.remove('selected');
    maxCard.classList.add('selected');
    currentCard = maxCard;
});

buggsCard.addEventListener('click', function() {
    currentCard.classList.remove('selected');
    buggsCard.classList.add('selected');
    currentCard = buggsCard;
});