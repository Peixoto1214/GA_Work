



// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
function computerChoice() {

let computerChoiceInt =Math.random() * 3;
computerChoiceInt = Math.ceil(computerChoiceInt);

    if (computerChoiceInt == 1){
        return "rock";
    }else if (computerChoiceInt == 2){
        return "paper";
    }else{
        return "scissors"
    }
};


/* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.

 */
function compare(me, opponent) {
    if (me ==  opponent){
        winner = "tie"
    }else if(me == "rock"){
        if(opponent == "paper"){
            winner = "opponent";
    }else{
        winner = "me";
    }
    }else if(me == "paper"){
        if(opponent == "scissor"){
            winner = "opponent";
    }else{
        winner = "me";
    }
    }else if(opponent == "rock"){
        
            winner =  "opponent";
    }else{
        winner = "me";
    }
    
//output to screen
document.querySelector("#computerSelection").innerText=opponent;

if(winner=="me"){document.querySelector("#decision").innerText = "I WON!";
}else if(winner == "opponent"){
    document.querySelector("#decision").innerText = "I LOST!";
}else{
    document.querySelector("#decision").innerText = "It's a Tie!";
}

};

document.addEventListener('DOMContentLoaded', function(event) {

    // Bind a click event onto each of the three buttons.  It should run the compare function and then put the result to the #decsision id in the html
    document.querySelector("#rock").addEventListener("click", function(e){
        e.preventDefault();

        let me ="rock";
        let theComputerChoice = computerChoice();

        compare(me,theComputerChoice);


    });

    document.querySelector("#paper").addEventListener("click", function(e){
        e.preventDefault();

        let me ="paper";
        let theComputerChoice = computerChoice();

        compare(me,theComputerChoice);


    });

    document.querySelector("#scissors").addEventListener("click", function(e){
        e.preventDefault();

        let me ="scissors";
        let theComputerChoice = computerChoice();

        compare(me,theComputerChoice);


    });

});
