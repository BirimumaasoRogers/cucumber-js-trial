// const { Given, When, Then } = require('@cucumber/cucumber')


// //variables to use
// let withdraw_amount = ' '
// let fee = ' '
// let account_balance = ' '

// //! 1) Scenario: Successful withdrawal 
// //    ? Given that account has UGX "100000"

// Given('that account has UGX {string}', function(account_balance) {
//     account_balance = 100000;
//     return account_balance;
// });

// //  ? And transaction fees of UGX "5000"

// Given('transaction fees of UGX {string}', function(fee) {
//     fee = 5000;
//     return fee;
// });

// //  ? But maintaining minimum balance of UGX "20000"

// Given('maintaining minimum balance of UGX {string}', function(min_balance) {
//     min_balance = 20000;
//     return min_balance;
// });

// //  ? When I withdraw UGX "50000"

// When('I withdraw UGX {string}', function(withdraw_amount) {
//     withdraw_amount = 50000;
//     return withdraw_amount;
// });

// //  ? Then Account balance is "45000"

// Then('Account balance is {string}', function(balance) {
//     balance = account_balance - fee - withdraw_amount
//     return balance;
// });


// // //! 2) Scenario: Failed withdrawal # transaction-features/transaction.feature:22
// // //    ? Given that account has UGX "100000"

// // Given('that account has UGX {string}', function(account_balance) {
// //     account_balance = 100000;
// //     return account_balance;
// // });

// // //  ? And transaction fees of UGX "5000"

// // Given('transaction fees of UGX {string}', function(fee) {
// //     fee = 5000;
// //     return fee;
// // });

// // //  ? But maintaining minimum balance of UGX "20000"

// // Given('maintaining minimum balance of UGX {string}', function(min_balance) {
// //     min_balance = 20000;
// //     return min_balance;
// // });

// // //  ? When I withdraw UGX "80000"

// // When('I withdraw UGX {string}', function(withdraw_amount) {
// //     withdraw_amount = 80000;
// //     return withdraw_amount;
// // });

// // //  ? Then Account balance is "95000"

// // Then('Account balance is {string}', function(balance) {
// //     balance = account_balance - fee - withdraw_amount
// //     return balance;
// // });


// // //! 3) Scenario: Successful deposit # transaction-features/transaction.feature:34
// // //    ? Given that the account has UGX 50000

// // Given('that the account has UGX {int}', function(int) {
// //     // Given('that the account has UGX {float}', function (float) {
// //     // Write code here that turns the phrase above into concrete actions
// //     return 'pending';
// // });

// // //  ? And transaction fees of UGX 2500

// // Given('transaction fees of UGX {int}', function(int) {
// //     // Given('transaction fees of UGX {float}', function (float) {
// //     // Write code here that turns the phrase above into concrete actions
// //     return 'pending';
// // });

// // //  ? But Account is "unlocked"

// // Given('Account is {string}', function(string) {
// //     // Write code here that turns the phrase above into concrete actions
// //     return 'pending';
// // });

// // //  ? When I deposit UGX 50000

// // When('I deposit UGX {int}', function(int) {
// //     // When('I deposit UGX {float}', function (float) {
// //     // Write code here that turns the phrase above into concrete actions
// //     return 'pending';
// // });

// // //  ? And Account state is "unlocked"

// // When('Account state is {string}', function(string) {
// //     // Write code here that turns the phrase above into concrete actions
// //     return 'pending';
// // });

// // //  ? Then Feedback reads "Successful"

// // Then('Feedback reads {string}', function(string) {
// //     // Write code here that turns the phrase above into concrete actions
// //     return 'pending';
// // });


// // //! 4) Scenario: Failed deposit # transaction-features/transaction.feature:40
// // //    ? Given that the account has UGX 50000

// // Given('that the account has UGX {int}', function(int) {
// //     // Given('that the account has UGX {float}', function (float) {
// //     // Write code here that turns the phrase above into concrete actions
// //     return 'pending';
// // });

// // //  ? And transaction fees of UGX 2500

// // Given('transaction fees of UGX {int}', function(int) {
// //     // Given('transaction fees of UGX {float}', function (float) {
// //     // Write code here that turns the phrase above into concrete actions
// //     return 'pending';
// // });

// // //  ? But Account is "unlocked"

// // Given('Account is {string}', function(string) {
// //     // Write code here that turns the phrase above into concrete actions
// //     return 'pending';
// // });

// // //  ? When I deposit UGX 40000

// // When('I deposit UGX {int}', function(int) {
// //     // When('I deposit UGX {float}', function (float) {
// //     // Write code here that turns the phrase above into concrete actions
// //     return 'pending';
// // });

// // //  ? And Account state is "locked"

// // When('Account state is {string}', function(string) {
// //     // Write code here that turns the phrase above into concrete actions
// //     return 'pending';
// // });

// // //  ? Then Feedback reads "Unable to transact!"

// // Then('Feedback reads {string}', function(string) {
// //     // Write code here that turns the phrase above into concrete actions
// //     return 'pending';
// // });