let heading = "Simple Interest Calculation";
let amount = "Principal Amount ($):"
let rate = "annual interest rate (%):"
let year = "number of year:"
let amountcalculate = "2000";
let r = 5 ;
let y = 5 ;
let total =  amountcalculate * ( 1 + (r * y) );
let interest = total - amountcalculate;

document.getElementById('heading').innerHTML = " "+ heading;
document.getElementById('amount').innerHTML = " " + amount;
document.getElementById('rate').innerHTML = " "+ rate;
document.getElementById('year').innerHTML = " " + year;
document.getElementById('amountcalculate').innerHTML = " " + amountcalculate;
document.getElementById('r').innerHTML = " "+ r;
document.getElementById('y').innerHTML = " " + y;
document.getElementById('interest').innerHTML = " "+ interest;

