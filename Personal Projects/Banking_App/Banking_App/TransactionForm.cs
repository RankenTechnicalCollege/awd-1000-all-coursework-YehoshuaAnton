using Bank_Library;

namespace Banking_App {
    public partial class TransactionForm : Form {

        public event EventHandler TransactionFormClosed;

        //
        public TransactionForm() => InitializeComponent();

        //
        private void ConfirmButton_Click(object? sender, EventArgs e) {
            if (descriptionTextBox.Text != "" && amountTextBox.Text != "" && decimal.TryParse(amountTextBox.Text.Trim(), out decimal amount)) {
                DialogResult = DialogResult.OK;
                bool transaction = Text == "Deposit Form" ? (BankForm.GetBankForm().accountComboBox.SelectedItem as Account).Deposit(descriptionTextBox.Text, amount, dateTimePicker.Value) :
                (BankForm.GetBankForm().accountComboBox.SelectedItem as Account).Withdraw(descriptionTextBox.Text, amount, dateTimePicker.Value);
                OnTransactionFormClosed();
                Close();
                MessageBox.Show(!transaction ? "Your transaction was not completed." : "Your transaction was completed.");
            }
        }

        //
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
