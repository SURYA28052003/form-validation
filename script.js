document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    errorMessage.innerHTML = "";

    const fullName = form.fullName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (fullName.length < 5) {
      displayError("Name must be at least 5 characters");
    } else if (!email.includes("@")) {
      displayError("Enter a valid email");
    } else if (phone.length !== 10 || phone === "123456789") {
      displayError("Enter a valid phone number");
    } else if (
      password === "password" ||
      password === fullName ||
      password.length < 8
    ) {
      displayError("Password is not strong");
    } else if (password !== confirmPassword) {
      displayError("Passwords do not match");
    } else {
      alert("Registration successful!");
    }
  });

  function displayError(message) {
    errorMessage.innerHTML = message;
  }
});
