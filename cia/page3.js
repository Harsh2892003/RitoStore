document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Simple form validation
        if (!email || !password) {
            alert('Please fill in both fields');
            return;
        }

        // Fetch call to the backend API
        fetch('http://localhost:5004/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Response Data:', data);

            if (data.success) {
                alert('Login successful! Redirecting...');
                window.location.href = 'page1.html'; // Redirect after successful login
            } else {
                alert('Error: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
            alert('Error during login. Please try again.');
        });
    });
});