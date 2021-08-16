
//DEPOSIT PART

document.getElementById('deposit-button').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositFieldValue = depositField.value;
    const newDepositAmount = parseFloat(depositFieldValue);


    const depositReserve = document.getElementById('deposit-reserve');
    const depositReserveText = depositReserve.innerText;
    const previousDepositReserveAmount = parseFloat(depositReserveText);

    depositReserve.innerText = (newDepositAmount + previousDepositReserveAmount).toFixed(2);

    //total balance
    const balanceReserve = document.getElementById('balance-reserve');
    const balanceReserveText = balanceReserve.innerText;
    const previousBalanceReserveAmount = parseFloat(balanceReserveText);

    balanceReserve.innerText = (previousBalanceReserveAmount + newDepositAmount).toFixed(2);

    depositField.value = '';
});

//WITHDRAW PART

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldValue = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawFieldValue);


    const withdrawReserve = document.getElementById('withdraw-reserve');
    const withdrawReserveText = withdrawReserve.innerText;
    const previousWithdrawReserveAmount = parseFloat(withdrawReserveText);

    withdrawReserve.innerText = (newWithdrawAmount + previousWithdrawReserveAmount).toFixed(2);

    //total balance
    const balanceReserve = document.getElementById('balance-reserve');
    const balanceReserveText = balanceReserve.innerText;
    const previousBalanceReserveAmount = parseFloat(balanceReserveText);

    balanceReserve.innerText = (previousBalanceReserveAmount - newWithdrawAmount).toFixed(2);

    withdrawField.value = '';
});