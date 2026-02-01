document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navOverlay = document.getElementById('nav-overlay');

    if (!burgerBtn || !navMenu || !navOverlay) return;

    function toggleMenu() {
        burgerBtn.classList.toggle('open');
        navMenu.classList.toggle('open');
        navOverlay.classList.toggle('open');
        document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    }

    burgerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    navOverlay.addEventListener('click', toggleMenu);

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('open')) {
                toggleMenu();
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('open')) {
            toggleMenu();
        }
    });
});
