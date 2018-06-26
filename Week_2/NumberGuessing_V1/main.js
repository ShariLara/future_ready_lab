/*eslint-env browser*/
function playGame(){ 
    alert("First enter a low number, then high number. Then, guess a random number between them."); 

    //get the low and high bounds
    //uses parseInt() to make sure we have numbers not strings 
    var from = parseInt(prompt("Enter the lower bound."));
    while( isNaN(from || from < 0 || from > 1000)){
            from = parseInt(prompt("Enter a number between 0 and 1000"))
    }

    var to = parseInt(prompt ("Enter the higher bound."));
    while( isNaN(from || from < 0 || from > 1000)){
            from = parseInt(prompt("Enter a number between 0 and 1000"))
                 }


    //get an integer between [from, to]
    //Math.random() returns decimals, used Math.round() to get whole number 
    var target = Math.round(Math.random() * (to - from) + from);

    var currentGuess = parseInt(prompt("Guess a number between " + from + " and " + to));

    var totalGuesses = 1;


    //loop until user guesses correct number 
    while(currentGuess != target){ 
        if (currentGuess < target){
        currentGuess = parseInt(prompt ("Enter a higher number"));

            totalGuesses ++;
        }else if (currentGuess > target) {
            currentGuess = parseInt(prompt("Enter a lower number"));

            totalGuesses ++;
        }  
        while(currentGuess > to || currentGuess < from){
            currentGuess = parseInt(prompt ("Enter number between" +from+ " and " +to));
        }

        while (isNaN(currentGuess)){
            currentGuess = parseInt(prompt ("Enter a numberical value"))
        }

    }
    
    alert ("It took " + totalGuesses + "tries to guess the correct number." );
}


