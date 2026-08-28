namespace Banking_App
{
    partial class BankForm
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            balanceLabel = new Label();
            accountLabel = new Label();
            accountComboBox = new ComboBox();
            clientsComboBox = new ComboBox();
            transactionsRTB = new RichTextBox();
            depositButton = new Button();
            withdrawButton = new Button();
            saveButton = new Button();
            balanceTextBox = new TextBox();
            addAccountButton = new Button();
            addClientButton = new Button();
            loadButton = new Button();
            SuspendLayout();
            // 
            // balanceLabel
            // 
            balanceLabel.AutoSize = true;
            balanceLabel.Font = new Font("Segoe UI Semibold", 15.75F, FontStyle.Bold, GraphicsUnit.Point, 0);
            balanceLabel.Location = new Point(295, 69);
            balanceLabel.Name = "balanceLabel";
            balanceLabel.Size = new Size(91, 30);
            balanceLabel.TabIndex = 6;
            balanceLabel.Text = "Balance:";
            balanceLabel.TextAlign = ContentAlignment.MiddleCenter;
            // 
            // accountLabel
            // 
            accountLabel.AutoSize = true;
            accountLabel.Font = new Font("Segoe UI Semibold", 18F, FontStyle.Bold, GraphicsUnit.Point, 0);
            accountLabel.Location = new Point(277, 13);
            accountLabel.Name = "accountLabel";
            accountLabel.Size = new Size(109, 32);
            accountLabel.TabIndex = 4;
            accountLabel.Text = "Account:";
            accountLabel.TextAlign = ContentAlignment.MiddleCenter;
            // 
            // accountComboBox
            // 
            accountComboBox.DropDownStyle = ComboBoxStyle.DropDownList;
            accountComboBox.Font = new Font("Segoe UI Semibold", 15.75F, FontStyle.Bold, GraphicsUnit.Point, 0);
            accountComboBox.FormattingEnabled = true;
            accountComboBox.Location = new Point(392, 10);
            accountComboBox.Name = "accountComboBox";
            accountComboBox.Size = new Size(231, 38);
            accountComboBox.TabIndex = 5;
            accountComboBox.SelectedValueChanged += AccountSelected_ValueChanged;
            // 
            // clientsComboBox
            // 
            clientsComboBox.DropDownStyle = ComboBoxStyle.DropDownList;
            clientsComboBox.Font = new Font("Segoe UI Semibold", 12F, FontStyle.Bold, GraphicsUnit.Point, 0);
            clientsComboBox.FormattingEnabled = true;
            clientsComboBox.Location = new Point(14, 101);
            clientsComboBox.Name = "clientsComboBox";
            clientsComboBox.Size = new Size(136, 29);
            clientsComboBox.TabIndex = 2;
            clientsComboBox.SelectedValueChanged += ClientSelected_ValueChanged;
            // 
            // transactionsRTB
            // 
            transactionsRTB.Font = new Font("Segoe UI", 12F);
            transactionsRTB.Location = new Point(171, 116);
            transactionsRTB.Name = "transactionsRTB";
            transactionsRTB.ReadOnly = true;
            transactionsRTB.Size = new Size(452, 280);
            transactionsRTB.TabIndex = 8;
            transactionsRTB.Text = "";
            // 
            // depositButton
            // 
            depositButton.Font = new Font("Segoe UI Semibold", 12F, FontStyle.Bold, GraphicsUnit.Point, 0);
            depositButton.Location = new Point(659, 116);
            depositButton.Name = "depositButton";
            depositButton.Size = new Size(91, 40);
            depositButton.TabIndex = 9;
            depositButton.Text = "Deposit";
            depositButton.UseVisualStyleBackColor = true;
            depositButton.Click += DepositButton_Click;
            // 
            // withdrawButton
            // 
            withdrawButton.Font = new Font("Segoe UI Semibold", 12F, FontStyle.Bold, GraphicsUnit.Point, 0);
            withdrawButton.Location = new Point(659, 162);
            withdrawButton.Name = "withdrawButton";
            withdrawButton.Size = new Size(91, 36);
            withdrawButton.TabIndex = 10;
            withdrawButton.Text = "Withdraw";
            withdrawButton.UseVisualStyleBackColor = true;
            withdrawButton.Click += WithdrawButton_Click;
            // 
            // saveButton
            // 
            saveButton.Font = new Font("Segoe UI Semibold", 15.75F, FontStyle.Bold, GraphicsUnit.Point, 0);
            saveButton.Location = new Point(659, 312);
            saveButton.Name = "saveButton";
            saveButton.Size = new Size(91, 39);
            saveButton.TabIndex = 11;
            saveButton.Text = "Save";
            saveButton.UseVisualStyleBackColor = true;
            saveButton.Click += SaveButton_Click;
            // 
            // balanceTextBox
            // 
            balanceTextBox.Font = new Font("Segoe UI Semibold", 15.75F, FontStyle.Bold, GraphicsUnit.Point, 0);
            balanceTextBox.Location = new Point(392, 66);
            balanceTextBox.Name = "balanceTextBox";
            balanceTextBox.ReadOnly = true;
            balanceTextBox.Size = new Size(187, 35);
            balanceTextBox.TabIndex = 7;
            // 
            // addAccountButton
            // 
            addAccountButton.Font = new Font("Segoe UI Semibold", 15.75F, FontStyle.Bold, GraphicsUnit.Point, 0);
            addAccountButton.Location = new Point(12, 315);
            addAccountButton.Name = "addAccountButton";
            addAccountButton.Size = new Size(104, 81);
            addAccountButton.TabIndex = 3;
            addAccountButton.Text = "Add\r\nAccount";
            addAccountButton.UseVisualStyleBackColor = true;
            addAccountButton.Click += AddAccountButton_Click;
            // 
            // addClientButton
            // 
            addClientButton.Font = new Font("Segoe UI Semibold", 15.75F, FontStyle.Bold, GraphicsUnit.Point, 0);
            addClientButton.Location = new Point(12, 16);
            addClientButton.Name = "addClientButton";
            addClientButton.Size = new Size(104, 73);
            addClientButton.TabIndex = 1;
            addClientButton.Text = "Add\r\nClient";
            addClientButton.UseVisualStyleBackColor = true;
            addClientButton.Click += AddClientButton_Click;
            // 
            // loadButton
            // 
            loadButton.Font = new Font("Segoe UI Semibold", 15.75F, FontStyle.Bold, GraphicsUnit.Point, 0);
            loadButton.Location = new Point(659, 357);
            loadButton.Name = "loadButton";
            loadButton.Size = new Size(91, 39);
            loadButton.TabIndex = 12;
            loadButton.Text = "Load";
            loadButton.UseVisualStyleBackColor = true;
            loadButton.Click += LoadButton_Click;
            // 
            // BankForm
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(loadButton);
            Controls.Add(clientsComboBox);
            Controls.Add(addClientButton);
            Controls.Add(addAccountButton);
            Controls.Add(balanceTextBox);
            Controls.Add(saveButton);
            Controls.Add(withdrawButton);
            Controls.Add(depositButton);
            Controls.Add(transactionsRTB);
            Controls.Add(accountComboBox);
            Controls.Add(accountLabel);
            Controls.Add(balanceLabel);
            Name = "BankForm";
            Text = "Banking App";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label balanceLabel;
        private Label accountLabel;
        public ComboBox accountComboBox;
        private RichTextBox transactionsRTB;
        private Button depositButton;
        private Button withdrawButton;
        private Button saveButton;
        private TextBox balanceTextBox;
        private Button addAccountButton;
        private Button addClientButton;
        private ComboBox clientsComboBox;
        private Button loadButton;
    } 
}
