// mobile-menu.js
const menuToggle = document.getElementById('mobile-menu-toggle');
const menuList = document.getElementById('mobile-menu-list');

menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('active');
    
});
// mobile-menu.js
const loginButton = document.getElementById('loginButton');
const loginOptions = document.getElementById('login-options');

loginButton.addEventListener('click', () => {
    loginOptions.classList.toggle('active');
});
