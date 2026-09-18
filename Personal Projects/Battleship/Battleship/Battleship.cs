using System.Text;

/*
 * IDEAS FOR FUTURE IMPLEMENTATION:
 *  - A second board
 *  - A way for the player to manually place their ships
 *  - Guessing algorithms for the computer
 *  - A WinForm app
 *  - Leaderboards?
 */

namespace Battleship {
    internal class Battleship {
        // Create boolean variables for the game
        static bool playGame = true, newGame = true;
        static int turnCount = 0, hitCount = 0;
        const int TURNCOUNT = 50, HITCOUNT = 17;

        // Create variables for the board
        private const int BOARDSIZE = 10;
        static int letter, number;
        static readonly string[,] playerBoard = new string[BOARDSIZE, BOARDSIZE], computersBoard = new string[BOARDSIZE, BOARDSIZE];

        /* THERE IS NO NEED FOR SO MANY CHECKS */
        /* RECONFIGURE FOR POSITIVE CHECKS, NOT NEGATIVE */
        static void Main(string[] args) {
            // Run once at the beginning of a new game
            while (newGame == true) {
                // Reset all spaces of the board to " " and place the ships
                SetBoard();
                // Run at the beginning of each turn
                while (playGame == true) {
                    // Erase the old board and redisplay the new one
                    DisplayBoard();
                    // If the coordinates are not correctly formatted or the player has already guessed them...
                    if (!FindCoordinates() || playerBoard[letter, number] != " ") {
                        // Decrement the turn counter
                        turnCount--;
                      // If the player hasn't yet guessed the coordinates...
                    } else {
                        // If the coordinates that were guessed are a miss...
                        if (computersBoard[letter, number] == null) {
                            // Mark the corresponding space with a "*"
                            playerBoard[letter, number] = "*";
                          // But if the coordinates that were guessed are a hit...
                        } else {
                            // And if the space has already been guessed...
                            if (playerBoard[letter, number] != " ") {
                                // Decrement the hit counter
                                hitCount--;
                              // But if the coodrinates have not yet been guessed...
                            } else {
                                // Mark the corresponding space with a "!"
                                playerBoard[letter, number] = "!";
                                // Increment the hit counter
                                hitCount++;
                            }
                        }
                    }
                    // Increment the turn counter
                    turnCount++;
                    // Run the end-of-game script
                    EndGame();
                }
            }
        }

        // Clear the console and redisplay the board
        static void DisplayBoard() {
            Console.Clear();
            /* For dev work only */
            //Console.WriteLine($"Turn count: {turnCount}\nHit count: {hitCount}\n");
            DrawGrid();
        }

        // Create the grid for the board
        static void DrawGrid() {
            // Create the first line to show the numbers
            StringBuilder firstLine = new("   |");
            for (int i = 1; i <= BOARDSIZE; i++) {
                firstLine.Append(i < 10 ? $" {i} |" : $"{i} |");
            }
            Console.Write(firstLine);
            DrawLine();
            // For each row, write the corresponding uppercase letter at the start
            for (int rows = 0; rows < playerBoard.GetLength(0); rows++) {
                Console.Write($" {(char)('A' + (rows % 26))} |");
                // For each column in the row, display what is in the space
                for (int columns = 0; columns < playerBoard.GetLength(1); columns++) {
                    Console.Write($" {playerBoard[rows, columns]} |");
                }
                DrawLine();
            }
        }

        static void DrawLine() {
            Console.WriteLine();
            for (int i = 0; i < playerBoard.GetLength(0) + 1; i++) {
                Console.Write("---+");
            }
            Console.WriteLine();
        }

        // Fill the not-yet-guessed spaces A-J and 1-10 with spaces
        static void SetBoard() {
            for (int row = 0; row < playerBoard.GetLength(0); row++) {
                for (int column = 0; column < playerBoard.GetLength(1); column++) {
                    playerBoard[row, column] = " ";
                }
            }
            PlaceShips();
        }

