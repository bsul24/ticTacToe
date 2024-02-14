"use strict";

function createGameBoard() {
  const gameboard = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];

  const showBoard = function () {
    for (let i = 0; i < 3; i++) {
      console.log(gameboard[i]);
    }
  };

  return { gameboard, showBoard };
}

function createPlayer(num) {
  const number = num;
  const symbol = num === 1 ? "X" : "O";

  return { number, symbol };
}

function Game() {
  const player1 = createPlayer(1);
  const player2 = createPlayer(2);
  const gameboard = createGameBoard();
  let isGameActive = true;
  let currentPlayer = player1;

  const playTurn = function (row, column) {
    if (gameboard.gameboard[row][column] !== " ") return;
    if (!isGameActive) return;

    gameboard.gameboard[row][column] = currentPlayer.symbol;
    checkWinner();
    switchPlayer();
    getBoard();
  };

  const switchPlayer = function () {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };

  const checkWinner = function () {
    // Check for 3 in a row horizontal
    for (let i = 0; i < 3; i++) {
      let x = 0;
      let o = 0;
      for (let j = 0; j < 3; j++) {
        if (gameboard.gameboard[i][j] === "X") x++;
        if (gameboard.gameboard[i][j] === "O") o++;
      }
      if (x === 3) {
        console.log("Player 1 wins!");
        endGame();
        return;
      }
      if (o === 3) {
        console.log("Player 2 wins!");
        endGame();
        return;
      }
    }

    // Check for 3 in a row vertical
    for (let i = 0; i < 3; i++) {
      let x = 0;
      let o = 0;
      for (let j = 0; j < 3; j++) {
        if (gameboard.gameboard[j][i] === "X") x++;
        if (gameboard.gameboard[j][i] === "O") o++;
      }
      if (x === 3) {
        console.log("Player 1 wins!");
        endGame();
        return;
      }
      if (o === 3) {
        console.log("Player 2 wins!");
        endGame();
        return;
      }
    }

    // Check for 3 in a row diagonal
    if (
      gameboard.gameboard[0][0] === "X" &&
      gameboard.gameboard[1][1] === "X" &&
      gameboard.gameboard[2][2] === "X"
    ) {
      console.log("Player 1 wins!");
      endGame();
      return;
    }
    if (
      gameboard.gameboard[0][0] === "O" &&
      gameboard.gameboard[1][1] === "O" &&
      gameboard.gameboard[2][2] === "O"
    ) {
      console.log("Player 2 wins!");
      endGame();
      return;
    }
    if (
      gameboard.gameboard[2][0] === "O" &&
      gameboard.gameboard[1][1] === "O" &&
      gameboard.gameboard[0][2] === "O"
    ) {
      console.log("Player 2 wins!");
      endGame();
      return;
    }
    if (
      gameboard.gameboard[2][0] === "X" &&
      gameboard.gameboard[1][1] === "X" &&
      gameboard.gameboard[0][2] === "X"
    ) {
      console.log("Player 1 wins!");
      endGame();
      return;
    }

    // Check for tie
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (gameboard.gameboard[i][j] === " ") return;
      }
    }

    console.log("It's a tie!");
    endGame();
  };

  const endGame = function () {
    isGameActive = false;
  };

  const getBoard = function () {
    gameboard.showBoard();
  };

  return { playTurn, getBoard };
}

function displayController() {
  const game = Game();
  const currentPlayerDisplay = document.querySelector(".currentPlayer");
}
