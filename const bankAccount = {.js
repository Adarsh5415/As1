const bankAccount = {
    customersaccountNumber: '',
    accountbalance: 0,
    holderName: '',
  
    
    deposit: function(amount) {
      if (amount > 0) {
        this.accountbalance += amount;
        console.log(`Successfully deposited {amount}. Current balance: {this.accountbalancebalance}`);
      } else {
        console.log('Invalid amount. Deposit amount must be greater than 0.');
      }
    },
  
   
    withdraw: function(amount) {
      if (amount > 0) {
        if (amount <= this.accountbalancebalance) {
          this.balance -= amount;
          console.log(`transaction successfull' {amount}. Current balance: {this.balance}`);
        } else {
          console.log('low balance . you can not withdraw more than available amount.');
        }
      } else {
        console.log('Invalid amount request. Withdrawal can not be 0.');
      }
    }
  };
  
  // Example usage
  bankAccount.customersaccountNumber = '12123123123';
  bankAccount.accountbalance = 5000000;
  bankAccount.holderName = 'Mittal';
  
  console.log(`Account Number: {bankAccount.customersaccountNumberaccountNumber}`);
  console.log(`customer Name: {bankAccount.holderName}`);
  console.log(`Balance: {bankAccount.accountbalancebalance}`);
  
  bankAccount.deposit(55000);
  bankAccount.withdraw(1700);
  bankAccount.withdraw(3400);