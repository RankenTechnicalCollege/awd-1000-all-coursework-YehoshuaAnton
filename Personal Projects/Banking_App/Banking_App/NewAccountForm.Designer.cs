namespace Banking_App {
    partial class NewAccountForm {
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
            confirmButton = new Button();
            cancelButton = new Button();
            accountNameLabel = new Label();
            accountTypeLabel = new Label();
            accountNameTextBox = new TextBox();
            accountTypeComboBox = new ComboBox();
            SuspendLayout();
            // 
            // confirmButton
            // 
            confirmButton.Location = new Point(184, 100);
            confirmButton.Name = "confirmButton";
            confirmButton.Size = new Size(75, 23);
            confirmButton.TabIndex = 6;
            confirmButton.Text = "Confirm";
            confirmButton.UseVisualStyleBackColor = true;
            confirmButton.Click += ConfirmButton_Click;
            // 
            // cancelButton
            // 
            cancelButton.Location = new Point(68, 100);
            cancelButton.Name = "cancelButton";
            cancelButton.Size = new Size(75, 23);
            cancelButton.TabIndex = 5;
            cancelButton.Text = "Cancel";
            cancelButton.UseVisualStyleBackColor = true;
            cancelButton.Click += CancelButton_Click;
            // 
            // accountNameLabel
            // 
            accountNameLabel.AutoSize = true;
            accountNameLabel.Location = new Point(12, 57);
            accountNameLabel.Name = "accountNameLabel";
            accountNameLabel.Size = new Size(90, 15);
            accountNameLabel.TabIndex = 3;
            accountNameLabel.Text = "Account Name:";
            // 
            // accountTypeLabel
            // 
            accountTypeLabel.AutoSize = true;
            accountTypeLabel.Location = new Point(20, 15);
            accountTypeLabel.Name = "accountTypeLabel";
            accountTypeLabel.Size = new Size(82, 15);
            accountTypeLabel.TabIndex = 1;
            accountTypeLabel.Text = "Account Type:";
            // 
            // accountNameTextBox
            // 
            accountNameTextBox.Location = new Point(105, 54);
            accountNameTextBox.Name = "accountNameTextBox";
            accountNameTextBox.Size = new Size(205, 23);
            accountNameTextBox.TabIndex = 4;
            // 
            // accountTypeComboBox
            // 
            accountTypeComboBox.FormattingEnabled = true;
            accountTypeComboBox.ItemHeight = 15;
            accountTypeComboBox.Items.AddRange(new object[] { "Savings", "Checking" });
            accountTypeComboBox.Location = new Point(108, 12);
            accountTypeComboBox.Name = "accountTypeComboBox";
            accountTypeComboBox.Size = new Size(202, 23);
            accountTypeComboBox.TabIndex = 2;
            // 
            // NewAccountForm
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(322, 135);
            Controls.Add(confirmButton);
            Controls.Add(cancelButton);
            Controls.Add(accountNameLabel);
            Controls.Add(accountTypeLabel);
            Controls.Add(accountNameTextBox);
            Controls.Add(accountTypeComboBox);
            Name = "NewAccountForm";
            Text = "New Account Form";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Button confirmButton;
        private Button cancelButton;
        private Label accountNameLabel;
        private Label accountTypeLabel;
        private TextBox accountNameTextBox;
        private ComboBox accountTypeComboBox;
    }
}