function validateForm() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const errorMessage = document.getElementById("error-message");
    errorMessage.innerHTML = "";

    if (fullName.length < 5) {
        errorMessage.innerHTML = "Full Name must be at least 5 characters.";
        return false;
    }

    if (!email.includes("@")) {
        errorMessage.innerHTML = "Please enter a valid email address.";
        return false;
    }

    if (phoneNumber === "123456789" || phoneNumber.length !== 10 || isNaN(phoneNumber)) {
        errorMessage.innerHTML = "Please enter a valid 10-digit phone number.";
        return false;
    }

    if (password === "password" || password.length < 8 || password === fullName) {
        errorMessage.innerHTML = "Password must be at least 8 characters and not 'password' or your name.";
        return false;
    }

    if (password !== confirmPassword) {
        errorMessage.innerHTML = "Password and Confirm Password do not match.";
        return false;
    }

    return true;
}
