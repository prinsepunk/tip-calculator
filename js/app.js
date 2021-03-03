const amount = document.getElementById('amount');
const service = document.getElementById('service');
const people = document.getElementById('people');
const each = document.getElementById('each');
const totalTip = document.getElementById('totalTip');
const tip = document.getElementById('tip');
const calculator = document.getElementById('calculator');
const form = document.getElementById('form');

function calculateTip() {
    if(amount.value === '' || service.value === 0){
        alert('Please enter values');
        return;
    } 

    if(people.value === '' || people.value <= 1 ){
        each.style.display = 'none';
    } else{
        each.style.display = 'block';
    }

    let total = (amount.value * service.value) / people.value;
    total = Math.round(total * 100)/100;
    total = total.toFixed(2);
    
    form.style.borderRadius = '0';
    totalTip.style.display = 'block';
    tip.innerHTML = total;
}

totalTip.style.display = 'none';
each.style.display = 'none';

calculator.addEventListener('click', () =>{
    calculateTip();
})