function darkMode() {
    const moonIcon = document.querySelector('.moon');
    const topNav = document.querySelector('.topnav');
    const body = document.querySelector('body');
    const sun = document.querySelector('.sun');

    if (localStorage.getItem('moon') == 'true') {
        moon();
    }

    moonIcon.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.setItem('moon', 'true');
        moon();
    });

    function moon () {
        topNav.style.background = 'rgba(14, 14, 14, 0.199)';
        body.style.background = 'rgba(36, 37, 37, 0.5)';
        moonIcon.classList.add('non_active');
        sun.classList.remove('non_active');
}
}
export default darkMode;