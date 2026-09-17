using Bank_Library;

namespace Banking_App {
    public partial class TransactionForm : Form {

        public event EventHandler TransactionFormClosed;

        // Create a new instance of the transaction form
        public TransactionForm() => InitializeComponent();

        // When "Confirm" is clicked, parse the data from the form and make a new transaction for the active account
        private void ConfirmButton_Click(object? sender, EventArgs e) {
            // As long as the "description" and "amount" text boxes aren't empty and the "amount" text box returns a valid decimal...
            if (descriptionTextBox.Text != "" && amountTextBox.Text != "" && decimal.TryParse(amountTextBox.Text.Trim(), out decimal amount)) {
                DialogResult = DialogResult.OK;
                // Check whether the text of the button clicked says "Deposit Form" of "Withdrawal Form" and deposit or withdraw accordingly then save it to a boolean
                bool transaction = Text == "Deposit Form" ? (BankForm.GetBankForm().accountComboBox.SelectedItem as Account).Deposit(descriptionTextBox.Text, amount, dateTimePicker.Value) :
                (BankForm.GetBankForm().accountComboBox.SelectedItem as Account).Withdraw(descriptionTextBox.Text, amount, dateTimePicker.Value);
                // Pop a message box that says the status of the transaction
                MessageBox.Show($"Your transaction was{(!transaction ? " not " : " ")}completed.");
                OnTransactionFormClosed();
                Close();
            }
        }

        // When "Cancel" is clicked, close the form without and discard the information
        private void CancelButton_Click(object? sender, EventArgs e) {
            DialogResult = DialogResult.Cancel;
            Close();
        }

        //
        protected virtual void OnTransactionFormClosed() {
            TransactionFormClosed?.Invoke(this, EventArgs.Empty);
        }
    }
}
