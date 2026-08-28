using MySql.Data.MySqlClient;
using RecipeDatabase;

SQLConnection _ = new();

namespace RecipeDatabase {
    internal class SQLConnection {
        public SQLConnection() {
            GetRecipes();
        }

        public static MySqlConnection GetConnection() {
            MySqlConnectionStringBuilder builder = new() {
                Server = "localhost",
                UserID = "root",
                Database = "recipedb"
            };

            MySqlConnection connection = new(builder.ToString());
            return connection;
        }

        public static void GetRecipes() {
            try {
                using MySqlConnection connection = GetConnection();
                connection.Open();
                using MySqlCommand command = new();
                command.Connection = connection;
                command.CommandType = System.Data.CommandType.Text;
                string query = "";
                command.CommandText = query;
                using MySqlDataReader reader = command.ExecuteReader();
                Print(reader);
            } catch (MySqlException e) {
                Console.WriteLine(e.Message);
            }
        }

        public static void Print(MySqlDataReader reader) {
            try {
                while (reader.Read()) {
                    Console.WriteLine(reader.GetString(0));
                }
            } catch (MySqlException e) {
                Console.WriteLine(e.Message);
            }
        }
    }
}
