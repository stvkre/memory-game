const cards = document.querySelectorAll('.memory-card');

// checking if memory card is clicked
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    //
    this.classList.add('flip');

    // setting card click status
    if (!hasFlippedCard) {
        // clicked first time
        hasFlippedCard = true;
        firstCard = this;

        return;
        //
    }
        // clicked second time
        hasFlippedCard = false;
        secondCard = this;

        checkForMatch();
    }
   

function checkForMatch() {
        // put terniary operator to refactor the if else code into one line
        // checking if cards match
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    // if it's a match...
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

}

function unflipCards() {
    lockBoard = true;
    // if it's not a match...
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

    lockBoard = false;
    }, 1500);

}

cards.forEach(card => card.addEventListener('click', flipCard));

