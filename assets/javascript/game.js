var computerChoices = ["a", "b", "c", "d",
            "e", "f", "g", "h",
            "i", "j", "k", "l",
            "m", "n", "o", "p",
            "q", "r", "s", "t",
            "u", "v", "w", "x",
            "y", "z"];
var wins = 0;
var losses = 0;


function newGame() {
  var guessesLeft = 9;
  var yourGuessSoFar = [];
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  update();
  console.log(computerGuess);

  function update(){
    console.log("updating!!!!");
    var html = "<p>Guess what letter I am thinking of</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses left: " + guessesLeft + "</p>" +
            "<p>Your guesses so far: " + yourGuessSoFar + "</p>"
            document.querySelector("#game").innerHTML = html;
  }

  document.onkeyup = function(event) {


    var userGuess = (event.key).toLowerCase();
    guessesLeft--;
    yourGuessSoFar.push(userGuess);
    update();

    if ((userGuess === computerGuess) && (guessesLeft > 0)) {
      wins++;
      newGame();
    }
    if ((userGuess !== computerGuess) && (guessesLeft <= 0)) {
      losses++;
      newGame();
    }   

  };
}


newGame();