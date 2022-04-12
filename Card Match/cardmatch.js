// I think these varables should be collections? so maybe name them plural, eg, cardFronts?
const cardBack = document.getElementById('cardBacks');
const cardFront = document.getElementById('cardFronts');
const card = document.querySelectorAll('.card');


cardFront.addEventListener('click', () => {
        var img = document.getElementById(cardBack);
        var backimg = document.getElementById(cardFront);
        img.style.visibility = 'visible';
        backimg.style.visibility = 'hidden';
    }); 

cardBack.addEventListener('click', () => {
        var img = document.getElementById(cardFront);
        var backimg = document.getElementById(cardBack);
        img.style.visibility = 'hidden';
        backimg.style.visibility = 'visible';
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

//Third try notes

    //Defined constant card by using querySelectorAll to select all within class = card
    //Defined constant cardFront and cardBack using getElementById, not sure how to make that more specific
        //to each card rather than the selector just choosing the first identified ID of cardFront or cardBack
    //My thought process on the two arrow functions above using cardFront as example:
        //Added event listener for 'click' on the ID cardFront so when the user clicks this element the following would happen:
            //Variable 'img' is declared within the function as the image not shown (in this case the animal face)
            //Variable 'backimg' is declared within the function as the image being shown (stock card back)
            //Variable 'img' is then declared as having style.visible = visible
            //Variable 'backimg' is then declared as having style.visible = hidden
    
