document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navLinks = document.querySelector('.nav-links');
    
    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
    
    window.onscroll = function() { progressBar() };

    function progressBar() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.getElementById("progressBar").style.width = scrolled + "%";
    }
    
    document.querySelectorAll('.cta.ripple').forEach(button => {
        button.addEventListener('click', function (e) {
            const rect = button.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.className = 'ripple-effect';
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;
            button.appendChild(ripple);
            setTimeout(() => ripple.remove(), 1000);
        });
    });
});
