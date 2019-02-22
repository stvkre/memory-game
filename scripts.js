const cards = document.querySelectorAll('.memory-card');

// checking if memory card is clicked
let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');

    // setting card click status
    if (!hasFlippedCard) {
        // clicked first time
        hasFlippedCard = true;
        firstCard = this;
    } else {
        // clicked second time
        hasFlippedCard = false;
        secondCard = this;

    
    }
   
}

cards.forEach(card => card.addEventListener('click', flipCard));

