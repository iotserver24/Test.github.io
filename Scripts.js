document.addEventListener('DOMContentLoaded', function() {
    const getStartedButton = document.getElementById('get-started');
    const submitPromoButton = document.getElementById('submit-promo');
    const promoSection = document.getElementById('promo-section');
    const promoCodeInput = document.getElementById('promo-code');
    const mainContainer = document.getElementById('main-container');

    // Check local storage for user choice
    const userChoice = localStorage.getItem('userChoice');

    if (userChoice === 'nopromo') {
        window.location.href = 'https://nopromo.cc';
    } else if (userChoice === 'promo') {
        window.location.href = 'https://promo.cc';
    } else {
        mainContainer.style.display = 'block';
    }

    getStartedButton.addEventListener('click', function() {
        localStorage.setItem('userChoice', 'nopromo');
        window.location.href = 'https://nopromo.cc';
    });

    submitPromoButton.addEventListener('click', function() {
        const promoCode = promoCodeInput.value;
        if (promoCode === 'ABCD') {
            localStorage.setItem('userChoice', 'promo');
            window.location.href = 'https://promo.cc';
        } else {
            alert('Invalid promo code.');
        }
    });
});
