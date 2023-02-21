function lightMode() {
    const moon = document.querySelector('.moon');
    const topNav = document.querySelector('.topnav');
    const body = document.querySelector('body');
    const sun = document.querySelector('.sun');
    sun.addEventListener('click', (e) => {
        e.preventDefault();
        topNav.style.background = 'rgba(181, 177, 177, 0.31)';
        body.style.background = 'azure';
        sun.classList.add('non_active');
        moon.classList.remove('non_active');
    });
}
export default lightMode;