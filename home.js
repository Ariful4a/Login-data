// add money 
document.getElementById('add-btn').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = document.getElementById('add-money').value;
    const pinNumber = document.getElementById('pin-number').value;

    // chack condition 
    if(pinNumber === '2460'){
        const currentBalance = document.getElementById('balance').innerText;
        const totalBalance = parseFloat(addMoney) + parseFloat(currentBalance);
        document.getElementById('balance').innerText = totalBalance;
        document.getElementById('add-money').value = '';
        document.getElementById('pin-number').value = '';

    }else{
        alert('Pin not matched');
    }
    
});