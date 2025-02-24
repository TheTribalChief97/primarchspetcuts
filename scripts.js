{{javascript}}
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scroll({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        e.preventDefault();
        alert('Please fill in all fields.');
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@