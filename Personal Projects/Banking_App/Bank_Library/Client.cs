namespace Bank_Library {
    public class Client {
        public string? FirstName { get; init; }
        public string? LastName { get; init; }
        public string? ID { get; init; }
        public List<Account?> accounts;

        // Constructor for the Client class
        public Client(string firstName, string lastName, AccountType accountType, string accountName) {
            FirstName = firstName;
            LastName = lastName;
            ID = GenerateClientID();
            accounts = [];
            AddAccount(accountType, accountName);
        }

        private Client() { } // Serialization requires a parameterless construtor

        // Make RNG for Client ID
        private static readonly Random random = new();
        // Make a List<int> of all the used IDs
        private static readonly List<int> usedID = [];
        private static string GenerateClientID() {
            int i;
            do {        // Pick a number from 100,000 to 1,000,000 exclusive
                i = random.Next(100_000, 1_000_000);
            } while (usedID.Contains(i)); // As long as it isn't already in the list
            return i.ToString();   // Convert to string for ease of use
        }

        // Create function for adding accounts to a Client
        public void AddAccount(AccountType accountType, string accountName) {
            /* Possibly change to else if or switch if there are more types of accounts */
            // Add either a savings or checking account depending on the Client's choice (0 - Savings, 1 - Checking)
            Account? account = accountType == 0 ? new Savings(accountName) : new Checking(accountName);
            if (account != null) {
                accounts.Add(account);
            }
        }

        // Override ToString method to return Client's name
        public override string ToString() {
            return $"{LastName}, {FirstName}";
        }
    }
}
