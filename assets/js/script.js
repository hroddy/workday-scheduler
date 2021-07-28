//header date variables
var today = new Date();
var date = today.getFullYear()+' / '+(today.getMonth()+1)+' / '+today.getDate();
var weekday = new Date().toLocaleDateString('en', {weekday:'long'});
document.getElementById("currentDay").innerHTML = weekday+" "+" "+" "+date;