// input function
function getInput(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    const inputAmount = parseFloat(inputFieldText);
    inputField.value = '';
    return inputAmount;

}

//total transaction function

function getTransaction(transactionId, inputAmount) {
    const previousTransaction = document.getElementById(transactionId);
    const previousTransactionText = previousTransaction.innerText;
    const previousTransactionAmount = parseFloat(previousTransactionText);
    const totalTransaction = (previousTransactionAmount + inputAmount).toFixed(2);
    previousTransaction.innerText = totalTransaction;
}

//total balance part
function calculateTotalBalance(balanceId, inputAmount, input) {
    const balance = document.getElementById(balanceId);
    const balanceText = balance.innerText;
    const balanceAmount = parseFloat(balanceText);

    if (input == 'deposit-field') {
        const totalBalance = (balanceAmount + inputAmount).toFixed(2);
        balance.innerText = totalBalance;
    }
    else if (input == 'withdraw-field') {
        const totalBalance = (balanceAmount - inputAmount).toFixed(2);
        balance.innerText = totalBalance;
    }



}

document.getElementById('deposit-button').addEventListener('click', function () {
    const inputAmount = getInput('deposit-field');
    const totalTransaction = getTransaction('deposit-reserve', inputAmount);
    console.log(totalTransaction);
    calculateTotalBalance('balance-reserve', inputAmount, 'deposit-field');



})


document.getElementById('withdraw-button').addEventListener('click', function () {
    const inputAmount = getInput('withdraw-field');
    getTransaction('withdraw-reserve', inputAmount);
    calculateTotalBalance('balance-reserve', inputAmount, 'withdraw-field');


})

