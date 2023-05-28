const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let boardLocked = false;
let FirstCard, SecondCard;

const flipCard = e => {
    if (boardLocked) return;

    const target = e.target.parentElement;
    if (target === FirstCard) return;

    target.classList.add("flip");

    console.log("image:", target.dataset.images)

    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        FirstCard = target;
    }
    else {
        //second click
        hasFlippedCard = false;
        SecondCard = target;

        checkForMatch();
    }
};

const checkForMatch = () => {
    if (FirstCard.dataset.images === SecondCard.dataset.images) {
        disableCards();
    }
    else {
        unflipCards();
    }
}

const disableCards = () => {
    FirstCard.removeEventListener("click", flipCard);
    SecondCard.removeEventListener("click", flipCard);

}

const unflipCards = () => {
    boardLocked = true;

    setTimeout(() => {
        FirstCard.classList.remove("flip");
        SecondCard.classList.remove("flip");
        resetBoard();
    }, 1000);
};

const resetBoard = () => {
    hasFlippedCard = boardLocked = false;
    FirstCard = SecondCard = null;
}

cards.forEach(card => {
    //add event listener to every card
    card.addEventListener("click", flipCard);

    const randomIndex = Math.floor(Math.random() * cards.length)
    card.style.order = randomIndex;
});

button.addEventListener("click", ()=> {
    document.location.reload();
})

