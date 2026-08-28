using System.Xml.Serialization;

// Create the inner workings of the banking app
namespace Bank_Library {
    public class Bank {
        // Create an instance of the Bank class
        private static Bank? _instance;
        public List<Client?> clients;

        // Create a single Bank using the Singleton Pattern
        public static Bank CreateBankInstance() {
            _instance ??= new Bank();
            return _instance;
        }

        private Bank() {
            clients = [];
        }

        // Create method to add a new client (user)
        public void AddClient(string firstName, string lastName, AccountType accountType, string accountName) {
            clients.Add(new Client(firstName, lastName, accountType, accountName));
        }

        public static void Save(string filePath) {
            XmlSerializer serializer = new(typeof(Bank), [typeof(Savings), typeof(Checking)]);
            using FileStream fileStream = new(filePath, FileMode.Create, FileAccess.Write);
            serializer.Serialize(fileStream, _instance);
        }

        public static void Load(string filePath) {
            XmlSerializer serializer = new(typeof(Bank), [typeof(Savings), typeof(Checking)]);
            using FileStream fileStream = new(filePath, FileMode.Open, FileAccess.Read);
            _instance = serializer.Deserialize(fileStream) as Bank;
        }
    }
}
