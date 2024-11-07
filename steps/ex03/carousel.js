const carouselView = document.getElementById('carousel-view');
const cardContainer = document.getElementById('card-container');
const numberOfCard = document.getElementById('carousel-view').getElementsByClassName('card').length;
const cardWidth = document.getElementById('carousel-view').getElementsByClassName('card')[0].getBoundingClientRect().width;
const totalCardWidth = cardWidth * numberOfCard + (20 * (numberOfCard - 2));
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

function moveCarouselLeft() {
    if (!leftArrow.classList.contains('disabled')) {
        const leftValue = this.getLeftValue();
        const newPosition = leftValue + cardWidth;

        document.documentElement.style.setProperty('--carousel-left', `${newPosition}px`);

        if (newPosition === 0) {
            leftArrow.classList.add('disabled')
        }
        if (rightArrow.classList.contains('disabled')) {
            rightArrow.classList.remove('disabled');
        }
    }
}

function moveCarouselRight() {
    if (!rightArrow.classList.contains('disabled')) {
        const leftValue = this.getLeftValue();
        const newPosition = leftValue - cardWidth;

        document.documentElement.style.setProperty('--carousel-left', `${newPosition}px`);

        if (totalCardWidth - (carouselView.getBoundingClientRect().width - newPosition) < cardWidth) {
            rightArrow.classList.add('disabled')
        }
        if (leftArrow.classList.contains('disabled')) {
            leftArrow.classList.remove('disabled');
        }
    }
}


function getLeftValue() {
    const carouselLeftProperty = getComputedStyle(document.body).getPropertyValue('--carousel-left')
    return Number(carouselLeftProperty.replace('px', ''))
}
