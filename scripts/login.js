document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const togglePasswordBtn = document.getElementById("togglePassword");
    const passwordIcon = document.getElementById("passwordIcon");
    const loginForm = document.getElementById("loginForm");
    const backBtn = document.getElementById("backBtn");

    // Toggle Password Visibility (Eye Icon)
    if (togglePasswordBtn) {
        togglePasswordBtn.addEventListener("click", () => {
            const isPassword = passwordInput.type === "password";
            passwordInput.type = isPassword ? "text" : "password";
            passwordIcon.textContent = isPassword ? "visibility_off" : "visibility";
        });
    }

    // Login Form Submit (Directs to Home)
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            // In future steps, Firebase Auth will handle validation here
            window.location.href = "home.html";
        });
    }

    // Back Button Handler
    if (backBtn) {
        backBtn.addEventListener("click", () => {
            window.history.back();
        });
    }
});
