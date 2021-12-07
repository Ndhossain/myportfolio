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