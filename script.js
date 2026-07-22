// Screen Navigation Function
function navigateTo(screenId) {
    const screens = document.querySelectorAll('.page-screen');
    screens.forEach(screen => screen.classList.remove('active'));

    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // 1. Splash Screen Auto Transition to Login Screen
    setTimeout(() => {
        navigateTo('loginScreen');
    }, 2000);

    // 2. Login Logic
    const mobileInput = document.getElementById('mobileInput');
    const loginContinueBtn = document.getElementById('loginContinueBtn');

    if (loginContinueBtn) {
        loginContinueBtn.addEventListener('click', () => {
            const phone = mobileInput.value.trim();
            if (phone.length === 10 && /^\d+$/.test(phone)) {
                navigateTo('homeScreen');
            } else {
                alert('Please enter a valid 10-digit mobile number.');
            }
        });
    }

    // Payment Selection Switcher
    const paymentOptions = document.querySelectorAll('.payment-option');
    paymentOptions.forEach(option => {
        option.addEventListener('click', () => {
            paymentOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        });
    });
});
