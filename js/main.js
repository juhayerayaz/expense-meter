// throwing errors 
function negativeErorr(){
    document.getElementById('negative-number-error').style.display = 'block';
}
// error showing for wrong input
function wrongInputError(){
    document.getElementById('wrong-input').style.display = 'block';
}
// calculate function starting 
let calculateBtn = document.getElementById('calculate-btn');
calculateBtn.addEventListener('click', function(){
    // getting input values start
    let incomeField = document.getElementById('income-input').value;
    let foodField = document.getElementById('food-input').value;
    let rentField = document.getElementById('rent-input').value;
    let clothsField = document.getElementById('clothes-input').value;
    // getting input values end
    // input check for empty validation
    if((incomeField.length ==0) || (foodField.length ==0) || (rentField.length ==0) || (clothsField.length ==0)){
      wrongInputError();
    }
    else if (((incomeField.length > 0) || (foodField.length >0) || (rentField.length > 0) || (clothsField.length > 0))){
        document.getElementById('wrong-input').style.display = 'none';
        // checking if input is negetive
        if((incomeField < 0) || (foodField < 0) || (rentField < 0) || (clothsField < 0)){
            negativeErorr();
        }
        else if((incomeField >= 0) || (foodField >= 0) || (rentField >= 0) || (clothsField >= 0)) {
            document.getElementById('negative-number-error').style.display = 'none';
            // calculating expenses
           let totalExpenses = parseFloat(foodField) + parseFloat(rentField) + parseFloat(clothsField);
           document.getElementById('total-expense').innerText = totalExpenses;
        //    calculating balance
           let balance = parseFloat(incomeField) - totalExpenses;
        //    checking balance validation
           if(balance < 0){
            //    throwing error
               document.getElementById('expense-error').style.display ='block';
               document.getElementById('balance').innerText = 0;
           }
           else if(balance >= 0){
            document.getElementById('expense-error').style.display ='none';
            document.getElementById('balance').innerText = balance;
            // reseting savings and remainings after new calculation
            document.getElementById('save-amount').innerText = 0;
            document.getElementById('remaining-balance').innerText = 0;
           }
        }
    }
})
// calculate function end 

// saving function start 
let saveBtn = document.getElementById('save-btn');
saveBtn.addEventListener('click', function(){
    let saveField = document.getElementById('save-input').value;
    // checking if the input is empty
    if(saveField.length == 0){
         // calling a function which control empty input
        wrongInputError();
    }
    else if (saveField.length > 0){
        document.getElementById('wrong-input').style.display = 'none';
        // checking if input is negetive
        if(saveField < 0){
            negativeErorr();
        }
        else if(saveField >= 0){
            document.getElementById('negative-number-error').style.display = 'none';
            let incomeField = document.getElementById('income-input').value;
            // calculating percentage
            let percentage = saveField / 100;
            // calculating saving amount
            let savingAmount = incomeField * percentage;
            let balanceText = document.getElementById('balance').innerText;
            let balanceNumber = parseFloat(balanceText);
            // checking if the balance saving validation
            if (balanceNumber >= savingAmount){
                document.getElementById('insufficient-balance-error').style.display = 'none';
                document.getElementById('save-amount').innerText = savingAmount.toFixed(3);
                // calculating remaining ammount
                let remainingAmount = balanceNumber - savingAmount;
                document.getElementById('remaining-balance').innerText = remainingAmount.toFixed(3);
            }
           else if(balanceNumber < savingAmount){
            //    throwing a error
               document.getElementById('insufficient-balance-error').style.display = 'block';
           }
        }
    }
})
// saving function end 