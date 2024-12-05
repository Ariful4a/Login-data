const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function(e){
    e.preventDefault();
    console.log('loginBtn clicked');

    // phone number 
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    // condition 
    if(phoneNumber === '4' && pinNumber === '2460'){
        // console.log('Login successful');
        window.location.href = '/home.html';
    }
    else{
        alert('Login failed');
    }
});