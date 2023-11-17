function init() {
    $('.project-examples').slick({
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 3000,
        dots: true,

    });

    $('.project-examples').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery:{
            enabled:true
        }
    });

    let burger = document.getElementById('burger');
    let close = document.getElementById('close');
    let menu = document.getElementById('menu');
    let menuTeam = document.getElementById('menu-team');
    let menuProjects = document.getElementById('menu-projects');
    let menuContacts = document.getElementById('menu-contacts');
    let logo = document.getElementById('logo');

    menuTeam.onclick = () => {
        close.style.display = "none"
        burger.style.display = "block"
        menu.classList.remove('animate__fadeInRight')
        menu.classList.add('animate__fadeOutRight')
    }
    menuProjects.onclick = () => {
        close.style.display = "none"
        burger.style.display = "block"
        menu.classList.remove('animate__fadeInRight')
        menu.classList.add('animate__fadeOutRight')
    }
    menuContacts.onclick = () => {
        close.style.display = "none"
        burger.style.display = "block"
        menu.classList.remove('animate__fadeInRight')
        menu.classList.add('animate__fadeOutRight')
    }
    logo.onclick = () => {
        close.style.display = "none"
        burger.style.display = "block"
        menu.classList.remove('animate__fadeInRight')
        menu.classList.add('animate__fadeOutRight')
    }

    burger.onclick = () => {
        burger.style.display = "none"
        close.style.display = "block"
        menu.style.display = "block"
        menu.classList.remove('animate__fadeOutRight')
        menu.classList.add('animate__fadeInRight')
    }

    close.onclick = () => {
        close.style.display = "none"
        burger.style.display = "block"
        menu.classList.remove('animate__fadeInRight')
        menu.classList.add('animate__fadeOutRight')
    }
}
init();
