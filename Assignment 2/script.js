document.addEventListener('DOMContentLoaded', function () {
    // Handle registration
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            // Save to localStorage (simulating CSV storage)
            const user = { username, password, name, email };
            localStorage.setItem(username, JSON.stringify(user));

            alert('Registration successful!');
            window.location.href = 'login.html';
        });
    }

    // Handle login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const loginUsername = document.getElementById('loginUsername').value;
            const loginPassword = document.getElementById('loginPassword').value;

            const storedUser = JSON.parse(localStorage.getItem(loginUsername));
            if (storedUser && storedUser.password === loginPassword) {
                alert('Login successful!');
                localStorage.setItem('currentUser', JSON.stringify(storedUser));
                window.location.href = 'user-dashboard.html';
            } else {
                alert('Invalid username or password.');
            }
        });
    }

    // Display user information
    const userInfo = document.getElementById('userInfo');
    if (userInfo) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            userInfo.innerHTML = `<h2>Welcome, ${currentUser.name}!</h2>
                                  <p>Email: ${currentUser.email}</p>
                                  <p>Username: ${currentUser.username}</p>
                                  <p>Random Fact: You love exploring new places!</p>`;
        } else {
            userInfo.innerHTML = '<p>No user logged in.</p>';
        }
    }
});
