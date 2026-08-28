namespace Bank_Library {
    public class Checking : Account {
        // Constructor for the Checking class
        public Checking(string name) : base(name) { }

        private Checking() { } // Serialization requires a parameterless constuctor

        public override void EndOfMonth() { }

        // Print out the account name and ID
        public override string ToString() {
            return $"{Name} - {ID}";
        }
    }
}