        // Algorithm for randomly placing ships at the beginning of the game
        static void PlaceShips() {
            int horizontal, vertical;
            Random shipOrientation = new();
            Random shipPlacement = new();

            // Initialize array of Ship objects
            Ship[] ships = [
                new("Aircraft Carrier", 5),
                new("Battleship", 4),
                new("Destroyer", 3),
                new("Submarine", 3),
                new("Patrol Boat", 2)
            ];

            foreach (Ship ship in ships) {
                bool shipPlaced = false;
                int orientation = shipOrientation.Next(2);

                // Pick a random starting position for the ship, making sure it won't go over the side of the board
                while (shipPlaced == false) {
                    if (orientation == 0) {
                        horizontal = shipPlacement.Next((BOARDSIZE + 1) - ship.Length);
                        vertical = shipPlacement.Next(BOARDSIZE);
                    }
                    else {
                        horizontal = shipPlacement.Next(BOARDSIZE);
                        vertical = shipPlacement.Next((BOARDSIZE + 1) - ship.Length);
                    }

                    // Loop through the spaces the ship is trying to occupy and make sure they are all empty
                    for (int shipPosition = 0; shipPosition < ship.Length; shipPosition++) {
                        if (orientation == 0) {
                            if (computersBoard[horizontal + shipPosition, vertical] != null) {
                                break;
                            }
                        }
                        else {
                            if (computersBoard[horizontal, vertical + shipPosition] != null) {
                                break;
                            }
                        }

                        // If there are no more spaces to check, loop through the ship's length and place it on the computer's board
                        if (shipPosition == ship.Length - 1) {
                            for (int i = 0; i < ship.Length; i++) {
                                if (orientation == 0) {
                                    computersBoard[horizontal + i, vertical] = Convert.ToString(ship.Name[0]);
                                }
                                else {
                                    computersBoard[horizontal, vertical + i] = Convert.ToString(ship.Name[0]);
                                }
                            }
                            shipPlaced = true;
                        }
                    }
                }
            }
        }

        // Create a method to ensure all guesses are correctly formatted
        static bool FindCoordinates() {
            Console.Write("Input a letter then a number (e.g. A1): ");
            string coordinates = Console.ReadLine().ToUpper();
            if (coordinates.Trim().Length < 2 ||        // Check if the guess has both a letter and number
               (((int)coordinates[0] < 'A') || ((int)coordinates[0] > 'A' + (BOARDSIZE - 1))) || // The letter is between A and J
               (((int)coordinates[1] < '1') || ((int)coordinates[1] > '9'))) { // And the number is between 1 and 10
                Console.WriteLine("Please input your coordinates correctly");
                Thread.Sleep(1000);
                return false;
            }
            else {            // If it does
                letter = (int)coordinates[0] - 'A';
                number = (int)coordinates[1] - '1';

                /* LAZY CODING - CHANGE IT */
                /* Find a way to work a range operator in: [1..^0] - from the second index to the last */
                // If the guess's length is more than two, set the number portion of it to 10
                if (coordinates.Length > 2) {
                    number = 9;
                }
                return true;
            }

        }

        // Create a method to check for the end of the game
        static void EndGame() {
            // If either the hitcount reached the limit (win), or the turncount hit the limit (loss)...
            if (hitCount == HITCOUNT || turnCount == TURNCOUNT) {
                // Show the winning board
                DisplayBoard();
                // Ask if the player wants to play again
                NewGame();
            }
        }

        // Create a method to see if the player wants to play again
        static void NewGame() {
            // Pause for 1 second for effect
            Thread.Sleep(1000);
            // Stop the game by setting the turn loop to false
            playGame = false;
            // Display a message asking if the player wants to play again
            Console.WriteLine("Play again? Y/N");
            // Parse their input - only the first letter matters
            string playAgain = Console.ReadLine().ToUpper();
            // If the parsed input is 'Y'...
            if (playAgain[0] == 'Y') {
                // Restart the gameplay loop by setting playGame to true
                playGame = true;
                // Reset the turncount and hitcount back to 0
                turnCount = 0;
                hitCount = 0;
                // Call the method to once again set all the spaces on the board to " " and randomize ship placement
                SetBoard();
              // If the parsed input is 'N'...
            } else if (playAgain[0] == 'N') {
                // End the program by setting the "game is running" loop to false
                newGame = false;
                // Close the console window
                Environment.Exit(0);
              // If the parsed input is neither 'Y' nor 'N'...
            } else {
                // Display a message asking the player to provide valid input
                Console.WriteLine("Please input either \"Y\" or \"N\"");
                //Pause for 1 second for effect
                Thread.Sleep(1000);
                // Redisplay the console
                DisplayBoard();
                // Run this method again
                NewGame();
            }
        }
    }

    // Create a class for the ships and a constructor for the Ship class
    internal class Ship(string shipName, int shipLength) {
        public string Name { get; set; } = shipName;
        public int Length { get; set; } = shipLength;
    }
}
