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


document.getElementById('burger').onclick = () => {
    document.getElementById('burger').style.display = "none"
    document.getElementById('close').style.display = "block"
}

document.getElementById('close').onclick = () => {
    document.getElementById('close').style.display = "none"
    document.getElementById('burger').style.display = "block"
}