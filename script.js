 let input=document.getElementById("input");
 let bttn=document.getElementById("bttn");
 let wrng=document.querySelector(".wrng");
 let guesses=document.getElementById("guesses");

let answer = Math.floor(Math.random() * 100) + 1;
let numGuesses = 0;

function guessesNumber(){
    if(input.value<1||input.value>100){
        wrng.innerHTML="enter a number bw 1 and 100";
    }
    else{
        numGuesses++;
        guesses.innerHTML="No of guesses "+numGuesses;
        if (input.value > answer) {
            wrng.innerHTML = "You guessed too high!";
            input.value="";
          } else if (input.value < answer) {
            wrng.innerHTML = "You guessed too low!";
            input.value="";
          } else {
            wrng.innerHTML = "Congratulations! You guessed the correct number in " + numGuesses + " guesses!";
            setTimeout(()=>{
              resetGame();

            },5000)
          }
    }
}

function resetGame(){
  numGuesses=0;
  answer = Math.floor(Math.random() * 100) + 1;
  input.value="";
  wrng.innerHTML="";
  guesses.innerHTML="No of guesses:0";
}

bttn.addEventListener("click",()=>{
    guessesNumber();            
})






