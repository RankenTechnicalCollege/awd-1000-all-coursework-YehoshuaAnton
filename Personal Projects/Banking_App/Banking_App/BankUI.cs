using Bank_Library;

namespace Banking_App {
    internal static class BankUI {
        public static Bank bank = Bank.CreateBankInstance();
        /// <summary>
        ///  The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main() {
            // To customize application configuration such as set high DPI settings or default font,
            // see https://aka.ms/applicationconfiguration.
            ApplicationConfiguration.Initialize();
            Application.Run(BankForm.GetBankForm());
        }
    }
}