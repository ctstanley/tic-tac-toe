// Tic Tac Toe

  // Grab all the necessary elements
 $(window).load(function() {
  
  console.log("loaded");

  var board = $('body');
  var squares = $('.square p');
  var squareBorders = $('.square');
  var reset = $('.reset');
  var playerX = $('#player_x');
  var playerO = $('#player_o');
  var turn = 'X';
  var playCount = 0;
  var xConsecWins = 0;
  var oConsecWins = 0;

  // reset the turn indicator
  displayTurn();

  // Listen for clicks on squares
  // Track variable 'turn' for next move and end of game
  // Disallow repeated moves on the same square
  // Disallow moves after the game has been won
  // checks box
 
$(".square p").unbind().click(function(){
  if (this.innerHTML === '' && turn !== "game_over"){
    this.innerHTML = turn;  // turn = X or O
    this.setAttribute('class', turn);
    turn === 'X' ? turn = 'O' : turn = 'X';
    checkGameStatus();
  }
  else if (turn === "game_over"){
    alert("The game is over!  Click 'reset' to play again.");
  }
  else {
    alert('That square has already been played!');
  }
});
 
  // Reset the board
$(".reset").click(function(){
  $(".square p").each(function(){
    $(this).text("");
    $(this).attr("class", "blank");
  })
  $(".square").attr("class", "square");
  turn = 'X';
  displayTurn();
  playCount = 0;
});


  function checkGameStatus() {
    var winner;  // a string to indicate the winner and winning squares, e.g. 'X012'
    if (winner = getWinner()) {
      gameOver(winner);
    }
    else if (++playCount === 9)
      gameOver('tie');
    // game still going, switch turn
    else displayTurn();
  }

  function displayTurn() {
    if (turn === 'X' ) {
      $("#player_o").html('Player O ');
      $("#player_x").html('Player X &diams; ');
    }
    else {
      $("#player_o").html('Player O &diams; ');
      $("#player_x").html('Player X ');
    }
  }

  function gameOver(winner) {
    if (winner === 'tie') {
      alert("Tie!");
    }
    else {
      highlightBorders(winner);
      // winner[0] is 'X' or 'O'
      alert(winner[0] + ' wins!');
      // check for consecutive wins
      checkConsecWins(winner[0]);
    }
    turn = 'game_over';
  }

  // if any player scores three wins in a row, display a message
  function checkConsecWins(winner) {
    if (winner === 'X') {
      oConsecWins = 0;
      if (++xConsecWins === 3)
        playerX.innerHTML = 'Player X - <strong>HAT TRICK !!!</strong>';
    }
    else {
      xConsecWins = 0;
      if (++oConsecWins === 3);
        playerO.innerHTML = 'Player O - <strong>HAT TRICK !!!</strong>';
    }
  }

  // getWinner will return a win in the form of a string denoting
  // the winning player and winning squares, e.g. 'X048'
  // if no win, return null
  
  function getWinner() {
    if (winnerIs('X')) {
      return 'X' + winnerIs('X');
    }
    else if (winnerIs('O')) {
      return 'O' + winnerIs('O');
    }
    else
      return null;
  }
$(".square p")
  // If a winning combination of squares exists, return the win
  // in the form of a string denoting the winning squares, e.g. '048'
  function winnerIs(player) {
    return allThree(player, squareValue('0'), squareValue('1'), squareValue('2')) ||
           allThree(player, squareValue('3'), squareValue('4'), squareValue('5')) ||
           allThree(player, squareValue('6'), squareValue('7'), squareValue('8')) ||
           allThree(player, squareValue('0'), squareValue('3'), squareValue('6')) ||
           allThree(player, squareValue('1'), squareValue('4'), squareValue('7')) ||
           allThree(player, squareValue('2'), squareValue('5'), squareValue('8')) ||
           allThree(player, squareValue('0'), squareValue('4'), squareValue('8')) ||
           allThree(player, squareValue('2'), squareValue('4'), squareValue('6'));
  }

  // returns the combo of winning rows, e.g. '345'
  function allThree(player, squareOne, squareTwo, squareThree) {
    if ((squareOne[0] === player) && (squareTwo[0] === player) && (squareThree[0] === player))
      return squareOne[1] + squareTwo[1] + squareThree[1];
  }

  function squareValue(key) {
    switch(key) {
      // we want to persist the data denoting the location of the square on the board,
      // as this will allow us to highlight winning squares in the event of a win
      // example return values are 'X5', '02', '7' (space hasn't been played)
      case '0': return $(".square p")[0].innerHTML + '0';
      case '1': return $(".square p")[1].innerHTML + '1';
      case '2': return $(".square p")[2].innerHTML + '2';
      case '3': return $(".square p")[3].innerHTML + '3';
      case '4': return $(".square p")[4].innerHTML + '4';
      case '5': return $(".square p")[5].innerHTML + '5';
      case '6': return $(".square p")[6].innerHTML + '6';
      case '7': return $(".square p")[7].innerHTML + '7';
      case '8': return $(".square p")[8].innerHTML + '8';
      default : console.log('Something went wrong');
    }
  }

  // winningSquares is a string in the form of 'X048'
 // function highlightBorders(winningSquares) {
  //  squareBorders[parseInt(winningSquares[1])].setAttribute('class', 'win');
  //  squareBorders[parseInt(winningSquares[2])].setAttribute('class', 'win');
  //  squareBorders[parseInt(winningSquares[3])].setAttribute('class', 'win');
  //}

});



/////Old code
  //for (var i = 0; i < squares.length; i++) {
    //squares[i].addEventListener('click', function(event) {
      //if (squares[i].innerHTML === '' && turn !== 'game_over') {  // square hasn't been played
        //setSquare(square[i]);
        //checkGameStatus();
      //}
      //else if (turn === 'game_over') {
        //alert("The game is over!  Click 'reset' to play again.");
      //}
      //else {
        //alert('That square has already been played!');
      //}
    //});
  //}

    //reset.addEventListener('click', function () {
    //for (var i = 0; i < squares.length; i++) {
      //squares[i].innerHTML = '';
      //squares[i].setAttribute('class', 'blank');
      /// reset any highlighted winning squares
      //squareBorders[i].setAttribute('class', 'square');
    //}
    // X always goes first
    //turn = 'X';
    // set the turn indicator
    //displayTurn();
    // keep track of how many moves have been made
    // max 9 before a win or tie
    //playCount = 0;
  //});


  // square is a p element
  
  
