const cardBack = document.querySelector('.back');
const cardFront = document.querySelector('.front');

cardFront.addEventListener('click', () => {
    if(cardBack.classList.contains('')) {
        cardFront.classList.add('');
        cardBack.classList.remove('');
    //Main question here would be if I should make a seperate function for each card, i.e. '.back monkey' or just have them all grouped under front/back
    //What would a good way to structure a function be that allows user to click twice on different cards? 
}

