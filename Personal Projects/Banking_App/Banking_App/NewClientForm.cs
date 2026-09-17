using Bank_Library;

namespace Banking_App {
    public partial class NewClientForm : Form {

        public event EventHandler NewClientFormClosed;

        // Constructor for the "NewClientForm"
        public Tuple<string, string, AccountType, string> NewClientInfo { get; private set; }

        // Create a new instance of the new client form
        public NewClientForm() => InitializeComponent();

        // When "Confirm" is clicked, parse the data from the form and create a new client
        private void ConfirmButton_Click(object? sender, EventArgs e) {
            // If the "First Name" and "Last Name" boxes have valid entries, an account type is selected for the inital account, and the account has a valid name...
            if (firstNameTextBox.Text != "" && lastNameTextBox.Text != "" && accountTypeComboBox.SelectedItem != null && accountNameTextBox.Text != "") {
                // Set the constructor's variable "NewClientInfo" <string, string, AccountType, string> as the client's first name, last name, initial account type, and initial account name
                NewClientInfo = new Tuple<string, string, AccountType, string>(firstNameTextBox.Text, lastNameTextBox.Text, Enum.Parse<AccountType>(Convert.ToString(accountTypeComboBox.SelectedItem)), accountNameTextBox.Text);
                DialogResult = DialogResult.OK;
                OnNewClientFormClosed();
                Close();
            }
        }

        // When "Cancel" is clicked, close the form without and discard the information
        private void CancelButton_Click(object? sender, EventArgs e) {
            DialogResult = DialogResult.Cancel;
            Close();
        }

        // When the form is closed without clicking "Cancel", close the form and discard the information
        private void NewClientForm_FormClosed(object? sender, FormClosedEventArgs e) {
            DialogResult = DialogResult.None;
            Close();
        }

        //
        protected virtual void OnNewClientFormClosed() {
            NewClientFormClosed?.Invoke(this, EventArgs.Empty);
        }
    }
}
