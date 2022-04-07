// I think these varables should be collections? so maybe name them plural, eg, cardFronts?
const cardBack = document.querySelector('cardBacks');
const cardFront = document.querySelector('cardFronts');

console.log(cardFront);
cardFront.addEventListener('click', (next) => {
    console.log(next);
    function showImage() {
        var img = document.getElementById('cardBack');
        img.style.visibility = 'visible';
    }
       
}); 

console.log(cardBack);
cardBack.addEventListener('click', (next) => {
    console.log(next);
    function showImage() {
        var img = document.getElementById('cardBack');
        img.style.visibility = 'visible';
    }
       
}); 

//First Try Notes:

    //Main question here would be if I should make a seperate function for each card, i.e. '.back monkey' or just have them all grouped under front/back
        //What would a good way to structure a function be that allows user to click twice on different cards? 

        // I'm not calling your aprouch wrong, But I would probably restructure the html a little, 
        // just one div for each card with two images inside, front and back.
        // then think about showing and hiding the front and back image versus adding/removing css classes

    // also, stay with the good habbits of not committing broken code, i.e., you had missing bracket and parenthisis.
    // not a huge deal when you and I working, but when you start working on a team you piss off other devs of they
    // pull in your changes and your work breaks theirs

//Second Try Notes

    //Went back and changed the HTML document. Much cleaner using your advice and much shorter.
    //Removed CSS classes and changed Javascript file to a function that shows/hide the images instead of add/removing classes
    //Wanted to stop there to be sure I didn't continue doing the wrong code.
    //Questions from this lesson:
        //What was the reasoning behind adding a console.log to the JS?
        //Could you explain the use of (next) added to the arrow function?
    //Things to accomplish my next session:
        //Display cardFront alone by default and hide the cardBack until the element is clicked
        //Tell my manager to stop actually making me work so I can spend more time training to get a new job...
