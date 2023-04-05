let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');
let form = document.querySelector('form');
let submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', (event) => {
    if(password.value !== confirmPassword.value) {
        alert('The passwords don\'t match');
        event.preventDefault(); 
    }
});