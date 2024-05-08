let product1 = "Laptop";
let price1 = "40000";
let total1 = price1;

if(total1 >= 40000){
    let discount1 = (total1 * 30)/100;
    document.getElementById('discount1').innerHTML = " " + discount1;

    let payble1 = total1 - discount1;
    document.getElementById('payble1').innerHTML = " " + payble1;
}else{
    let discount1 = 0;
    document.getElementById('discount1').innerHTML = " " + discount1;
    document.getElementById('payble1').innerHTML = " " + price1;
}
document.getElementById('product1').innerHTML = " "+ product1;
document.getElementById('price1').innerHTML = " "+ price1;
document.getElementById('total1').innerHTML = " "+ total1;

