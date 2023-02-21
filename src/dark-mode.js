function darkMode() {
    const moon = document.querySelector('.moon');
    const topNav = document.querySelector('.topnav');
    const body = document.querySelector('body');
    const sun = document.querySelector('.sun');
    moon.addEventListener('click', (e) => {
        e.preventDefault();
        topNav.style.background = 'rgba(14, 14, 14, 0.199)';
        body.style.background = 'rgba(36, 37, 37, 0.5)';
        moon.classList.add('non_active');
        sun.classList.remove('non_active');
    });
}
export default darkMode;