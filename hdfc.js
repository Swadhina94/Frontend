function CalculatorEMI(){
    var p =parseInt(document.getElementById("rangeAmount").value);
    var n = parseInt(document.getElementById("rangeYears").value)*12;
    var r = parseFloat(document.getElementById("rangeRate").value)/12/100;
    var EMI = p * r * Math.pow(1 + r, n) /  (Math.pow(1 + r, n) - 1);
    document.getElementById("lblInstallment").innerHTML = EMI.toLocaleString("en-in",{style:"currency",currency:"INR",minimumFractionDigits:0})
}

function AmountChange(){
    document.getElementById("txtAmount").value = document.getElementById("rangeAmount").value;
}
function YearChange(){
    document.getElementById("txtYears").value = document.getElementById("rangeYears").value;
}
function RateChange(){
    document.getElementById("txtRate").value = document.getElementById("rangeRate").value
}