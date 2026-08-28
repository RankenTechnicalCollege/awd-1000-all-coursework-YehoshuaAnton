namespace Bank_Library {
    public class Savings : Account {
        /* Rates change - need to find a better way to do this */
        private const decimal INTERESTRATE = .0435m;
        
        // Constructor for the Savings class
        public Savings(string name) : base(name) { }

        private Savings() { } // Serialization requires a parameterless constuctor

        // Create a new Deposit transaction to deposit the monthly interest
        public override void EndOfMonth() { // Not yet implemented
            DateTime dateTime = new();
            decimal monthlyInterest = Math.Round((INTERESTRATE / 12) * Balance, 2, MidpointRounding.ToPositiveInfinity);
            Deposit("Monthly Interest", monthlyInterest, dateTime.Date);
        }

        // Print out the account name and ID
        public override string ToString() {
            return $"{Name} - {ID}";
        }
    }
}
