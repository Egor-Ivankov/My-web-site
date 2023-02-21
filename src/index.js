import cards from './cards';
import darkMode from './dark-mode';
import lightMode from './light-mode';
document.addEventListener('DOMContentLoaded', () => {

    try{
        cards();
    } catch (e) {}

    darkMode();
    lightMode();
});