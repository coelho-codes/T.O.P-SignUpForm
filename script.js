let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');
let form = document.querySelector('form');
let submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', (event) => {
    if(password.value !== confirmPassword.value) {
        alert('The passwords don\'t match');
        event.preventDefault(); 
    }
})

confirmPassword.addEventListener('input', () => {
    if(confirmPassword.value !== password.value) {
        confirmPassword.style.border = '1px solid #de4040';
    } else {
        confirmPassword.style.border = '1px solid #E5E7EB';
    }
})