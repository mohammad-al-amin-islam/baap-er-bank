//handle delposit button event
document.getElementById('diposit-button').addEventListener('click',function(){
    //get ammount deposit
    const depositInput = document.getElementById('diposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    const outputField = document.getElementById('total-deposit');
    const previousDepositAmountText = outputField.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);

    const totalDepositAmount = newDepositAmount + previousDepositAmount;
    outputField.innerText = totalDepositAmount;
    
    //total balance
    const presentBalance = document.getElementById('total-balance');
    const presentBalanceText = presentBalance.innerText; 
    const previousAmount = parseFloat(presentBalanceText);
    const newTotalBalance = newDepositAmount + previousAmount;
    presentBalance.innerText = newTotalBalance;

    //clear input value
    depositInput.value = "";
})

//handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click',function(){
    const getWithdrawBalance = document.getElementById('withdraw-input');
    const newWithdrawBalanceText = getWithdrawBalance.value;
    const newWithdrawBalance = parseFloat(newWithdrawBalanceText);

    //set withdraw total
    const withdraw = document.getElementById('total-withdraw');
    const withdrawBalanceText = withdraw.innerText;
    const withdrawBalance = parseFloat(withdrawBalanceText);

    const totalWithdraw = newWithdrawBalance  + withdrawBalance;
    withdraw.innerText = totalWithdraw;

    //update balance
    const presentBalance = document.getElementById('total-balance');
    const presentBalanceText = presentBalance.innerText; 
    const previousAmount = parseFloat(presentBalanceText);
    const newTotalBalance = previousAmount - newWithdrawBalance ;
    presentBalance.innerText = newTotalBalance;

    //clear 
    getWithdrawBalance.value = "";

})