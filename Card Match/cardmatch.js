// I think these varables should be collections? so maybe name them plural, eg, cardFronts?
const cardBack = document.querySelector('.back');
const cardFront = document.querySelector('.front');

console.log(cardFront);
cardFront.addEventListener('click', (next) => {
    console.log(next);
    if(cardBack.classList.contains('')) {
        cardFront.classList.add('');
        cardBack.classList.remove('');
        //Main question here would be if I should make a seperate function for each card, i.e. '.back monkey' or just have them all grouped under front/back
        //What would a good way to structure a function be that allows user to click twice on different cards? 

        // I'm not calling your aprouch wrong, But I would probably restructure the html a little, 
        // just one div for each card with two images inside, front and back.
        // then think about showing and hiding the front and back image versus adding/removing css classes

    }
}); // also, stay with the good habbits of not committing broken code, i.e., you had missing bracket and parenthisis.
// not a huge deal when you and I working, but when you start working on a team you piss off other devs of they
// pull in your changes and your work breaks theirs
