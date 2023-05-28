document.getElementById('calculate-btn').addEventListener('click', function(){
    const  foodField = document.getElementById('food-field');
    const fooFieldString = parseInt(foodField.value);
    console.log(fooFieldString);
    const clothesField = document.getElementById('clothes-field');
    const clothesFieldString = parseInt(clothesField.value);
    console.log(clothesFieldString);
    const rentField = document.getElementById('rent-field');
    const rentFieldString =parseInt(rentField.value);
    console.log(rentFieldString)
//   total amount
    const totalAmount  = fooFieldString + clothesFieldString + rentFieldString;
    console.log(totalAmount)
    // total Display
    const totalMoney = document.getElementById('total');
    totalMoney.innerText =totalAmount;
    // Minus
    const incomeField = document.getElementById('income-field');
    const incomeFieldString = parseInt(incomeField.value);
    const balanceAmount = incomeFieldString - totalAmount;
// display balance
    const balanceDisplay = document.getElementById('balance');
    balanceDisplay.innerText = balanceAmount;
    console.log(balanceDisplay)
   

})
