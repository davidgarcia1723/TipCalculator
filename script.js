document.querySelector('#tip-form').onchange = function() { // Function to Calculate tip
    var bill = Number(document.getElementById('billTotal').value); // Getting Bill amount from form
    var tip = document.getElementById('tipInput').value; // Tip percentage from slider
    document.getElementById('tipOutput').innerHTML = `${tip}%`; // innerHTML to show tip amount
    var tipValue = bill * (tip/100); // Calculating the Amount of tip
    var finalBill = bill + tipValue; // Final bill amount with Tip

    console.log(finalBill);
    var tipAmount = document.querySelector('#tipAmount'); // creating variable for Tip and Bill with Tip
    var totalBillWithTip = document.querySelector('#totalBillWithTip');

    tipAmount.value = tipValue.toFixed(2); // toFixed is used to see the numbers displayed after the decimal point, which is 2 in this case because money
        totalBillWithTip.value = finalBill.toFixed(2); // Final Amount is calculated with decimal points specified

    // Show Results
    document.getElementById('results').style.display = 'block';
}