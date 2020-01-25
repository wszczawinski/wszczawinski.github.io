const navbarToggler = document.querySelector('#burger');
const background = document.querySelector('.background-image');
let togglerState = true;

const setBackground = () => {
    let viewportWidth = window.innerWidth;
    viewportWidth < 600 ? background.classList.add('background-image-small') : null;
}

navbarToggler.addEventListener('click', () => {
    const mainNav = document.querySelector('#main');

    mainNav.classList.toggle('active-main');
    togglerState = !togglerState;
    if (togglerState) {
        navbarToggler.innerHTML = '<i class="fas fa-bars"></i>';
    } else {
        navbarToggler.innerHTML = '<i class="fas fa-hamburger"></i>';
    }
});

jQuery('.scroll_to').click(function (e) {
    var jump = $(this).attr('href');
    var new_position = $(jump).offset();
    $('html, body').animate({
        scrollTop: new_position.top
    }, 1000);
    e.preventDefault();
});
