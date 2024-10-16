const carouselView = document.getElementById('carousel-view');
const cardContainer = document.getElementById('card-container');
const numberOfCard = document.getElementById('carousel-view').getElementsByClassName('card').length;
const cardWidth = document
  .getElementById('carousel-view')
  .getElementsByClassName('card')[0]
  .getBoundingClientRect().width;
const totalCardWidth = cardWidth * numberOfCard + 20 * (numberOfCard - 2);
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

function moveCarouselLeft() {
  if (!leftArrow.classList.contains('disabled')) {
    const leftValue = this.getLeftValue();
    const newPosition = leftValue + cardWidth;

    document.documentElement.style.setProperty('--carousel-left', `${newPosition}px`);

    if (newPosition === 0) {
      leftArrow.classList.add('disabled');
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
      rightArrow.classList.add('disabled');
    }
    if (leftArrow.classList.contains('disabled')) {
      leftArrow.classList.remove('disabled');
    }
  }
}

function getLeftValue() {
  const carouselLeftProperty = getComputedStyle(document.body).getPropertyValue('--carousel-left');
  return Number(carouselLeftProperty.replace('px', ''));
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

const focusableEls = Object.freeze([
  'a[href]:not( [disabled])',
  'button:not([disabled])',
  'textarea: not( [disabled])',
  'input [type="text"]:not([disabled])',
  'input[type="radio"]:not([disabled])',
  'input [type="checkbox" ]:not([disabled])',
  'select :not( [disabled])',
]);
const dialogEls = element.querySelectorAll(focusableEls.join(','));
if (!dialogEls.length) return;
const firstFocusableEl = dialogEls[0];
const lastFocusableEl = dialogEls[dialogEls.length - 1];

const modal = document.getElementById('myModal');

modal.addEventListener('keydown', (e) => {
  const KEYCODE_TAB = 9;
  const isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;
  if (!isTabPressed) return;
  if (e.shiftKey) {
    /* shift + tab */ if (document.activeElement === firstFocusableEl) {
      lastFocusableEl.focus();
      e.preventDefault();
    } /* tab */ else {
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
        e.preventDefault();
      }
    }
  }
});
