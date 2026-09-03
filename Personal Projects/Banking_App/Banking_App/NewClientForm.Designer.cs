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
            accountTypeComboBox = new ComboBox();
            accountNameTextBox = new TextBox();
            accountTypeLabel = new Label();
            accountNameLabel = new Label();
            cancelButton = new Button();
            confirmButton = new Button();
            SuspendLayout();
            // 
            // firstNameTextBox
            // 
            firstNameTextBox.Location = new Point(105, 14);
            firstNameTextBox.Name = "firstNameTextBox";
            firstNameTextBox.Size = new Size(202, 23);
            firstNameTextBox.TabIndex = 2;
            // 
            // lastNameTextBox
            // 
            lastNameTextBox.Location = new Point(105, 48);
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
            // accountTypeComboBox
            // 
            accountTypeComboBox.FormattingEnabled = true;
            accountTypeComboBox.ItemHeight = 15;
            accountTypeComboBox.Items.AddRange(new object[] { "Savings", "Checking" });
            accountTypeComboBox.Location = new Point(105, 88);
            accountTypeComboBox.Name = "accountTypeComboBox";
            accountTypeComboBox.Size = new Size(202, 23);
            accountTypeComboBox.TabIndex = 10;
            // 
            // accountNameTextBox
            // 
            accountNameTextBox.Location = new Point(105, 129);
            accountNameTextBox.Name = "accountNameTextBox";
            accountNameTextBox.Size = new Size(202, 23);
            accountNameTextBox.TabIndex = 14;
            // 
            // accountTypeLabel
            // 
            accountTypeLabel.AutoSize = true;
            accountTypeLabel.Location = new Point(19, 91);
            accountTypeLabel.Name = "accountTypeLabel";
            accountTypeLabel.Size = new Size(83, 15);
            accountTypeLabel.TabIndex = 11;
            accountTypeLabel.Text = "Account Type:";
            // 
            // accountNameLabel
            // 
            accountNameLabel.AutoSize = true;
            accountNameLabel.Location = new Point(12, 132);
            accountNameLabel.Name = "accountNameLabel";
            accountNameLabel.Size = new Size(90, 15);
            accountNameLabel.TabIndex = 13;
            accountNameLabel.Text = "Account Name:";
            // 
            // cancelButton
            // 
            cancelButton.Location = new Point(183, 172);
            cancelButton.Name = "cancelButton";
            cancelButton.Size = new Size(75, 23);
            cancelButton.TabIndex = 15;
            cancelButton.Text = "Cancel";
            cancelButton.UseVisualStyleBackColor = true;
            cancelButton.Click += CancelButton_Click;
            // 
            // confirmButton
            // 
            confirmButton.Location = new Point(65, 172);
            confirmButton.Name = "confirmButton";
            confirmButton.Size = new Size(75, 23);
            confirmButton.TabIndex = 16;
            confirmButton.Text = "Confirm";
            confirmButton.UseVisualStyleBackColor = true;
            confirmButton.Click += ConfirmButton_Click;
            // 
            // NewClientForm
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(322, 205);
            Controls.Add(confirmButton);
            Controls.Add(cancelButton);
            Controls.Add(accountNameLabel);
            Controls.Add(accountTypeLabel);
            Controls.Add(accountNameTextBox);
            Controls.Add(accountTypeComboBox);
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
        private ComboBox accountTypeComboBox;
        private TextBox accountNameTextBox;
        private Label accountTypeLabel;
        private Label accountNameLabel;
        private Button cancelButton;
        private Button confirmButton;
    }
}