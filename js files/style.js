// Menu

var barger = document.getElementById('barger');
barger.addEventListener('click', function slider() {
    let sliding = document.getElementById('menu');
    sliding.style.transform = 'translatex(0%)'
    sliding.style.position = 'fixed'
})

var cross = document.getElementById('cross')
cross.addEventListener('click', function slider() {
    let sliding = document.getElementById('menu');
    sliding.style.transform = 'translatex(100%)'
})

// testimonial

let slide = document.getElementById('slider');
let up = document.getElementById('upperArrow');
let down = document.getElementById('downerArrow')

let x = 0;

up.addEventListener('click', function () {
    if (x > '-40') {
        x = x - 20;
        slide.style.top = x + 'em';
    }
})

down.addEventListener('click', function () {
    if (x < 0) {
        x = x + 20;
        slide.style.top = x + 'em';
    }
})