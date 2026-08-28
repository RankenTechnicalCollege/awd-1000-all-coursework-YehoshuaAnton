using Bank_Library;

namespace Banking_App {
    public partial class NewClientForm : Form {
        //
        public event EventHandler NewClientFormClosed;

        //
        public Tuple<string, string, AccountType, string> NewClientInfo { get; private set; }

        //
        public NewClientForm() => InitializeComponent();

        //
        private void ConfirmButton_Click(object? sender, EventArgs e) {
            if (firstNameTextBox.Text != "" && lastNameTextBox.Text != "" && accountTypeComboBox.SelectedItem != null && accountNameTextBox.Text != "") {
                NewClientInfo = new Tuple<string, string, AccountType, string>(firstNameTextBox.Text, lastNameTextBox.Text, (AccountType)Enum.Parse(typeof(AccountType), Convert.ToString(accountTypeComboBox.SelectedItem)), accountNameTextBox.Text);
                DialogResult = DialogResult.OK;
                OnNewClientFormClosed();
                Close();
            }
        }

        //
        private void CancelButton_Click(object? sender, EventArgs e) {
            DialogResult = DialogResult.Cancel;
            OnNewClientFormClosed();
            Close();
        }

        //
        private void NewClientForm_FormClosed(object? sender, FormClosedEventArgs e) {
            DialogResult = DialogResult.None;
            OnNewClientFormClosed();
            Close();
        }

        //
        protected virtual void OnNewClientFormClosed() {
            NewClientFormClosed?.Invoke(this, EventArgs.Empty);
        }
    }
}
