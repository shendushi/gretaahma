
function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

   
    var emailFormat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (username.trim().length < 5) {
        alert('Username should be at least 5 characters.');
        return false;
    }

    if (username.trim() === '') {
        alert('Please enter a username.');
        return false;
    }

    if (!email.match(emailFormat)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (password.length < 8) {
        alert('Password should be at least 8 characters long.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    alert('Registration successful!');
    return true;
}

function validateLoginForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var emailFormat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (!email.match(emailFormat)) {
        alert('Please enter a valid email address.');
        return false;
    }

  
    if (email === 'example@example.com' && password === 'password') {
        alert('Login successful!');
        return true;
    } else {
        alert('Invalid email or password.');
        return false;
    }
}
