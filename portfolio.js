const navbarToggler = document.querySelector('#burger');
let togglerState = true;

navbarToggler.addEventListener('click', () => {
    const mainNav = document.querySelector('#main');

    mainNav.classList.toggle('active-main');
    togglerState = !togglerState;
    if (togglerState) {
        navbarToggler.innerHTML = '<i class="fas fa-bars"></i>'
    } else {
        navbarToggler.innerHTML = '<i class="fas fa-hamburger"></i>'
    }
})