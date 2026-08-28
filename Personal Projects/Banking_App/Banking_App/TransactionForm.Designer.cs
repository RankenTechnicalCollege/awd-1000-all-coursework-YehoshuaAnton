namespace Banking_App {
    partial class TransactionForm {
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
            amountLabel = new Label();
            amountTextBox = new TextBox();
            descriptionTextBox = new TextBox();
            descriptionLabel = new Label();
            cancelButton = new Button();
            confirmButton = new Button();
            dateLabel = new Label();
            dateTimePicker = new DateTimePicker();
            SuspendLayout();
            // 
            // amountLabel
            // 
            amountLabel.AutoSize = true;
            amountLabel.Font = new Font("Segoe UI Semibold", 9.75F, FontStyle.Bold, GraphicsUnit.Point, 0);
            amountLabel.Location = new Point(46, 53);
            amountLabel.Name = "amountLabel";
            amountLabel.Size = new Size(72, 17);
            amountLabel.TabIndex = 3;
            amountLabel.Text = "Amount: $";
            amountLabel.TextAlign = ContentAlignment.MiddleCenter;
            // 
            // amountTextBox
            // 
            amountTextBox.Location = new Point(114, 52);
            amountTextBox.Name = "amountTextBox";
            amountTextBox.Size = new Size(196, 23);
            amountTextBox.TabIndex = 4;
            // 
            // descriptionTextBox
            // 
            descriptionTextBox.Location = new Point(105, 17);
            descriptionTextBox.Name = "descriptionTextBox";
            descriptionTextBox.Size = new Size(205, 23);
            descriptionTextBox.TabIndex = 2;
            // 
            // descriptionLabel
            // 
            descriptionLabel.AutoSize = true;
            descriptionLabel.Font = new Font("Segoe UI Semibold", 9.75F, FontStyle.Bold, GraphicsUnit.Point, 0);
            descriptionLabel.Location = new Point(29, 20);
            descriptionLabel.Name = "descriptionLabel";
            descriptionLabel.Size = new Size(79, 17);
            descriptionLabel.TabIndex = 1;
            descriptionLabel.Text = "Description:";
            descriptionLabel.TextAlign = ContentAlignment.MiddleCenter;
            // 
            // cancelButton
            // 
            cancelButton.Font = new Font("Segoe UI Semibold", 9.75F, FontStyle.Bold, GraphicsUnit.Point, 0);
            cancelButton.Location = new Point(46, 123);
            cancelButton.Name = "cancelButton";
            cancelButton.Size = new Size(75, 24);
            cancelButton.TabIndex = 7;
            cancelButton.Text = "Cancel";
            cancelButton.UseVisualStyleBackColor = true;
            cancelButton.Click += CancelButton_Click;
            // 
            // confirmButton
            // 
            confirmButton.Font = new Font("Segoe UI Semibold", 9.75F, FontStyle.Bold, GraphicsUnit.Point, 0);
            confirmButton.Location = new Point(194, 123);
            confirmButton.Name = "confirmButton";
            confirmButton.Size = new Size(75, 24);
            confirmButton.TabIndex = 8;
            confirmButton.Text = "Confirm";
            confirmButton.UseVisualStyleBackColor = true;
            confirmButton.Click += ConfirmButton_Click;
            // 
            // dateLabel
            // 
            dateLabel.AutoSize = true;
            dateLabel.Font = new Font("Segoe UI Semibold", 9.75F, FontStyle.Bold, GraphicsUnit.Point, 0);
            dateLabel.Location = new Point(69, 90);
            dateLabel.Name = "dateLabel";
            dateLabel.Size = new Size(39, 17);
            dateLabel.TabIndex = 5;
            dateLabel.Text = "Date:";
            // 
            // dateTimePicker
            // 
            dateTimePicker.Location = new Point(105, 86);
            dateTimePicker.MaxDate = new DateTime(2100, 12, 31, 0, 0, 0, 0);
            dateTimePicker.MinDate = new DateTime(2000, 1, 1, 0, 0, 0, 0);
            dateTimePicker.Name = "dateTimePicker";
            dateTimePicker.Size = new Size(205, 23);
            dateTimePicker.TabIndex = 6;
            dateTimePicker.Value = new DateTime(2024, 3, 2, 22, 31, 33, 0);
            // 
            // TransactionForm
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(322, 159);
            Controls.Add(dateTimePicker);
            Controls.Add(dateLabel);
            Controls.Add(confirmButton);
            Controls.Add(cancelButton);
            Controls.Add(descriptionLabel);
            Controls.Add(descriptionTextBox);
            Controls.Add(amountTextBox);
            Controls.Add(amountLabel);
            Name = "TransactionForm";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label amountLabel;
        private TextBox amountTextBox;
        private TextBox descriptionTextBox;
        private Label descriptionLabel;
        private Button cancelButton;
        private Button confirmButton;
        private Label dateLabel;
        private DateTimePicker dateTimePicker;
    }
}