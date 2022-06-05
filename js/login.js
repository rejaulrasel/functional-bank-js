//event handler of login button
document.getElementById('login-button').addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const userEmail = emailField.value;

    const passwordField = document.getElementById('password-field');
    const userPassword = passwordField.value;
    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }

})