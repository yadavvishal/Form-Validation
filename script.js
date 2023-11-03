function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var nameError = document.getElementById("name-error");
    var emailError = document.getElementById("email-error");
    var passwordError = document.getElementById("password-error");

    var isValid = true;

    // Reset error messages
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    // Name validation (should not be empty)
    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    // Email validation (should be a valid email format)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Invalid email address";
        isValid = false;
    }

    // Password validation (should be at least 6 characters long)
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    // If the form is valid, you can submit the form or perform further actions
    if (isValid) {
        alert("Form submitted successfully!");
        // You can also submit the form using document.getElementById("myForm").submit();
    }
}
