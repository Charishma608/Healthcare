// Function to handle navigation
function navigateTo(page) {
   
   
    window.location.href = page + ".html";


}

// Function to handle login
function login() {
    // Basic login logic 
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'demo' && password === 'demo') {
        alert('Login successful!');
        
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
