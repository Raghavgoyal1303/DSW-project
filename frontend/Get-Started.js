

document.getElementById("admin").addEventListener("click", () => {
    document.getElementById("page2").scrollIntoView({ behavior: "smooth" });
});


document.getElementById("faculty").addEventListener("click", () => {
    document.getElementById("page3").scrollIntoView({ behavior: "smooth" });
});


document.getElementById("club").addEventListener("click", () => {
    document.getElementById("page4").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("get-started-home").addEventListener("click", () => {
    window.location.href = "index.html";
});

document.getElementById("get-started-about-us").addEventListener("click", () => {
    window.location.href = "index.html#aboutpage";
});

document.getElementById("get-started-student-services").addEventListener("click", () => {
    window.location.href = "student-services.html";
});

document.getElementById("get-started-contact-us").addEventListener("click", () => {
    window.location.href = "index.html#page6-contact-us";
    // Add this script to the index.html page
});



// login/register script for admin

document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await axios.post('http://localhost:3000/api/auth/login', {
            email: email,
            password: password
        }, {
            withCredentials: true, // Allows cookies and other credentials to be sent
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Assuming the response contains the token
        const token = response.data.token;

        // Store the token in localStorage (or sessionStorage)
        localStorage.setItem('authToken', token);

        // Decode the token to check the user's role
        const payload = JSON.parse(atob(token.split('.')[1]));
        if (payload.user.role === 'admin') {
            window.location.href = "admin-dashboard.html";
            // Redirect to admin dashboard or show admin content
            document.getElementById('message1').innerText = 'Welcome, Admin!';
        } else {
            document.getElementById('message1').innerText = 'Access denied. You are not an admin.';
        }
    } catch (error) {
        console.error('Error logging in', error);
        document.getElementById('message1').innerText = 'Login failed. Please check your credentials.';
    }
});






// login/register script for council

document.getElementById('page3-loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('email2').value;
    const password = document.getElementById('password2').value;

    console.log('Email:', email);  // Log the email to verify it
    console.log('Password:', password);  // Log the password to verify it

    try {
        const response = await axios.post('http://localhost:3000/api/council/login', {
            email: email,
            password: password
        }, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log('Response from server:', response);  // Log the full response

        const councilMember = response.data.councilMember;
        document.getElementById('message2').innerText = `Welcome, ${councilMember.username}!`;

        window.location.href = "Council-dashboard.html";
    } catch (error) {
        console.error('Error logging in', error);

        if (error.response) {
            console.log('Error response from server:', error.response.data);  // Log the server error details
            document.getElementById('message2').innerText = error.response.data.message || 'Login failed. Please check your credentials.';
        } else {
            document.getElementById('message2').innerText = 'An error occurred. Please try again later.';
        }
    }
});
