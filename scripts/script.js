const body = document.body;
const hamburger = document.getElementById('hamburger');

// Responsive Menu
hamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
    body.classList.toggle('show');

    const isOpen = body.classList.contains('show');
    hamburger.setAttribute('aria-expanded', isOpen);
}

// Close the menu with the Escape key and return focus to the button
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && body.classList.contains('show')) {
        body.classList.remove('show');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.focus();
    }
});
