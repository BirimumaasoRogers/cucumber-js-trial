let common = [
    'transaction-features/**/withdraw_transaction.feature', //specify the feature file to load
    '-f @cucumber/pretty-formatter', //uses the pretty formatter to display the steps in the CLI
    '--require transaction-features/step-definitions/**', //identify the steps file to use
    // '--guess',
    '--publish-quiet', //remove extra logging in terminal
    '--publish' // publish report
].join(' ')

module.exports = { default: common }