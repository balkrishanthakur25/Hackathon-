function calculateTip() {

let bill = document.getElementById("bill").value;
let tip = document.getElementById("tip").value;
let people = document.getElementById("people").value;

bill = Number(bill);
tip = Number(tip);
people = Number(people);

if(!bill || !tip || !people){
    document.getElementById("error").innerText = "Fill all fields";
    return;
}

let totalTip = bill * tip / 100;
let tipPerPerson = totalTip / people;
let totalPerPerson = (bill + totalTip) / people;

document.getElementById("result").innerHTML =
"Tip per person: ₹ " + Math.round(tipPerPerson) +
"<br>Total per person: ₹ " + Math.round(totalPerPerson);

}

function resetForm(){

document.getElementById("bill").value = "";
document.getElementById("tip").value = "";
document.getElementById("people").value = "";

document.getElementById("result").innerHTML =
"Tip per person: ₹0 <br>Total per person: ₹0";

document.getElementById("error").innerText = "";

}