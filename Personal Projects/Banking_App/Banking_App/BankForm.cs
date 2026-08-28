using Bank_Library;
using System.Text;

namespace Banking_App {
    public partial class BankForm : Form {
        private static BankForm? bankForm;
        private NewClientForm? newClientForm;
        private NewAccountForm? newAccountForm;
        private TransactionForm? transactionForm;
        private Client? currentClient;
        private Account? currentAccount;

        //
        private BankForm() => InitializeComponent();

        //
        public static BankForm? GetBankForm() {
            bankForm ??= new BankForm();
            return bankForm;
        }

        //
        private void AddClientButton_Click(object? sender, EventArgs e) {
            currentClient = clientsComboBox.SelectedItem as Client;
            currentAccount = accountComboBox.SelectedItem as Account;
            clientsComboBox.Items.Clear();
            accountComboBox.Items.Clear();
            balanceTextBox.Text = "";
            transactionsRTB.Text = "";
            newClientForm = new NewClientForm();
            newClientForm.NewClientFormClosed += AddNewClient;
            newClientForm.ShowDialog();
        }

        //
        private void AddNewClient(object? sender, EventArgs e) {
            if (newClientForm.DialogResult == DialogResult.OK) {
                BankUI.bank.AddClient(newClientForm.NewClientInfo.Item1, newClientForm.NewClientInfo.Item2, newClientForm.NewClientInfo.Item3, newClientForm.NewClientInfo.Item4);
                clientsComboBox.Items.AddRange(BankUI.bank.clients.Where(x => !clientsComboBox.Items.Contains(x)).ToArray());
                clientsComboBox.SelectedItem = BankUI.bank.clients.Last(); // Will automatically select new client when made
                accountComboBox.SelectedItem = (clientsComboBox.SelectedItem as Client).accounts[0]; // Will automatically select his first account
            }
            else {
                clientsComboBox.Items.AddRange(BankUI.bank.clients.Where(x => !clientsComboBox.Items.Contains(x)).ToArray()); // Won't select anyone, but the list will still be there
            }
            //else {                     // Even if the result was OK, goes to the else
            //    clientsComboBox.Items.AddRange(BankUI.bank.clients.Where(x => !clientsComboBox.Items.Contains(x)).ToArray());
            //    clientsComboBox.SelectedItem = currentClient; // Will go back to the last client if cancelled
            //    accountComboBox.SelectedItem = currentAccount; // Will go back to the last account if cancelled
            //}
        }

        //
        private void ClientSelected_ValueChanged(object? sender, EventArgs e) {
            balanceTextBox.Text = "";
            transactionsRTB.Text = "";
            accountComboBox.Items.Clear();
            accountComboBox.Items.AddRange((clientsComboBox.SelectedItem as Client).accounts.Where(x => !accountComboBox.Items.Contains(x)).ToArray());
            accountComboBox.SelectedItem = (clientsComboBox.SelectedItem as Client).accounts[0]; // Will automatically select his first account
        }
        
        //
        private void AddAccountButton_Click(object? sender, EventArgs e) {
            if (clientsComboBox.SelectedItem != null) {
                newAccountForm = new NewAccountForm();
                newAccountForm.NewAccountFormClosed += AddNewAccount;
                newAccountForm.ShowDialog();
            }
        }

        //
        private void AddNewAccount(object? sender, EventArgs e) {
            if (newAccountForm.DialogResult == DialogResult.OK) {
                (clientsComboBox.SelectedItem as Client).AddAccount(newAccountForm.NewAccountInfo.Item1, newAccountForm.NewAccountInfo.Item2);
                accountComboBox.Items.AddRange((clientsComboBox.SelectedItem as Client).accounts.Where(x => !accountComboBox.Items.Contains(x)).ToArray());
                accountComboBox.SelectedItem = (clientsComboBox.SelectedItem as Client).accounts.Last(); // Will automaticaaly select new account when made
            }
        }

        //
        private void AccountSelected_ValueChanged(object? sender, EventArgs e) {
            balanceTextBox.Text = $"{(accountComboBox.SelectedItem as Account).Balance:c}";
            transactionsRTB.Text = PrintTransactionList();
        }

        //
        private string PrintTransactionList() {
            StringBuilder transactionList = new();
            foreach (var transaction in (accountComboBox.SelectedItem as Account).transactions) {
                transactionList.AppendLine(transaction.ToString());
            }
            return transactionList.ToString();
        }

        //
        private void DepositButton_Click(object sender, EventArgs e) {
            if (accountComboBox.SelectedItem != null) {
                transactionForm = new TransactionForm {
                    Text = "Deposit Form"
                };
                transactionForm.TransactionFormClosed += AddNewTransaction;
                transactionForm.ShowDialog();
            }
        }

        //
        private void WithdrawButton_Click(object? sender, EventArgs e) {
            if (accountComboBox.SelectedItem != null) {
                transactionForm = new TransactionForm {
                    Text = "Withdrawl Form"
                };
                transactionForm.TransactionFormClosed += AddNewTransaction;
                transactionForm.ShowDialog();
            }
        }

        //
        private void AddNewTransaction(object? sender, EventArgs e) {
            if (transactionForm.DialogResult == DialogResult.OK) {
                balanceTextBox.Text = $"{(accountComboBox.SelectedItem as Account).Balance:c}";
                transactionsRTB.Text = PrintTransactionList();
            }
        }

        //
        private void SaveButton_Click(object? sender, EventArgs e) {
            SaveFileDialog saveFileDialog = new() {
                DefaultExt = "banking",
                AddExtension = true,
                Filter = "Banking File | *.banking"
            };
            if (saveFileDialog.ShowDialog() == DialogResult.OK) {
                Bank.Save(saveFileDialog.FileName);
            }
        }

        //
        private void LoadButton_Click(object? sender, EventArgs e) {
            OpenFileDialog openFileDialog = new() {
                Filter = "Banking File | *.banking| All Files | *.*"
            };
            if (openFileDialog.ShowDialog() == DialogResult.OK) {
                Bank.Load(openFileDialog.FileName);
                clientsComboBox.Items.AddRange(BankUI.bank.clients.Where(x => !clientsComboBox.Items.Contains(x)).ToArray());
                clientsComboBox.SelectedItem = clientsComboBox.Items[0]; // Picks the first client on load
                accountComboBox.SelectedItem = accountComboBox.Items[0]; // Picks the first account on load
            }
        }
    }
}
