const { Given, When, Then } = require('@cucumber/cucumber')

let account_balance = ' '
let withdrawal_fees = ' '
let withdrawAmount = ' '

//! 1) Scenario: Ensuring integrity of withdrawals # transaction-features/withdraw_transaction.feature:21
//    ? Given that account balance is UGX 100000

Given('that account balance is UGX {int}', function(account_balance) {
    account_balance = 100000;
    return account_balance;
});

//    ? Given withdrawal fees of UGX 5000

Given('withdrawal fees of UGX {int}', function(withdrawal_fees) {
    withdrawal_fees = 5000;
    return withdrawal_fees;
});

//    ? And maintaining a minimum balance of UGX 20000

Given('maintaining a minimum balance of UGX {int}', function(min_balance) {
    min_balance = 20000;
    return min_balance;
});

//    ? When I withdraw amount UGX "55000"

When('I withdraw amount UGX {string}', function(withdrawAmount) {
    return withdrawAmount;
});

//    ? Then Account balance becomes UGX "40000"

Then('Account balance becomes UGX {string}', function(newBalance) {
    newBalance = account_balance - withdrawal_fees - withdrawAmount
    return newBalance;
});