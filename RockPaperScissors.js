const _ = require('lodash')
const readline = require('readline')


//Players creation
const Players = {
    draw: 0,
    user: 1,
    computer: 2
}

// assinged values to plays -> rock =1
const PlayOptions = {
    paper: 0,
    scissors: 1,
    rock: 2
}

/**
    JSON  
    const variable = {
        inner_variable0: value0,
        inner_variable1: value1
    }
    console.log(variable.inner_variable0) // prints value0

*/

// Generate Computer PlayOption
function ComputerPlay()
{
    // Generate random [0 -2 ]
    return Math.floor(Math.random() * 3)
}

function PlayGame (PlayerSelection , ComputerSelection)// FUNCTION START 
{   

    let winner = 0
    
    // ComputerSelection String | key
    const ComputerSelection_Key = _.findKey(PlayOptions, v => v === ComputerSelection)

    // make input case insensitive
    let x_lower = PlayerSelection.toString().toLowerCase() // ROCk RoCk -> rock
    

    // compare the user and computer input
    // Handling special cases 
    if(PlayOptions[x_lower] == PlayOptions.paper && ComputerSelection == PlayOptions.rock) {
        console.log("You win!" + x_lower + " beats " + ComputerSelection_Key) 
        winner = Players.user
    } 
    else if(ComputerSelection == PlayOptions.paper && PlayOptions[x_lower] == PlayOptions.rock)  {
        console.log("You lose!" + ComputerSelection_Key + " beats " + x_lower)
        winner = Players.computer
    }

    // Handling more special cases - Draw
    else if ( PlayOptions[x_lower] == ComputerSelection ) {
        console.log( "Draw" )
        winner = Players.draw
    }

    // Handling regular cases
     else if(PlayOptions[x_lower] > ComputerSelection ){
        console.log("You win!" + x_lower + " beats " + ComputerSelection_Key) 
        winner = Players.user
    }
    else {
        console.log("You lose!" + ComputerSelection_Key + " beats " + x_lower)
        winner = Players.computer
    }
    // return winner
    return winner 

}// FUNCTION END



    // new game function
    function Game() { 
        
        // DISPLAY RULES
        console.log("Input rock, paper, or scissors")
        // variables to track score
        let userScore = 0, computerScore = 0, drawScore = 0
        // user option
        let user_option = ""
        
        // play five rounds 
       for (let index = 0; index < 5; index++) {
            console.log("Round " + (index + 1))
            console.log("Insert Option: ")
            const userInput = readline.createInterface({
                input: process.stdin,
                output: process.stdout
              });
              
              userInput.question('Input Option:', (option) => {
                user_option = option
              
                userInput.close();
              })
              
                            
            const _winner = PlayGame (user_option, ComputerPlay())
            if (_winner == Players.user ) {
                userScore ++ 
            }
            else if (_winner == Players.computer) {
                computerScore ++
            }
            else {
                drawScore ++
            }
        
       }

       // COMPUTE AND DISPLAY FINAL SCORE M'KAY
       console.log( "Draws: " + drawScore)
       console.log( "Wins: " + userScore)
       console.log( "Losses: " + computerScore)
       
       if (userScore > computerScore) {
           console.log("YOU WIN YOU AWESOME BITCH")
       }
       else {
           console.log("YOU LOSE MC FUCKER")
       }
    }

    // START GAME
    Game()