using System.Text;

namespace Battleship
{
    internal class Battleship
    {
        // Create boolean variables for the game
        static bool playGame = true, newGame = true;
        static int turnCount = 0, hitCount = 0;
        const int TURNCOUNT = 50, HITCOUNT = 17;

        // Create variables for the board
        private const int BOARDSIZE = 10;
        static int letter, number;
        static readonly string[,] playerBoard = new string[BOARDSIZE, BOARDSIZE], computerBoard = new string[BOARDSIZE, BOARDSIZE];

        static void Main(string[] args)
        {
            while (newGame == true)
            {
                SetBoard();
                while (playGame == true)
                {
                    DisplayBoard();
                    // If the coordinates are correctly formatted and the player has not guessed them yet
                    if (FindCoordinates() || playerBoard[letter, number] != " ")
                    {
                        turnCount--;    // Decrement the turn counter
                    }
                    else
                    {        // If he hasn't yet guessed the coordinates
                        // If the coordinates that were guessed are a miss
                        if (computerBoard[letter, number] == null)
                        {
                            playerBoard[letter, number] = "*";  // Mark the corresponding space with a "*"
                        }
                        else
                        {    // But if the guess was a hit
                            if (playerBoard[letter, number] != " ")
                            { // And if the space hasn't been guessed yet
                                hitCount--;     // Decrement the hit counter
                            }
                            else
                            {
                                playerBoard[letter, number] = "!";  // Mark the corresponding space with a "!"
                                hitCount++;     // Increment the hit counter
                            }
                        }
                    }
                    turnCount++;    // Increment the turn counter
                    EndGame();      // Run the end-of-game script
                }
            }
        }

        // Clear the console and redisplay the board
        static void DisplayBoard()
        {
            Console.Clear();
            Console.WriteLine($"Turn count: {turnCount}\nHit count: {hitCount}\n");
            DrawGrid();
        }

        // Create the grid for the board
        static void DrawGrid()
        {
            // Create the first line to show the numbers
            StringBuilder firstLine = new("   |");
            for (int i = 1; i <= BOARDSIZE; i++)
            {
                firstLine.Append(i < 10 ? $" {i} |" : $"{i} |");
            }
            Console.Write(firstLine.ToString());
            DrawLine();
            // For each row, write the corresponding uppercase letter at the start
            for (int rows = 0; rows < playerBoard.GetLength(0); rows++)
            {
                Console.Write($" {(char)('A' + (rows % 26))} |");
                // For each column in the row, display what is in the space
                for (int columns = 0; columns < playerBoard.GetLength(1); columns++)
                {
                    Console.Write($" {playerBoard[rows, columns]} |");
                }
                DrawLine();
            }
        }

        static void DrawLine()
        {
            Console.WriteLine();
            for (int i = 0; i < playerBoard.GetLength(0) + 1; i++)
            {
                Console.Write("---+");
            }
            Console.WriteLine();
        }

        // Fill the not-yet-guessed spaces A-J and 1-10 with spaces
        static void SetBoard()
        {
            for (int row = 0; row < playerBoard.GetLength(0); row++)
            {
                for (int column = 0; column < playerBoard.GetLength(1); column++)
                {
                    playerBoard[row, column] = " ";
                }
            }
            PlaceShips();
        }

        // Algorithm for randomly placing ships at the beginning of the game
        static void PlaceShips()
        {
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

            foreach (Ship ship in ships)
            {
                bool shipPlaced = false;
                int orientation = shipOrientation.Next(2);

                // Pick a random starting position for the ship, making sure it won't go over the side of the board
                while (shipPlaced == false)
                {
                    if (orientation == 0)
                    {
                        horizontal = shipPlacement.Next((BOARDSIZE + 1) - ship.Length);
                        vertical = shipPlacement.Next(BOARDSIZE);
                    }
                    else
                    {
                        horizontal = shipPlacement.Next(BOARDSIZE);
                        vertical = shipPlacement.Next((BOARDSIZE + 1) - ship.Length);
                    }

                    // Loop through the spaces the ship is trying to occupy and make sure they are all empty
                    for (int shipPosition = 0; shipPosition < ship.Length; shipPosition++)
                    {
                        if (orientation == 0)
                        {
                            if (computerBoard[horizontal + shipPosition, vertical] != null)
                            {
                                break;
                            }
                        }
                        else
                        {
                            if (computerBoard[horizontal, vertical + shipPosition] != null)
                            {
                                break;
                            }
                        }

                        // If there are no more spaces to check, loop through the ship's length and place it on the computer's board
                        if (shipPosition == ship.Length - 1)
                        {
                            for (int i = 0; i < ship.Length; i++)
                            {
                                if (orientation == 0)
                                {
                                    computerBoard[horizontal + i, vertical] = Convert.ToString(ship.Name[0]);
                                }
                                else
                                {
                                    computerBoard[horizontal, vertical + i] = Convert.ToString(ship.Name[0]);
                                }
                            }
                            shipPlaced = true;
                        }
                    }
                }
            }
        }

        // Create a method to ensure all guesses are correctly formatted
        static bool FindCoordinates()
        {
            Console.Write("Input a letter then a number (e.g. A1): ");
            string coordinates = Console.ReadLine().ToUpper();
            if (coordinates.Trim().Length < 2 ||        // Check if the guess has both a letter and number
               (((int)coordinates[0] < 'A') || ((int)coordinates[0] > 'A' + (BOARDSIZE - 1))) || // The letter is between A and J
               (((int)coordinates[1] < '1') || ((int)coordinates[1] > '9')))
            { // And the number is between 1 and 10
                Console.WriteLine("Please input your coordinates correctly");
                Thread.Sleep(1000);
                return true;
            }
            else
            {            // If it does
                letter = (int)coordinates[0] - 'A';
                number = (int)coordinates[1] - '1';

                // If the guess's length is more than two, set the number portion of it to 10
                if (coordinates.Length > 2)
                {
                    number = 9;
                }

                return false;
            }

        }

        // Create a method to end the game
        static void EndGame()
        {
            if (hitCount == HITCOUNT || turnCount == TURNCOUNT)
            {
                DisplayBoard();
                NewGame();
            }
        }

        // Create a method to see if the player wants to play again
        static void NewGame()
        {
            Thread.Sleep(1000);
            playGame = false;
            Console.WriteLine("Play again? Y/N");
            string playAgain = Console.ReadLine().ToUpper();
            if (playAgain[0] == 'Y')
            {
                playGame = true;
                turnCount = 0;
                hitCount = 0;
                SetBoard();
            }
            else if (playAgain[0] == 'N')
            {
                newGame = false;
            }
            else
            {
                Console.WriteLine("Please input either \"Y\" or \"N\"");
                Thread.Sleep(1000);
                EndGame();
            }
        }
    }

    // Create a class for the ships
    internal class Ship(string shipName, int shipLength)
    {
        public string Name { get; set; } = shipName;
        public int Length { get; set; } = shipLength;
    }
}
