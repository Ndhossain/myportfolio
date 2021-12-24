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
let down = document.getElementById('downerArrow');

let x = 0;

up.addEventListener('click', function () {
    if (x > '-46') {
        x = x - 23;
        slide.style.top = x + 'em';
    }
})

down.addEventListener('click', function () {
    if (x < 0) {
        x = x + 23;
        slide.style.top = x + 'em';
    }
})

// blogs

let blogsSlide = document.getElementById('blogSlider');
let left = document.getElementById('leftArrow');
let right = document.getElementById('rightArrow');
let width = screen.width;

let b = 0;

right.addEventListener('click', function () {
    if (b > '-100' && width > 921) {
        b = b - 50;
        blogsSlide.style.left = b + '%';
    } else if (b > '-300' && width <= 921) {
        b = b - 100;
        blogsSlide.style.left = b + '%';
    }
})

left.addEventListener('click', function () {
    if (b < 0 && width > 921) {
        b = b + 50;
        blogsSlide.style.left = b + '%';
    } else if (b < 0 && width <= 921) {
        b = b + 100;
        blogsSlide.style.left = b + '%';
    }
})

// forms

const inputs = document.querySelectorAll('.input');

function focusFunc() {
    let prent = this.parentNode;
    prent.classList.add('focus')
};

function blurFunc() {
    let prent = this.parentNode;
    if (this.value == '') {
        prent.classList.remove('focus')
    }
};


inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc)
});

// footer

const d = new Date();
let time = d.getFullYear()

document.getElementById('time').innerHTML = time