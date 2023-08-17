// scripts/form-validation.js
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function (event) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        let valid = true;
        
        if (nameInput.value.trim() === '') {
            valid = false;
            nameInput.classList.add('invalid');
        } else {
            nameInput.classList.remove('invalid');
        }
        
        if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
            valid = false;
            emailInput.classList.add('invalid');
        } else {
            emailInput.classList.remove('invalid');
        }
        
        if (messageInput.value.trim() === '') {
            valid = false;
            messageInput.classList.add('invalid');
        } else {
            messageInput.classList.remove('invalid');
        }
        
        if (!valid) {
            event.preventDefault();
        }
    });
    
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
