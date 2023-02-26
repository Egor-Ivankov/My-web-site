function lightMode() {
    const moon = document.querySelector('.moon');
    const topNav = document.querySelector('.topnav');
    const body = document.querySelector('body');
    const sunIcon = document.querySelector('.sun');

    if (localStorage.getItem('moon') == 'false') {
        sun();
    }

    sunIcon.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.setItem('moon', 'false');
        sun();
    });

    function sun () {
        topNav.style.background = 'rgba(181, 177, 177, 0.31)';
        body.style.background = 'azure';
        sunIcon.classList.add('non_active');
        moon.classList.remove('non_active');
    } 
}
export default lightMode;