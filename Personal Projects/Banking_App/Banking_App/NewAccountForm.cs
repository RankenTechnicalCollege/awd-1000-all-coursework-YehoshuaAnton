using Bank_Library;

namespace Banking_App {
    public partial class NewAccountForm : Form {
        //
        public event EventHandler NewAccountFormClosed;

        //
        public Tuple<AccountType, string> NewAccountInfo { get; private set; }

        //
        public NewAccountForm() => InitializeComponent();

        //
        private void ConfirmButton_Click(object? sender, EventArgs e) {
            if (accountTypeComboBox.SelectedItem != null && accountNameTextBox.Text != "") {
                NewAccountInfo = new Tuple<AccountType, string>((AccountType)Enum.Parse(typeof(AccountType), Convert.ToString(accountTypeComboBox.SelectedItem)), accountNameTextBox.Text);
                DialogResult = DialogResult.OK;
                OnNewAccountFormClosed();
                Close();
            }
        }

        //
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
