let youScore = 0;
let pcScore = 0;
let choiceL;
let results;
 



const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
       button.addEventListener('click', () => {
         choiceL = button.id;

         document.getElementById('roundFinal').innerHTML = "";
         playerSelection();
         changepcholder();
         gameResult();
          roundScoreYou();
          roundScorePc();
          winnerDecide();



       })
    })


function winnerDecide(){
       if (youScore === 3) {
              youScore = 0;
              pcScore = 0;
              document.getElementById('roundFinal').innerHTML = "You have beaten the robot";
              
       }
       else if (pcScore === 3){
              youScore = 0;
              pcScore = 0;
              document.getElementById('roundFinal').innerHTML = "The robot has defeated You";
           
       } 
}

function changepcholder(){
       randNum= Math.floor(Math.random() * 3);
     if (randNum === 0){
        document.getElementById('robotHolder').src="images/rock.svg";
        }
     else if (randNum === 1){
        document.getElementById('robotHolder').src="images/paper.svg";
        }
     else {document.getElementById('robotHolder').src="images/scissors.svg";}
        }





function playerSelection(){
              
             
          
              if (choiceL === "rock") {
                     choice =  0
                     if (choice === 0){
                            document.getElementById('holder').src="images/rock.svg";
                     }
                       }
               else if (choiceL === "paper") {
                     choice = 1
                    if (choice === 1){
                            document.getElementById('holder').src="images/paper.svg";
                     }
                              }
              else if (choiceL === "scissors") {
                     choice = 2

                     if (choice === 2){
                            document.getElementById('holder').src="images/scissors.svg";
                     }
                              }
               else { choiceL= playerSelection()

              }
          return choice
        }

        function roundScoreYou(){
             return document.getElementById('youScore').innerHTML = youScore;
        }
        function roundScorePc(){
             return document.getElementById('pcScore').innerHTML = pcScore;
        }
      
function gameResult(){
     

       
       if (choice === randNum) {
              results = "TIE", document.getElementById('winLoseText').innerHTML = "It's A Tie"
                } 

       else if (choice === 0 && randNum === 1) {
        results = "win", document.getElementById('winLoseText').innerHTML = "LOSER";
        pcScore++;
                } 
       else if (choice === 0 && randNum === 2) {
              results = "Lose" , document.getElementById('winLoseText').innerHTML = "WINNER";
              youScore++;
               } 
       else if (choice === 1 && randNum === 0) {
              results = "WINNER", document.getElementById('winLoseText').innerHTML = "WINNER";
              youScore++;
               } 
       else if (choice === 1 && randNum === 2) {
              results = "LOSER", document.getElementById('winLoseText').innerHTML = "LOSER";
              pcScore++;
               } 
      else if (choice === 2 && randNum === 0) {
              results = "LOSER", document.getElementById('winLoseText').innerHTML = "LOSER";
              pcScore++;
               } 
       else if (choice === 2 && randNum === 1) {
              results = "WINNER", document.getElementById('winLoseText').innerHTML = "WINNER";
              youScore++;
              } 
       else {results = "ERROR"}

       return results

}