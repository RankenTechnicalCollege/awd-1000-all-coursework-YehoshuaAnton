namespace Bank_Library {
    public class Transaction {
        public DateTime DateTime = new();
        public string? Description { get; init; }
        public decimal Amount { get; init; }

        // Constructor for the Transaction class
        public Transaction(string description, decimal amount, DateTime dateTime) {
            DateTime = dateTime;
            Description = description;
            Amount = amount;
        }

        private Transaction() { } // Serialization requires a parameterless constructor

        // Override the ToString method to return the date, description, and amount of each Transaction
        public override string ToString() {
            return $"{DateTime:yyyy/MM/dd} {Description} {(Amount >= 0 ? "+" : "-")}{Math.Abs(Amount):c}";
        }
    }
}
