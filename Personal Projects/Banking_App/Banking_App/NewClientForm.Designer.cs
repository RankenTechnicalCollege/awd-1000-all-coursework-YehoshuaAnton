namespace Banking_App {
    partial class NewClientForm {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing) {
            if (disposing && (components != null)) {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent() {
            firstNameTextBox = new TextBox();
            lastNameTextBox = new TextBox();
            firstNameLabel = new Label();
            lastNameLabel = new Label();
            emailLabel = new Label();
            emailTextBox = new TextBox();
            accountTypeComboBox = new ComboBox();
            accountNameTextBox = new TextBox();
            accountTypeLabel = new Label();
            accountNameLabel = new Label();
            ssnLabel = new Label();
            ssnTextBox = new TextBox();
            cancelButton = new Button();
            confirmButton = new Button();
            phoneNumberLabel = new Label();
            phoneNumberTextBox = new TextBox();
            SuspendLayout();
            // 
            // firstNameTextBox
            // 
            firstNameTextBox.Location = new Point(108, 14);
            firstNameTextBox.Name = "firstNameTextBox";
            firstNameTextBox.Size = new Size(202, 23);
            firstNameTextBox.TabIndex = 2;
            // 
            // lastNameTextBox
            // 
            lastNameTextBox.Location = new Point(108, 48);
            lastNameTextBox.Name = "lastNameTextBox";
            lastNameTextBox.Size = new Size(202, 23);
            lastNameTextBox.TabIndex = 4;
            // 
            // firstNameLabel
            // 
            firstNameLabel.AutoSize = true;
            firstNameLabel.Location = new Point(35, 17);
            firstNameLabel.Name = "firstNameLabel";
            firstNameLabel.Size = new Size(67, 15);
            firstNameLabel.TabIndex = 1;
            firstNameLabel.Text = "First Name:";
            firstNameLabel.TextAlign = ContentAlignment.MiddleCenter;
            // 
            // lastNameLabel
            // 
            lastNameLabel.AutoSize = true;
            lastNameLabel.Location = new Point(36, 51);
            lastNameLabel.Name = "lastNameLabel";
            lastNameLabel.Size = new Size(66, 15);
            lastNameLabel.TabIndex = 3;
            lastNameLabel.Text = "Last Name:";
            lastNameLabel.TextAlign = ContentAlignment.MiddleCenter;
            // 
            // emailLabel
            // 
            emailLabel.AutoSize = true;
            emailLabel.Location = new Point(63, 89);
            emailLabel.Name = "emailLabel";
            emailLabel.Size = new Size(39, 15);
            emailLabel.TabIndex = 5;
            emailLabel.Text = "Email:";
            emailLabel.TextAlign = ContentAlignment.MiddleCenter;
            // 
            // emailTextBox
            // 
            emailTextBox.Location = new Point(108, 86);
            emailTextBox.Name = "emailTextBox";
            emailTextBox.Size = new Size(202, 23);
            emailTextBox.TabIndex = 6;
            // 
            // accountTypeComboBox
            // 
            accountTypeComboBox.FormattingEnabled = true;
            accountTypeComboBox.ItemHeight = 15;
            accountTypeComboBox.Items.AddRange(new object[] { "Savings", "Checking" });
            accountTypeComboBox.Location = new Point(108, 194);
            accountTypeComboBox.Name = "accountTypeComboBox";
            accountTypeComboBox.Size = new Size(202, 23);
            accountTypeComboBox.TabIndex = 10;
            // 
            // accountNameTextBox
            // 
            accountNameTextBox.Location = new Point(105, 236);
            accountNameTextBox.Name = "accountNameTextBox";
            accountNameTextBox.Size = new Size(205, 23);
            accountNameTextBox.TabIndex = 14;
            // 
            // accountTypeLabel
            // 
            accountTypeLabel.AutoSize = true;
            accountTypeLabel.Location = new Point(20, 197);
            accountTypeLabel.Name = "accountTypeLabel";
            accountTypeLabel.Size = new Size(82, 15);
            accountTypeLabel.TabIndex = 11;
            accountTypeLabel.Text = "Account Type:";
            // 
            // accountNameLabel
            // 
            accountNameLabel.AutoSize = true;
            accountNameLabel.Location = new Point(12, 239);
            accountNameLabel.Name = "accountNameLabel";
            accountNameLabel.Size = new Size(90, 15);
            accountNameLabel.TabIndex = 13;
            accountNameLabel.Text = "Account Name:";
            // 
            // ssnLabel
            // 
            ssnLabel.AutoSize = true;
            ssnLabel.Location = new Point(71, 158);
            ssnLabel.Name = "ssnLabel";
            ssnLabel.Size = new Size(31, 15);
            ssnLabel.TabIndex = 9;
            ssnLabel.Text = "SSN:";
            // 
            // ssnTextBox
            // 
            ssnTextBox.Location = new Point(108, 155);
            ssnTextBox.Name = "ssnTextBox";
            ssnTextBox.Size = new Size(202, 23);
            ssnTextBox.TabIndex = 10;
            // 
            // cancelButton
            // 
            cancelButton.Location = new Point(63, 277);
            cancelButton.Name = "cancelButton";
            cancelButton.Size = new Size(75, 23);
            cancelButton.TabIndex = 15;
            cancelButton.Text = "Cancel";
            cancelButton.UseVisualStyleBackColor = true;
            cancelButton.Click += CancelButton_Click;
            // 
            // confirmButton
            // 
            confirmButton.Location = new Point(179, 277);
            confirmButton.Name = "confirmButton";
            confirmButton.Size = new Size(75, 23);
            confirmButton.TabIndex = 16;
            confirmButton.Text = "Confirm";
            confirmButton.UseVisualStyleBackColor = true;
            confirmButton.Click += ConfirmButton_Click;
            // 
            // phoneNumberLabel
            // 
            phoneNumberLabel.AutoSize = true;
            phoneNumberLabel.Location = new Point(14, 122);
            phoneNumberLabel.Name = "phoneNumberLabel";
            phoneNumberLabel.Size = new Size(88, 15);
            phoneNumberLabel.TabIndex = 17;
            phoneNumberLabel.Text = "Phone Number";
            // 
            // phoneNumberTextBox
            // 
            phoneNumberTextBox.Location = new Point(108, 122);
            phoneNumberTextBox.Name = "phoneNumberTextBox";
            phoneNumberTextBox.Size = new Size(202, 23);
            phoneNumberTextBox.TabIndex = 8;
            // 
            // NewClientForm
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(322, 309);
            Controls.Add(phoneNumberTextBox);
            Controls.Add(phoneNumberLabel);
            Controls.Add(confirmButton);
            Controls.Add(cancelButton);
            Controls.Add(ssnTextBox);
            Controls.Add(ssnLabel);
            Controls.Add(accountNameLabel);
            Controls.Add(accountTypeLabel);
            Controls.Add(accountNameTextBox);
            Controls.Add(accountTypeComboBox);
            Controls.Add(emailTextBox);
            Controls.Add(emailLabel);
            Controls.Add(lastNameLabel);
            Controls.Add(firstNameLabel);
            Controls.Add(lastNameTextBox);
            Controls.Add(firstNameTextBox);
            Name = "NewClientForm";
            Text = "New Client Form";
            FormClosed += NewClientForm_FormClosed;
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private TextBox firstNameTextBox;
        private TextBox lastNameTextBox;
        private Label firstNameLabel;
        private Label lastNameLabel;
        private Label emailLabel;
        private TextBox emailTextBox;
        private ComboBox accountTypeComboBox;
        private TextBox accountNameTextBox;
        private Label accountTypeLabel;
        private Label accountNameLabel;
        private Label ssnLabel;
        private TextBox ssnTextBox;
        private Button cancelButton;
        private Button confirmButton;
        private Label phoneNumberLabel;
        private TextBox phoneNumberTextBox;
    }
}