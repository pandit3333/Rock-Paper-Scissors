/**
 * Function to handle the game logic when a button is clicked.
 * @param {string} playerChoice - The choice made by the player (Rock, Paper, or Scissors).
 */
function playGame(playerChoice) {
    const computerChoice = getComputerChoice(); // Generate the computer's choice
    const result = determineWinner(playerChoice, computerChoice); // Determine the result
    // Display the result on the page
    document.getElementById('result').innerHTML = `
        <p>You chose: <strong>${playerChoice}</strong></p>
        <p>Computer chose: <strong>${computerChoice}</strong></p>
        <p>Result: <strong>${result}</strong></p>
    `;
}

/**
 * Function to generate the computer's choice randomly.
 * @returns {string} - The computer's choice (Rock, Paper, or Scissors).
 */
function getComputerChoice() {
    const random = Math.random(); // Generate a random number between 0 and 1
    if (random < 1 / 3) {
        return 'Rock'; // Rock for values less than 1/3
    } else if (random < 2 / 3) {
        return 'Paper'; // Paper for values between 1/3 and 2/3
    } else {
        return 'Scissors'; // Scissors for values greater than 2/3
    }
}

/**
 * Function to determine the winner of the game.
 * @param {string} player - The player's choice.
 * @param {string} computer - The computer's choice.
 * @returns {string} - The result of the game (Win, Lose, or Tie).
 */
function determineWinner(player, computer) {
    if (player === computer) {
        return 'It\'s a Tie!'; // Tie if both choices are the same
    } else if (
        (player === 'Rock' && computer === 'Scissors') ||
        (player === 'Paper' && computer === 'Rock') ||
        (player === 'Scissors' && computer === 'Paper')
    ) {
        return 'You Win!'; // Player wins in these scenarios
    } else {
        return 'You Lose!'; // Player loses otherwise
    }
}

/**
 * Function to reset the game by clearing the result.
 */
function resetGame() {
    document.getElementById('result').innerHTML = ''; // Clear the result section
}
