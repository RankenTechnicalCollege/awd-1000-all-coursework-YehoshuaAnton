using Bank_Library;

namespace Banking_App {
    public partial class NewAccountForm : Form {
        
        public event EventHandler NewAccountFormClosed;

        // Constructor of the "NewAccountForm"
        public Tuple<AccountType, string> NewAccountInfo { get; private set; }

        // Create a new instance of the new account form
        public NewAccountForm() => InitializeComponent();

        // When "Confirm" is clicked, parse the data from the form and create a new account for the active client
        private void ConfirmButton_Click(object? sender, EventArgs e) {
            // If there is account type selected and the "Account Name" box has a valid entry...
            if (accountTypeComboBox.SelectedItem != null && accountNameTextBox.Text != "") {
                // Set the constructor's variable "NewAccountInfo" <AccountType, string> as the selected account type and the account name
                NewAccountInfo = new Tuple<AccountType, string>(Enum.Parse<AccountType>(Convert.ToString(accountTypeComboBox.SelectedItem)), accountNameTextBox.Text);
                DialogResult = DialogResult.OK;
                OnNewAccountFormClosed();
                Close();
            }
        }

        // When "Cancel" is clicked, close the form and discard the information
        private void CancelButton_Click(object sender, EventArgs e) {
            DialogResult = DialogResult.Cancel;
            Close();
        }

        //
        protected virtual void OnNewAccountFormClosed() {
            NewAccountFormClosed?.Invoke(this, EventArgs.Empty);
        }
    }
}
