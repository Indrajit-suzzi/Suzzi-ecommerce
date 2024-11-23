document.querySelectorAll('.toggle-password').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const passwordField = toggle.previousElementSibling;
        const type = passwordField.type === 'password' ? 'text' : 'password';
        passwordField.type = type;
        toggle.classList.toggle('fa-eye-slash');
    });
});
